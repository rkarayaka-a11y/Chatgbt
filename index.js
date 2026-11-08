const MODEL = "gemini-3.6-flash";
const MAX_MESSAGE = 600;

function cors(origin) {
  const allowed = (origin || "").startsWith("https://") ? origin : "*";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}
function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...cors(origin) }
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (request.method !== "POST") {
      return json({ error: "Bu adres yalnızca POST isteği kabul eder." }, 405, origin);
    }
    const apiKey = (env.GEMINI_API_KEY || "").trim();
    if (!apiKey) return json({ error: "Cloudflare Worker içinde GEMINI_API_KEY gizli değişkeni tanımlanmamış." }, 503, origin);

    let body;
    try { body = await request.json(); }
    catch { return json({ error: "İstek verisi okunamadı." }, 400, origin); }

    const level = ["A1", "A2", "B1"].includes(body.level) ? body.level : "A1";
    const scenario = String(body.scenario || "Günlük sohbet").slice(0, 80);
    const message = String(body.message || "").trim();
    if (!message || message.length > MAX_MESSAGE) {
      return json({ error: `Mesaj 1–${MAX_MESSAGE} karakter arasında olmalı.` }, 400, origin);
    }
    const history = Array.isArray(body.history) ? body.history.slice(-12).map(m => ({
      role: m?.role === "model" ? "model" : "user",
      parts: [{ text: String(m?.text || "").slice(0, 1600) }]
    })).filter(m => m.parts[0].text) : [];

    const systemInstruction = `Du bist ein geduldiger Deutschlehrer für eine türkischsprachige Person. Gesprächsniveau: ${level}. Thema/Rollenspiel: ${scenario}.
Antworte auf jede Nutzernachricht mit genau einem JSON-Objekt und ohne Markdown oder Codeblock. Verwende diese Felder:
{"reply_de":"Deine nächste natürliche Gesprächsantwort auf Deutsch; passend zum Niveau, höchstens 2 kurze Sätze und eine klare Rückfrage, damit das Gespräch weitergeht.","reply_tr":"Die türkische Übersetzung deiner deutschen Antwort.","has_errors":true,"correction":"Falls der Nutzer einen Fehler gemacht hat: vollständiger korrigierter deutscher Satz; sonst leer.","explanation_tr":"Kurze, freundliche türkische Erklärung des wichtigsten Fehlers oder ein Lob, wenn alles richtig ist."}
Prüfe Rechtschreibung, Artikel, Kasus, Verbkonjugation, Wortstellung und natürliche Ausdrucksweise. Markiere nur echte oder lernrelevante Fehler; kleine stilistische Alternativen nicht als Fehler bewerten. Wenn die Nachricht Türkisch oder eine andere Sprache statt Deutsch enthält, bitte freundlich, sie auf Deutsch zu schreiben, und gib ein einfaches Beispiel. Erfinde keine persönlichen Angaben. Bleibe konsequent auf dem gewählten Niveau. Erkläre auf Türkisch. Die reply_de muss die Unterhaltung natürlich fortsetzen und darf nicht nur eine Fehlerkorrektur sein.`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: [...history, { role: "user", parts: [{ text: message }] }],
          generationConfig: { temperature: 0.55, maxOutputTokens: 500, responseMimeType: "application/json" }
        })
      });
      const result = await response.json();
      if (!response.ok) {
        const detail = result?.error?.message || "Gemini servisi şu anda yanıt vermiyor.";
        return json({ error: detail, googleCode: result?.error?.status || result?.error?.code || "UNKNOWN", model: MODEL }, response.status === 429 ? 429 : 502, origin);
      }
      const raw = result?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("").trim();
      if (!raw) return json({ error: "Yapay zekâ boş yanıt verdi. Tekrar deneyin." }, 502, origin);
      let data;
      try { data = JSON.parse(raw); }
      catch {
        const unfenced = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
        const start = unfenced.indexOf("{"), end = unfenced.lastIndexOf("}");
        if (start >= 0 && end > start) { try { data = JSON.parse(unfenced.slice(start, end + 1)); } catch {} }
      }
      if (!data?.reply_de) return json({ error: "Google'dan beklenen sohbet biçiminde yanıt gelmedi." }, 502, origin);
      return json({ data: {
        reply_de: String(data.reply_de || "").slice(0, 900),
        reply_tr: String(data.reply_tr || "").slice(0, 900),
        has_errors: Boolean(data.has_errors),
        correction: String(data.correction || "").slice(0, 600),
        explanation_tr: String(data.explanation_tr || "").slice(0, 700)
      }}, 200, origin);
    } catch {
      return json({ error: "İnternet bağlantısı veya AI servisiyle iletişim kurulamadı." }, 502, origin);
    }
  }
};
