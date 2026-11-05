const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const seedWords=[
{de:"das Haus",tr:"ev",level:"A1",article:"das",plural:"die Häuser",examples:[["Das Haus ist groß.","Ev büyük."],["Wir wohnen in einem kleinen Haus.","Küçük bir evde oturuyoruz."],["Das Haus hat einen Garten.","Evin bir bahçesi var."]]},
{de:"lernen",tr:"öğrenmek",level:"A1",article:"",plural:"",examples:[["Ich lerne Deutsch.","Almanca öğreniyorum."],["Wir lernen jeden Tag neue Wörter.","Her gün yeni kelimeler öğreniyoruz."]]},
{de:"der Termin",tr:"randevu",level:"A1",article:"der",plural:"die Termine",examples:[["Ich habe morgen einen Termin.","Yarın bir randevum var."],["Der Termin ist um neun Uhr.","Randevu saat dokuzda."]]},
{de:"die Wohnung",tr:"daire, ev",level:"A1",article:"die",plural:"die Wohnungen",examples:[["Meine Wohnung ist klein.","Dairem küçük."],["Wir suchen eine neue Wohnung.","Yeni bir daire arıyoruz."]]},
{de:"brauchen",tr:"ihtiyaç duymak",level:"A1",article:"",plural:"",examples:[["Ich brauche deine Hilfe.","Yardımına ihtiyacım var."],["Brauchst du noch etwas?","Başka bir şeye ihtiyacın var mı?"]]},
{de:"einkaufen",tr:"alışveriş yapmak",level:"A1",article:"",plural:"",examples:[["Am Samstag kaufen wir ein.","Cumartesi alışveriş yapıyoruz."],["Ich gehe im Supermarkt einkaufen.","Markette alışveriş yapmaya gidiyorum."]]},
{de:"der Schlüssel",tr:"anahtar",level:"A1",article:"der",plural:"die Schlüssel",examples:[["Wo ist mein Schlüssel?","Anahtarım nerede?"],["Ich finde den Schlüssel nicht.","Anahtarı bulamıyorum."]]},
{de:"die Rechnung",tr:"hesap, fatura",level:"A1",article:"die",plural:"die Rechnungen",examples:[["Kann ich bitte die Rechnung haben?","Hesabı alabilir miyim lütfen?"],["Die Rechnung ist zu hoch.","Fatura çok yüksek."]]},
{de:"öffnen",tr:"açmak",level:"A1",article:"",plural:"",examples:[["Bitte öffnen Sie das Fenster.","Lütfen pencereyi açın."],["Der Laden öffnet um acht.","Dükkân saat sekizde açılıyor."]]},
{de:"schließen",tr:"kapatmak",level:"A1",article:"",plural:"",examples:[["Kannst du die Tür schließen?","Kapıyı kapatabilir misin?"],["Das Geschäft schließt heute früh.","Mağaza bugün erken kapanıyor."]]},
{de:"die Möglichkeit",tr:"imkân, olasılık",level:"B1",article:"die",plural:"die Möglichkeiten",examples:[["Gibt es eine andere Möglichkeit?","Başka bir imkân var mı?"],["Diese Möglichkeit ist sehr interessant.","Bu olasılık çok ilginç."]]},
{de:"sich interessieren für",tr:"... ile ilgilenmek",level:"A2",article:"",plural:"",examples:[["Ich interessiere mich für Musik.","Müzikle ilgileniyorum."],["Interessierst du dich für Sport?","Sporla ilgileniyor musun?"]]},
{de:"pünktlich",tr:"dakik, zamanında",level:"A2",article:"",plural:"",examples:[["Der Bus kommt pünktlich.","Otobüs zamanında geliyor."],["Bitte sei morgen pünktlich.","Lütfen yarın dakik ol."]]},
{de:"freundlich",tr:"nazik, arkadaş canlısı",level:"A2",article:"",plural:"",examples:[["Die Verkäuferin ist sehr freundlich.","Satış görevlisi çok nazik."],["Er hat mich freundlich begrüßt.","Beni nazikçe selamladı."]]},
{de:"vergessen",tr:"unutmak",level:"A2",article:"",plural:"",examples:[["Ich habe meinen Schlüssel vergessen.","Anahtarımı unuttum."],["Vergiss bitte nicht anzurufen.","Lütfen aramayı unutma."]]},
{de:"die Gesundheit",tr:"sağlık",level:"A2",article:"die",plural:"—",examples:[["Gesundheit ist sehr wichtig.","Sağlık çok önemlidir."],["Er achtet auf seine Gesundheit.","Sağlığına dikkat ediyor."]]},
{de:"sich erinnern an",tr:"hatırlamak",level:"A2",article:"",plural:"",examples:[["Ich erinnere mich an dich.","Seni hatırlıyorum."],["Erinnerst du dich an den Urlaub?","Tatili hatırlıyor musun?"]]},
{de:"die Verspätung",tr:"gecikme",level:"A2",article:"die",plural:"die Verspätungen",examples:[["Der Zug hat zehn Minuten Verspätung.","Tren on dakika gecikmeli."],["Wegen der Verspätung komme ich später.","Gecikme nedeniyle daha geç geleceğim."]]},
{de:"die Umgebung",tr:"çevre, civar",level:"B1",article:"die",plural:"die Umgebungen",examples:[["Die Umgebung ist sehr ruhig.","Çevre çok sakin."],["Wir erkunden die Umgebung.","Çevreyi keşfediyoruz."]]},
{de:"vermeiden",tr:"kaçınmak",level:"B1",article:"",plural:"",examples:[["Du solltest Stress vermeiden.","Stresten kaçınmalısın."],["Wir müssen Fehler vermeiden.","Hatalardan kaçınmalıyız."]]},
{de:"die Erfahrung",tr:"deneyim, tecrübe",level:"B1",article:"die",plural:"die Erfahrungen",examples:[["Das war eine wichtige Erfahrung.","Bu önemli bir deneyimdi."],["Sie hat viel Erfahrung.","Onun çok deneyimi var."]]},
{de:"wahrscheinlich",tr:"muhtemelen",level:"B1",article:"",plural:"",examples:[["Er kommt wahrscheinlich morgen.","Muhtemelen yarın gelecek."],["Das ist wahrscheinlich die beste Lösung.","Bu muhtemelen en iyi çözüm."]]},
{de:"die Voraussetzung",tr:"ön koşul, şart",level:"B1",article:"die",plural:"die Voraussetzungen",examples:[["Gute Deutschkenntnisse sind eine wichtige Voraussetzung.","İyi Almanca bilgisi önemli bir ön koşuldur."],["Alle Voraussetzungen sind erfüllt.","Tüm şartlar yerine getirildi."]]},
{de:"teilnehmen an",tr:"katılmak",level:"B1",article:"",plural:"",examples:[["Ich nehme an einem Kurs teil.","Bir kursa katılıyorum."],["Viele Menschen nehmen an der Veranstaltung teil.","Etkinliğe birçok kişi katılıyor."]]}
];
const seedSentences=[
{de:"Ich gehe jeden Morgen zur Arbeit.",tr:"Her sabah işe gidiyorum.",level:"A1",similar:["Jeden Morgen fahre ich zur Arbeit.","Morgens gehe ich immer arbeiten."]},
{de:"Kannst du mir bitte helfen?",tr:"Bana lütfen yardım edebilir misin?",level:"A1",similar:["Würdest du mir bitte helfen?","Könntest du mir dabei helfen?"]},
{de:"Ich hätte gern einen Kaffee.",tr:"Bir kahve rica ediyorum.",level:"A1",similar:["Ich möchte bitte einen Kaffee.","Für mich bitte einen Kaffee."]},
{de:"Wie komme ich zum Bahnhof?",tr:"Tren istasyonuna nasıl gidebilirim?",level:"A1",similar:["Können Sie mir den Weg zum Bahnhof zeigen?","Wo ist der Bahnhof?"]},
{de:"Heute ist das Wetter besonders schön.",tr:"Bugün hava özellikle güzel.",level:"A1",similar:["Das Wetter ist heute wirklich toll.","Heute haben wir sehr schönes Wetter."]},
{de:"Wenn ich Zeit habe, besuche ich dich.",tr:"Zamanım olursa seni ziyaret ederim.",level:"A2",similar:["Ich besuche dich, falls ich Zeit habe.","Habe ich Zeit, komme ich dich besuchen."]},
{de:"Ich stehe normalerweise um sieben Uhr auf.",tr:"Normalde saat yedide kalkarım.",level:"A2",similar:["Normalerweise wache ich um sieben auf.","Um sieben Uhr beginnt mein Tag."]},
{de:"Seit zwei Jahren lerne ich Deutsch.",tr:"İki yıldır Almanca öğreniyorum.",level:"A2",similar:["Ich lerne Deutsch seit zwei Jahren.","Vor zwei Jahren habe ich angefangen, Deutsch zu lernen."]},
{de:"Ich muss heute länger arbeiten.",tr:"Bugün daha uzun çalışmak zorundayım.",level:"A2",similar:["Heute mache ich Überstunden.","Heute kann ich nicht pünktlich Feierabend machen."]},
{de:"Könnten Sie das bitte langsamer wiederholen?",tr:"Bunu lütfen daha yavaş tekrar edebilir misiniz?",level:"A2",similar:["Würden Sie das bitte noch einmal langsam sagen?","Bitte sprechen Sie etwas langsamer."]},
{de:"Ich interessiere mich besonders für deutsche Geschichte.",tr:"Özellikle Alman tarihiyle ilgileniyorum.",level:"A2",similar:["Deutsche Geschichte finde ich besonders interessant.","Mein besonderes Interesse gilt der deutschen Geschichte."]},
{de:"Obwohl es regnet, gehen wir spazieren.",tr:"Yağmur yağmasına rağmen yürüyüşe çıkıyoruz.",level:"B1",similar:["Trotz des Regens machen wir einen Spaziergang.","Es regnet, trotzdem gehen wir spazieren."]},
{de:"Ich freue mich darauf, dich bald wiederzusehen.",tr:"Seni yakında tekrar göreceğim için mutluyum.",level:"B1",similar:["Es macht mich glücklich, dich bald wiederzusehen.","Ich kann es kaum erwarten, dich wiederzusehen."]},
{de:"Wenn ich mehr Zeit hätte, würde ich öfter reisen.",tr:"Daha fazla zamanım olsaydı daha sık seyahat ederdim.",level:"B1",similar:["Mit mehr Zeit würde ich häufiger reisen.","Ich würde öfter reisen, wenn ich mehr Zeit hätte."]},
{de:"Obwohl er müde war, hat er weitergearbeitet.",tr:"Yorgun olmasına rağmen çalışmaya devam etti.",level:"B1",similar:["Er war müde, trotzdem arbeitete er weiter.","Trotz seiner Müdigkeit arbeitete er weiter."]},
{de:"Es hängt davon ab, wie viel Zeit wir haben.",tr:"Bu, ne kadar zamanımız olduğuna bağlı.",level:"B1",similar:["Das kommt darauf an, wie viel Zeit uns bleibt.","Entscheidend ist, wie viel Zeit wir haben."]},
{de:"Ich bin damit einverstanden, dass wir früher anfangen.",tr:"Daha erken başlamamıza katılıyorum.",level:"B1",similar:["Ich stimme zu, dass wir früher beginnen.","Es ist für mich in Ordnung, früher anzufangen."]}
];
const verbs=[
{v:"sein",tr:"olmak",level:"A1",type:"irregular",forms:["bin","bist","ist","sind","seid","sind"],pr:"war",pp:"gewesen"},
{v:"haben",tr:"sahip olmak",level:"A1",type:"irregular",forms:["habe","hast","hat","haben","habt","haben"],pr:"hatte",pp:"gehabt"},
{v:"gehen",tr:"gitmek",level:"A1",type:"irregular",forms:["gehe","gehst","geht","gehen","geht","gehen"],pr:"ging",pp:"gegangen"},
{v:"machen",tr:"yapmak",level:"A1",type:"regular",forms:["mache","machst","macht","machen","macht","machen"],pr:"machte",pp:"gemacht"},
{v:"aufstehen",tr:"kalkmak",level:"A2",type:"separable",forms:["stehe auf","stehst auf","steht auf","stehen auf","steht auf","stehen auf"],pr:"stand auf",pp:"aufgestanden"},
{v:"anfangen",tr:"başlamak",level:"A2",type:"separable",forms:["fange an","fängst an","fängt an","fangen an","fangt an","fangen an"],pr:"fing an",pp:"angefangen"},
{v:"werden",tr:"olmak, hâline gelmek",level:"B1",type:"irregular",forms:["werde","wirst","wird","werden","werdet","werden"],pr:"wurde",pp:"geworden"},
{v:"empfehlen",tr:"tavsiye etmek",level:"B1",type:"irregular",forms:["empfehle","empfiehlst","empfiehlt","empfehlen","empfehlt","empfehlen"],pr:"empfahl",pp:"empfohlen"}
,{v:"kommen",tr:"gelmek",level:"A1",type:"irregular",forms:["komme","kommst","kommt","kommen","kommt","kommen"],pr:"kam",pp:"gekommen"}
,{v:"sehen",tr:"görmek",level:"A1",type:"irregular",forms:["sehe","siehst","sieht","sehen","seht","sehen"],pr:"sah",pp:"gesehen"}
,{v:"sprechen",tr:"konuşmak",level:"A1",type:"irregular",forms:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],pr:"sprach",pp:"gesprochen"}
,{v:"essen",tr:"yemek",level:"A1",type:"irregular",forms:["esse","isst","isst","essen","esst","essen"],pr:"aß",pp:"gegessen"}
,{v:"fahren",tr:"araçla gitmek",level:"A1",type:"irregular",forms:["fahre","fährst","fährt","fahren","fahrt","fahren"],pr:"fuhr",pp:"gefahren"}
,{v:"arbeiten",tr:"çalışmak",level:"A1",type:"regular",forms:["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"],pr:"arbeitete",pp:"gearbeitet"}
,{v:"kaufen",tr:"satın almak",level:"A1",type:"regular",forms:["kaufe","kaufst","kauft","kaufen","kauft","kaufen"],pr:"kaufte",pp:"gekauft"}
,{v:"mitbringen",tr:"beraberinde getirmek",level:"A2",type:"separable",forms:["bringe mit","bringst mit","bringt mit","bringen mit","bringt mit","bringen mit"],pr:"brachte mit",pp:"mitgebracht"}
,{v:"einladen",tr:"davet etmek",level:"A2",type:"separable",forms:["lade ein","lädst ein","lädt ein","laden ein","ladet ein","laden ein"],pr:"lud ein",pp:"eingeladen"}
,{v:"bekommen",tr:"almak, elde etmek",level:"A2",type:"irregular",forms:["bekomme","bekommst","bekommt","bekommen","bekommt","bekommen"],pr:"bekam",pp:"bekommen"}
,{v:"denken",tr:"düşünmek",level:"B1",type:"irregular",forms:["denke","denkst","denkt","denken","denkt","denken"],pr:"dachte",pp:"gedacht"}
,{v:"entscheiden",tr:"karar vermek",level:"B1",type:"irregular",forms:["entscheide","entscheidest","entscheidet","entscheiden","entscheidet","entscheiden"],pr:"entschied",pp:"entschieden"}
,{v:"wohnen",tr:"oturmak, ikamet etmek",level:"A1",type:"regular",forms:["wohne","wohnst","wohnt","wohnen","wohnt","wohnen"],pr:"wohnte",pp:"gewohnt"}
,{v:"heißen",tr:"adı olmak",level:"A1",type:"regular",forms:["heiße","heißt","heißt","heißen","heißt","heißen"],pr:"hieß",pp:"geheißen"}
,{v:"lernen",tr:"öğrenmek",level:"A1",type:"regular",forms:["lerne","lernst","lernt","lernen","lernt","lernen"],pr:"lernte",pp:"gelernt"}
,{v:"spielen",tr:"oynamak",level:"A1",type:"regular",forms:["spiele","spielst","spielt","spielen","spielt","spielen"],pr:"spielte",pp:"gespielt"}
,{v:"fragen",tr:"sormak",level:"A1",type:"regular",forms:["frage","fragst","fragt","fragen","fragt","fragen"],pr:"fragte",pp:"gefragt"}
,{v:"antworten",tr:"cevap vermek",level:"A1",type:"regular",forms:["antworte","antwortest","antwortet","antworten","antwortet","antworten"],pr:"antwortete",pp:"geantwortet"}
,{v:"hören",tr:"duymak, dinlemek",level:"A1",type:"regular",forms:["höre","hörst","hört","hören","hört","hören"],pr:"hörte",pp:"gehört"}
,{v:"lesen",tr:"okumak",level:"A1",type:"irregular",forms:["lese","liest","liest","lesen","lest","lesen"],pr:"las",pp:"gelesen"}
,{v:"schreiben",tr:"yazmak",level:"A1",type:"irregular",forms:["schreibe","schreibst","schreibt","schreiben","schreibt","schreiben"],pr:"schrieb",pp:"geschrieben"}
,{v:"trinken",tr:"içmek",level:"A1",type:"irregular",forms:["trinke","trinkst","trinkt","trinken","trinkt","trinken"],pr:"trank",pp:"getrunken"}
,{v:"schlafen",tr:"uyumak",level:"A1",type:"irregular",forms:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"],pr:"schlief",pp:"geschlafen"}
,{v:"nehmen",tr:"almak",level:"A1",type:"irregular",forms:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],pr:"nahm",pp:"genommen"}
,{v:"geben",tr:"vermek",level:"A1",type:"irregular",forms:["gebe","gibst","gibt","geben","gebt","geben"],pr:"gab",pp:"gegeben"}
,{v:"finden",tr:"bulmak",level:"A1",type:"irregular",forms:["finde","findest","findet","finden","findet","finden"],pr:"fand",pp:"gefunden"}
,{v:"bleiben",tr:"kalmak",level:"A1",type:"irregular",forms:["bleibe","bleibst","bleibt","bleiben","bleibt","bleiben"],pr:"blieb",pp:"geblieben"}
,{v:"mögen",tr:"sevmek, hoşlanmak",level:"A1",type:"irregular",forms:["mag","magst","mag","mögen","mögt","mögen"],pr:"mochte",pp:"gemocht"}
,{v:"können",tr:"-ebilmek",level:"A1",type:"irregular",forms:["kann","kannst","kann","können","könnt","können"],pr:"konnte",pp:"gekonnt"}
,{v:"müssen",tr:"zorunda olmak",level:"A1",type:"irregular",forms:["muss","musst","muss","müssen","müsst","müssen"],pr:"musste",pp:"gemusst"}
,{v:"wollen",tr:"istemek",level:"A1",type:"irregular",forms:["will","willst","will","wollen","wollt","wollen"],pr:"wollte",pp:"gewollt"}
,{v:"dürfen",tr:"izinli olmak",level:"A1",type:"irregular",forms:["darf","darfst","darf","dürfen","dürft","dürfen"],pr:"durfte",pp:"gedurft"}
,{v:"sollen",tr:"-meli/-malı olmak",level:"A1",type:"irregular",forms:["soll","sollst","soll","sollen","sollt","sollen"],pr:"sollte",pp:"gesollt"}
,{v:"möchten",tr:"istemek (kibar istek)",level:"A1",type:"irregular",forms:["möchte","möchtest","möchte","möchten","möchtet","möchten"],pr:"möchte",pp:"—"}
,{v:"einkaufen",tr:"alışveriş yapmak",level:"A1",type:"separable",forms:["kaufe ein","kaufst ein","kauft ein","kaufen ein","kauft ein","kaufen ein"],pr:"kaufte ein",pp:"eingekauft"}
,{v:"anrufen",tr:"telefon etmek, aramak",level:"A2",type:"separable",forms:["rufe an","rufst an","ruft an","rufen an","ruft an","rufen an"],pr:"rief an",pp:"angerufen"}
,{v:"fernsehen",tr:"televizyon izlemek",level:"A2",type:"separable",forms:["sehe fern","siehst fern","sieht fern","sehen fern","seht fern","sehen fern"],pr:"sah fern",pp:"ferngesehen"}
,{v:"mitkommen",tr:"beraber gelmek",level:"A2",type:"separable",forms:["komme mit","kommst mit","kommt mit","kommen mit","kommt mit","kommen mit"],pr:"kam mit",pp:"mitgekommen"}
,{v:"zurückkommen",tr:"geri dönmek",level:"A2",type:"separable",forms:["komme zurück","kommst zurück","kommt zurück","kommen zurück","kommt zurück","kommen zurück"],pr:"kam zurück",pp:"zurückgekommen"}
,{v:"aussteigen",tr:"araçtan inmek",level:"A2",type:"separable",forms:["steige aus","steigst aus","steigt aus","steigen aus","steigt aus","steigen aus"],pr:"stieg aus",pp:"ausgestiegen"}
,{v:"einsteigen",tr:"araca binmek",level:"A2",type:"separable",forms:["steige ein","steigst ein","steigt ein","steigen ein","steigt ein","steigen ein"],pr:"stieg ein",pp:"eingestiegen"}
,{v:"umsteigen",tr:"aktarma yapmak",level:"A2",type:"separable",forms:["steige um","steigst um","steigt um","steigen um","steigt um","steigen um"],pr:"stieg um",pp:"umgestiegen"}
,{v:"vorbereiten",tr:"hazırlamak",level:"A2",type:"separable",forms:["bereite vor","bereitest vor","bereitet vor","bereiten vor","bereitet vor","bereiten vor"],pr:"bereitete vor",pp:"vorbereitet"}
,{v:"aufmachen",tr:"açmak",level:"A2",type:"separable",forms:["mache auf","machst auf","macht auf","machen auf","macht auf","machen auf"],pr:"machte auf",pp:"aufgemacht"}
,{v:"zumachen",tr:"kapatmak",level:"A2",type:"separable",forms:["mache zu","machst zu","macht zu","machen zu","macht zu","machen zu"],pr:"machte zu",pp:"zugemacht"}
,{v:"erzählen",tr:"anlatmak",level:"A2",type:"regular",forms:["erzähle","erzählst","erzählt","erzählen","erzählt","erzählen"],pr:"erzählte",pp:"erzählt"}
,{v:"besuchen",tr:"ziyaret etmek",level:"A2",type:"regular",forms:["besuche","besuchst","besucht","besuchen","besucht","besuchen"],pr:"besuchte",pp:"besucht"}
,{v:"bezahlen",tr:"ödemek",level:"A2",type:"regular",forms:["bezahle","bezahlst","bezahlt","bezahlen","bezahlt","bezahlen"],pr:"bezahlte",pp:"bezahlt"}
,{v:"bestellen",tr:"sipariş etmek",level:"A2",type:"regular",forms:["bestelle","bestellst","bestellt","bestellen","bestellt","bestellen"],pr:"bestellte",pp:"bestellt"}
,{v:"erklären",tr:"açıklamak",level:"A2",type:"regular",forms:["erkläre","erklärst","erklärt","erklären","erklärt","erklären"],pr:"erklärte",pp:"erklärt"}
,{v:"vergessen",tr:"unutmak",level:"A2",type:"irregular",forms:["vergesse","vergisst","vergisst","vergessen","vergesst","vergessen"],pr:"vergaß",pp:"vergessen"}
,{v:"verlieren",tr:"kaybetmek",level:"A2",type:"irregular",forms:["verliere","verlierst","verliert","verlieren","verliert","verlieren"],pr:"verlor",pp:"verloren"}
,{v:"gewinnen",tr:"kazanmak",level:"A2",type:"irregular",forms:["gewinne","gewinnst","gewinnt","gewinnen","gewinnt","gewinnen"],pr:"gewann",pp:"gewonnen"}
,{v:"treffen",tr:"buluşmak, karşılaşmak",level:"A2",type:"irregular",forms:["treffe","triffst","trifft","treffen","trefft","treffen"],pr:"traf",pp:"getroffen"}
,{v:"helfen",tr:"yardım etmek",level:"A2",type:"irregular",forms:["helfe","hilfst","hilft","helfen","helft","helfen"],pr:"half",pp:"geholfen"}
,{v:"tragen",tr:"taşımak, giymek",level:"A2",type:"irregular",forms:["trage","trägst","trägt","tragen","tragt","tragen"],pr:"trug",pp:"getragen"}
,{v:"waschen",tr:"yıkamak",level:"A2",type:"irregular",forms:["wasche","wäschst","wäscht","waschen","wascht","waschen"],pr:"wusch",pp:"gewaschen"}
,{v:"ziehen",tr:"taşınmak, çekmek",level:"A2",type:"irregular",forms:["ziehe","ziehst","zieht","ziehen","zieht","ziehen"],pr:"zog",pp:"gezogen"}
,{v:"steigen",tr:"yükselmek, binmek",level:"A2",type:"irregular",forms:["steige","steigst","steigt","steigen","steigt","steigen"],pr:"stieg",pp:"gestiegen"}

];
const grammar={
"Artikel":{text:"Almancada isimlerin üç artikeli vardır: der (eril), die (dişil), das (nötr). Çoğulda belirli artikel genellikle die olur.",ex:"der Tisch – die Lampe – das Buch",q:"___ Buch ist interessant.",opts:["Der","Die","Das"],a:"Das",why:"Buch kelimesinin artikeli das olduğu için doğru cevap Das."},
"Akkusativ":{text:"Akkusativ çoğunlukla doğrudan nesneyi belirtir. Belirli artikellerde yalnızca eril der → den değişir.",ex:"Ich sehe den Mann. (Adamı görüyorum.)",q:"Ich kaufe ___ Apfel.",opts:["der","den","dem"],a:"den",why:"Apfel eril bir isimdir ve doğrudan nesne olduğu için Akkusativ alır: den Apfel."},
"Dativ":{text:"Dativ dolaylı nesnede ve bazı edatlardan sonra kullanılır. Örneğin mit, nach, bei, seit, von, zu Dativ ister.",ex:"Ich fahre mit dem Bus. (Otobüsle gidiyorum.)",q:"Ich helfe ___ Frau.",opts:["die","der","den"],a:"der",why:"Helfen fiili Dativ ister. Die Frau, Dativ hâlinde der Frau olur."},
"Edatlar":{text:"Bazı edatlar sabit hâl ister: mit + Dativ, für + Akkusativ, ohne + Akkusativ, zu + Dativ. Wechselpräpositionen konuma göre Akkusativ veya Dativ alabilir.",ex:"Das Geschenk ist für meinen Bruder.",q:"Ich gehe ___ den Park. (içine/doğru)",opts:["in","mit","bei"],a:"in",why:"Bir hedefe doğru hareket bildirildiği için Wechselpräposition in burada Akkusativ ile kullanılır."},
"Zarflar":{text:"Zarflar zaman, yer, tarz veya sebep bildirir. heute (bugün), dort (orada), gern (severek), deshalb (bu nedenle) sık kullanılır.",ex:"Ich lerne heute zu Hause.",q:"Ich komme ___, ich bin krank. (bu nedenle)",opts:["deshalb","gestern","dort"],a:"deshalb",why:"Deshalb sebep-sonuç ilişkisi kuran bir zarftır: bu nedenle."},
"Bağlaçlar":{text:"Und, aber, oder gibi bağlaçlar temel cümle dizilişini değiştirmez. Weil, dass, obwohl gibi yan cümle bağlaçlarında çekimli fiil sona gider.",ex:"Ich bleibe zu Hause, weil ich krank bin.",q:"Ich lerne Deutsch, weil ich in Berlin ___ .",opts:["wohne","bin wohnen","wohnen"],a:"wohne",why:"Weil yan cümlesinde çekimli fiil sona gider."},
"Genitiv":{text:"Genitiv aitlik bildirir. Eril ve nötr isimlerde çoğunlukla des + isim-(e)s, dişil ve çoğulda der kullanılır.",ex:"Das Auto des Mannes ist neu.",q:"Das ist das Auto ___ Frau.",opts:["der","die","den"],a:"der",why:"Frau dişil isimdir; Genitiv artikeli der olur."}
};
const savedProgress=(()=>{try{return JSON.parse(localStorage.getItem("de_progress_v3"))||{}}catch{return {}}})();
let words=[...seedWords],sentences=[...seedSentences],stats=loadStats(),wordIndex=Number(savedProgress.wordIndex)||0,sentenceIndex=Number(savedProgress.sentenceIndex)||0,wordMode=savedProgress.wordMode||"teach",sentenceMode=savedProgress.sentenceMode||"teach",lastWordCorrect=false,lastSentenceCorrect=false,questionActiveMode="write";
function persistProgress(){try{localStorage.setItem("de_progress_v3",JSON.stringify({wordIndex,sentenceIndex,wordMode,sentenceMode,wordLevel:$("#wordLevel")?.value||"all",wordDirection:$("#wordDirection")?.value||"de-tr",sentenceLevel:$("#sentenceLevel")?.value||"all",sentenceDirection:$("#sentenceDirection")?.value||"de-tr",questionType:$("#questionType")?.value||"mixed",grammarLevel:$("#grammarLevel")?.value||"all",grammarTopic:$("#grammarTopic")?.value||"Artikel",verbLevel:$("#verbLevel")?.value||"all",verbType:$("#verbType")?.value||"all",grammarQuestionIndex}))}catch{}}

function loadStats(){try{return JSON.parse(localStorage.getItem("de_stats"))||{learned:[],correct:0,wrong:[]}}catch{return{learned:[],correct:0,wrong:[]}}}
function save(){localStorage.setItem("de_stats",JSON.stringify(stats));updateStats()}
function updateStats(){$("#learnedCount").textContent=stats.learned.length;$("#correctCount").textContent=stats.correct;$("#reviewCount").textContent=stats.wrong.length}
function toast(t){let x=$("#toast");x.textContent=t;x.style.display="block";setTimeout(()=>x.style.display="none",2400)}
function showPage(id){$$(".page").forEach(x=>x.classList.toggle("active",x.id===id));$$ (".tab").forEach(x=>x.classList.toggle("active",x.dataset.page===id));document.body.classList.toggle("working-page",id!=="home");try{localStorage.setItem("de_last_page",id)}catch{};if(id==="words")renderWord();if(id==="sentences")renderSentence();if(id==="verbs")renderVerbs();if(id==="grammar")renderGrammar();if(id==="chat"){initChat();initChatModes();}persistProgress()}
$("#tabs").addEventListener("click",e=>{let b=e.target.closest("[data-page]");if(b)showPage(b.dataset.page)});
$$("[data-go]").forEach(b=>b.onclick=()=>showPage(b.dataset.go));
function filtered(arr,level){return arr.filter(x=>level==="all"||x.level===level)}
function norm(s){return String(s||"").toLocaleLowerCase("de-DE").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[.,!?;:¿¡'"“”„]/g,"").replace(/\s+/g," ").trim()}
function answerInput(expected,kind){return `<div class="answer"><input id="answerInput" placeholder="${kind==="word"?"Cevabını yaz...":"Cümleyi yaz..."}" autocomplete="off"><div class="actions"><button class="primary" id="checkAnswer">Kontrol et</button><button class="outline" id="showAnswer">Cevabı göster</button></div><div id="result"></div></div>`}
async function fetchTatoeba(term,container){
 const box=$(container);if(!box)return;box.innerHTML='<p class="muted">Tatoeba üzerinden örnekler aranıyor…</p>';
 try{
  const url=new URL('https://api.tatoeba.org/v1/sentences');url.searchParams.set('lang','de');url.searchParams.set('q',term);url.searchParams.set('showtrans','all');url.searchParams.set('trans:lang','tur');url.searchParams.set('limit','8');
  const res=await fetch(url.toString(),{headers:{Accept:'application/json'}});if(!res.ok)throw Error('Kaynak şu anda yanıt vermiyor.');const data=await res.json();
  const rows=(data.data||data.results||[]).map(x=>{let tr=[];const groups=x.translations||[];for(const g of groups){for(const t of (Array.isArray(g)?g:[g]))if((t.lang==='tur'||t.lang==='tr')&&t.text)tr.push(t.text)}return [x.text,tr[0]||'']}).filter(x=>x[0]&&x[1]).slice(0,5);
  if(!rows.length)throw Error('Bu kelime için Türkçe çevirili örnek bulunamadı.');
  box.innerHTML='<b>Topluluktan bulunan örnekler</b>'+rows.map(r=>`<p><b>${esc(r[0])}</b><br><span class="muted">${esc(r[1])}</span></p>`).join('')+'<small class="muted">Kaynak: Tatoeba • Topluluk katkılı cümle veritabanı</small>';
 }catch(err){box.innerHTML=`<p class="muted">${esc(err.message)} Yerleşik örnekleri kullanabilir veya <a target="_blank" rel="noopener" href="https://tatoeba.org/en/sentences/search?query=${encodeURIComponent(term)}">Tatoeba’da arayabilirsin.</a></p>`}
}
function questionMarkup(correct,kind,prompt){let mode=$('#questionType').value;if(mode==='mixed')mode=Math.random()<.5?'choice':'write';questionActiveMode=mode;if(mode==='choice')return choiceHTML(correct,(kind==='word'?words.map(x=>$('#wordDirection').value==='de-tr'?x.tr:x.de):sentences.map(x=>$('#sentenceDirection').value==='de-tr'?x.tr:x.de)));
 if(mode==='listen')return `<button class="outline" id="speakPrompt">🔊 Dinle</button>${answerInput(correct,kind)}`;
 if(mode==='order'){let tokens=correct.split(/\s+/).sort(()=>Math.random()-.5);return `<p class="muted">Kelimelere dokunarak doğru sıraya diz.</p><div id="builtOrder" class="grammar-example" style="min-height:44px"></div><div class="choices">${tokens.map(t=>`<button class="outline order-token">${esc(t)}</button>`).join(' ')}</div><div class="actions"><button class="primary" id="checkOrder">Kontrol et</button><button class="outline" id="clearOrder">Temizle</button></div><div id="result"></div>`}
 return answerInput(correct,kind)}
function bindQuestion(correct,kind,prompt){let mode=questionActiveMode;if(mode==='choice')bindChoice(correct,kind);else if(mode==='order'){let built=[];const draw=()=>$('#builtOrder').textContent=built.join(' ');$$('.order-token').forEach(b=>b.onclick=()=>{built.push(b.textContent);b.disabled=true;draw()});$('#clearOrder').onclick=()=>{built=[];$$('.order-token').forEach(b=>b.disabled=false);draw()};$('#checkOrder').onclick=()=>{let ok=norm(built.join(' '))===norm(correct);$('#result').innerHTML=`<div class="feedback ${ok?'':'bad'}">${ok?'Doğru sıralama!':'Doğru cevap: '+esc(correct)}</div><button class="outline" id="forceCorrect">Doğru say</button>`;record(kind,built.join(' '),ok);$('#forceCorrect').onclick=()=>{stats.correct++;save();toast('Doğru olarak işaretlendi.')}}}else{bindAnswer(correct,kind);if(mode==='listen')$('#speakPrompt').onclick=()=>{if(!('speechSynthesis'in window)){toast('Bu tarayıcı sesli okumayı desteklemiyor.');return}let u=new SpeechSynthesisUtterance(prompt);u.lang='de-DE';speechSynthesis.cancel();speechSynthesis.speak(u)}}}
function renderWord(){let arr=filtered(words,$("#wordLevel").value);if(!arr.length){$("#wordCard").innerHTML="Bu seviyede kelime yok. Excel dosyası yükleyebilirsin.";return}wordIndex=(wordIndex%arr.length+arr.length)%arr.length;let w=arr[wordIndex],dir=$("#wordDirection").value,front=dir==="de-tr"?w.de:w.tr,back=dir==="de-tr"?w.tr:w.de;
if(wordMode==="teach"){$("#wordCard").innerHTML=`<div class="eyebrow">${w.level} • KELİME</div><div class="word-big">${esc(front)}</div><div class="translation">${esc(back)}</div>${w.article?`<p class="muted">Artikel: ${esc(w.article)} • Çoğul: ${esc(w.plural||"—")}</p>`:""}<div class="examples" id="wordExamples"><b>Örnek cümleler</b>${(w.examples||[]).map(a=>`<p><b>${esc(a[0])}</b><br><span class="muted">${esc(a[1])}</span></p>`).join("")}<button class="outline" id="findExamples">İnternetten yeni örnek getir</button></div><div class="actions"><button class="primary" id="markLearned">Öğrendim</button><button class="outline" id="wordNext">Sonraki kelime →</button></div>`;$("#markLearned").onclick=()=>{if(!stats.learned.includes("w:"+w.de))stats.learned.push("w:"+w.de);save();toast("Öğrenilenlere eklendi.")};$("#wordNext").onclick=()=>{wordIndex++;persistProgress();renderWord()};$("#findExamples").onclick=()=>fetchTatoeba(w.de,"#wordExamples")}
else{$("#wordCard").innerHTML=`<div class="eyebrow">${w.level} • TEST</div><h3>${esc(front)}</h3><p class="muted">${$("#questionType").value==="choice"?"Doğru karşılığı seç veya yaz.":"Karşılığını yaz."}</p>${questionMarkup(back,"word",w.de)}<div class="actions"><button class="outline" id="wordNext">Sonraki soru →</button></div>`;bindQuestion(back,"word",w.de);$("#wordNext").onclick=()=>{wordIndex++;persistProgress();renderWord()}}
}
function renderSentence(){let arr=filtered(sentences,$("#sentenceLevel").value);if(!arr.length){$("#sentenceCard").innerHTML="Bu seviyede cümle yok. Excel dosyası yükleyebilirsin.";return}sentenceIndex=(sentenceIndex%arr.length+arr.length)%arr.length;let s=arr[sentenceIndex],dir=$("#sentenceDirection").value,front=dir==="de-tr"?s.de:s.tr,back=dir==="de-tr"?s.tr:s.de;
if(sentenceMode==="teach"){$("#sentenceCard").innerHTML=`<div class="eyebrow">${s.level} • CÜMLE</div><h2>${esc(front)}</h2><div class="translation">${esc(back)}</div><div class="examples" id="sentenceExamples"><b>Benzer anlamlı cümleler</b>${(s.similar||[]).map(x=>`<p>${esc(x)}</p>`).join("")||"<p class='muted'>Henüz benzer cümle eklenmemiş.</p>"}<button class="outline" id="findSentenceExamples">İnternetten benzer örnek ara</button></div><div class="actions"><button class="primary" id="sentenceLearn">Öğrendim</button><button class="outline" id="sentenceNext">Sonraki cümle →</button></div>`;$("#findSentenceExamples").onclick=()=>fetchTatoeba(s.de,"#sentenceExamples");$("#sentenceLearn").onclick=()=>{if(!stats.learned.includes("s:"+s.de))stats.learned.push("s:"+s.de);save();toast("Öğrenilenlere eklendi.")};$("#sentenceNext").onclick=()=>{sentenceIndex++;persistProgress();renderSentence()}}
else{$("#sentenceCard").innerHTML=`<div class="eyebrow">${s.level} • TEST</div><h3>${esc(front)}</h3><p class="muted">Cümlenin karşılığını yaz.</p>${questionMarkup(back,"sentence",s.de)}<div class="actions"><button class="outline" id="sentenceNext">Sonraki soru →</button></div>`;bindQuestion(back,"sentence",s.de);$("#sentenceNext").onclick=()=>{sentenceIndex++;persistProgress();renderSentence()}}
}
function choiceHTML(correct,all){
 const key=norm(correct),pool=[...new Set((all||[]).filter(x=>x&&norm(x)!==key))];
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
 const opts=[correct,...pool.slice(0,3)];
 for(let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]]}
 return `<div class="choices">${opts.map(x=>`<button type="button" class="outline choice">${esc(x)}</button>`).join(" ")}</div><div id="result"></div>`
}
function record(kind,item,ok){if(ok){stats.correct++;}else{stats.wrong.unshift({kind,item,at:Date.now()});stats.wrong=stats.wrong.slice(0,100)}save()}
function bindChoice(correct,kind){
 let submitted=false;const card=kind==="word"?$("#wordCard"):$("#sentenceCard");
 card.querySelectorAll(".choice").forEach(b=>b.onclick=()=>{
  if(submitted)return;submitted=true;
  const ok=norm(b.textContent)===norm(correct);
  card.querySelectorAll(".choice").forEach(option=>{option.disabled=true;if(norm(option.textContent)===norm(correct))option.classList.add("choice-correct");else if(option===b&&!ok)option.classList.add("choice-wrong")});
  card.querySelector("#result").innerHTML=`<div class="feedback ${ok?"":"bad"}">${ok?"Doğru! Harika.":"Doğru cevap: "+esc(correct)}</div>${ok?"":'<div class="actions"><button class="outline" id="forceCorrect">Doğru say</button></div>'}`;
  record(kind,b.textContent,ok);
  if(!ok)card.querySelector("#forceCorrect").onclick=()=>{stats.correct++;stats.wrong=stats.wrong.filter(x=>!(x.kind===kind&&x.item===b.textContent));save();card.querySelector("#forceCorrect").disabled=true;toast("Cevap doğru olarak işaretlendi.")};
 })
}
function bindAnswer(correct,kind){$("#checkAnswer").onclick=()=>{let val=$("#answerInput").value,ok=norm(val)===norm(correct);$("#result").innerHTML=`<div class="feedback ${ok?"":"bad"}">${ok?"Doğru cevap!":"Tam eşleşmedi. Beklenen cevap: "+esc(correct)}</div><div class="actions"><button class="outline" id="forceCorrect">Doğru say</button></div>`;record(kind,val,ok);$("#forceCorrect").onclick=()=>{stats.correct++;stats.wrong=stats.wrong.filter(x=>x.item!==val);save();toast("Cevap doğru olarak işaretlendi.")}};$("#showAnswer").onclick=()=>$("#result").innerHTML=`<div class="feedback">${esc(correct)}</div>`}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$$('[data-target="word"]').forEach(b=>b.onclick=()=>{$$('[data-target="word"]').forEach(x=>x.classList.toggle("active",x===b));wordMode=b.dataset.mode;persistProgress();renderWord()});
$$('[data-target="sentence"]').forEach(b=>b.onclick=()=>{$$('[data-target="sentence"]').forEach(x=>x.classList.toggle("active",x===b));sentenceMode=b.dataset.mode;persistProgress();renderSentence()});
["wordLevel","wordDirection"].forEach(id=>$("#"+id).onchange=()=>{wordIndex=0;persistProgress();renderWord()});["sentenceLevel","sentenceDirection"].forEach(id=>$("#"+id).onchange=()=>{sentenceIndex=0;persistProgress();renderSentence()});
function renderVerbs(){let level=$("#verbLevel").value,type=$("#verbType").value,arr=verbs.filter(v=>(level==="all"||v.level===level)&&(type==="all"||v.type===type));$("#verbList").innerHTML=arr.map(v=>`<div class="verb-row"><b>${v.v}</b> — ${v.tr} <span class="muted">(${v.level} • ${v.type==="irregular"?"düzensiz":v.type==="separable"?"ayrılabilir":"düzenli"})</span><div class="conj">ich ${v.forms[0]} · du ${v.forms[1]} · er/sie/es ${v.forms[2]}<br>wir ${v.forms[3]} · ihr ${v.forms[4]} · sie/Sie ${v.forms[5]}<br>Präteritum: ${v.pr} · Partizip II: ${v.pp}</div></div>`).join("")||"Bu filtrede fiil bulunamadı."}
$("#verbLevel").onchange=()=>{renderVerbs();persistProgress()};$("#verbType").onchange=()=>{renderVerbs();persistProgress()};
$("#verbQuiz").onclick=()=>{let pool=verbs.filter(v=>( $("#verbLevel").value==="all"||v.level===$("#verbLevel").value)&&( $("#verbType").value==="all"||v.type===$("#verbType").value));if(!pool.length){toast("Bu filtrede fiil yok.");return}let v=pool[Math.floor(Math.random()*pool.length)],i=Math.floor(Math.random()*6),pron=["ich","du","er/sie/es","wir","ihr","sie/Sie"][i];$("#verbQuizArea").innerHTML=`<p><b>${v.v}</b> fiilinin Präsens ${pron} çekimi nedir?</p><input id="verbAnswer" placeholder="Çekimi yaz"><button class="primary" id="verbCheck">Kontrol et</button><div id="verbResult"></div>`;$("#verbCheck").onclick=()=>{let ok=norm($("#verbAnswer").value)===norm(v.forms[i]);$("#verbResult").innerHTML=`<div class="feedback ${ok?"":"bad"}">${ok?"Doğru!":"Doğru cevap: "+v.forms[i]}</div>`;record("verb",$("#verbAnswer").value,ok)}};
const grammarQuestions={
 "Artikel":[
  {level:"A1",q:"___ Buch ist interessant.",opts:["Der","Die","Das"],a:"Das",why:"Buch kelimesinin artikeli das'tır."},
  {level:"A1",q:"___ Frau kommt heute.",opts:["Der","Die","Das"],a:"Die",why:"Frau dişil isimdir; artikeli die olur."},
  {level:"A1",q:"___ Tisch ist neu.",opts:["Der","Die","Das"],a:"Der",why:"Tisch eril isimdir; artikeli der olur."},
  {level:"A2",q:"___ Kinder spielen draußen.",opts:["Der","Die","Das"],a:"Die",why:"Çoğul isimlerde belirli artikel die kullanılır."}
 ],
 "Akkusativ":[
  {level:"A1",q:"Ich kaufe ___ Apfel.",opts:["der","den","dem"],a:"den",why:"Apfel eril ve doğrudan nesne olduğu için Akkusativ: den Apfel."},
  {level:"A1",q:"Sie sieht ___ Mann.",opts:["der","den","dem"],a:"den",why:"Sehen fiilinin nesnesi Akkusativ olur; der → den."},
  {level:"A2",q:"Wir haben ___ Hund.",opts:["ein","einen","einem"],a:"einen",why:"Eril isim Akkusativ olduğunda ein → einen değişir."}
 ],
 "Dativ":[
  {level:"A1",q:"Ich helfe ___ Frau.",opts:["die","der","den"],a:"der",why:"Helfen fiili Dativ ister; die Frau → der Frau."},
  {level:"A2",q:"Er fährt mit ___ Bus.",opts:["der","den","dem"],a:"dem",why:"Mit edatı her zaman Dativ ister: mit dem Bus."},
  {level:"B1",q:"Das Geschenk gehört ___ Kindern.",opts:["die","den","der"],a:"den",why:"Çoğul Dativ'de artikel den olur; çoğu isim ayrıca -n alır."}
 ],
 "Edatlar":[
  {level:"A1",q:"Ich gehe ___ den Park. (içine/doğru)",opts:["in","mit","bei"],a:"in",why:"Hedefe doğru hareket bildirildiği için in + Akkusativ kullanılır."},
  {level:"A2",q:"Das Geschenk ist ___ meinen Bruder.",opts:["mit","für","bei"],a:"für",why:"Für edatı Akkusativ ister."},
  {level:"A2",q:"Ich komme ___ dem Zug.",opts:["mit","für","ohne"],a:"mit",why:"Mit edatı Dativ ile kullanılır."}
 ],
 "Zarflar":[
  {level:"A1",q:"Ich komme ___, ich bin krank. (bu nedenle)",opts:["deshalb","gestern","dort"],a:"deshalb",why:"Deshalb 'bu nedenle' anlamı verir."},
  {level:"A1",q:"Wir treffen uns ___. (yarın)",opts:["morgen","dort","gern"],a:"morgen",why:"Morgen zaman bildiren 'yarın' zarfıdır."},
  {level:"A2",q:"Sie spricht sehr ___. (yavaşça)",opts:["langsam","gestern","hier"],a:"langsam",why:"Langsam, eylemin nasıl yapıldığını anlatır: yavaşça."}
 ],
 "Bağlaçlar":[
  {level:"A2",q:"Ich bleibe zu Hause, weil ich krank ___.",opts:["bin","bist","sein"],a:"bin",why:"Weil yan cümlesinde çekimli fiil sona gider."},
  {level:"A2",q:"Ich lerne Deutsch, ___ ich in Berlin wohne.",opts:["weil","aber","oder"],a:"weil",why:"Weil sebep bildirir ve yan cümlede fiili sona gönderir."},
  {level:"B1",q:"Obwohl es regnet, ___ wir spazieren.",opts:["gehen","geht","gehst"],a:"gehen",why:"Obwohl yan cümlesinden sonra ana cümlede özne wir ile gehen kullanılır."}
 ],
 "Genitiv":[
  {level:"B1",q:"Das ist das Auto ___ Frau.",opts:["der","die","den"],a:"der",why:"Frau dişil isimdir; Genitiv artikeli der olur."},
  {level:"B1",q:"Das ist das Spielzeug ___ Kindes.",opts:["des","dem","den"],a:"des",why:"Kind nötr isimdir; Genitiv'de des Kindes kullanılır."},
  {level:"B1",q:"Die Farbe ___ Hauses ist weiß.",opts:["des","dem","der"],a:"des",why:"Haus nötr isimdir; Genitiv'de des Hauses olur."}
 ]
};

const extraGrammarQuestions={
"Artikel":[
{level:"A1",q:"___ Mädchen spielt im Garten.",opts:["Der","Die","Das"],a:"Das",why:"Mädchen, -chen eki nedeniyle nötrdür: das Mädchen."},
{level:"A1",q:"Ich sehe ___ Hund.",opts:["der","den","dem"],a:"den",why:"Eril isim Akkusativ nesnesi olduğunda der → den olur."},
{level:"A2",q:"Das ist ___ interessante Buch.",opts:["ein","eine","einen"],a:"ein",why:"Buch nötrdür; yalın hâlde ein interessante(s) Buch kullanılır."},
{level:"A2",q:"___ Leute warten draußen.",opts:["Der","Die","Das"],a:"Die",why:"Leute çoğul isimdir; çoğul belirli artikel die olur."},
{level:"B1",q:"Wegen ___ starken Regens bleiben wir zu Hause.",opts:["des","dem","den"],a:"des",why:"Wegen standart kullanımda Genitiv ister; der Regen → des Regens."}
],
"Akkusativ":[
{level:"A1",q:"Er trinkt ___ Tee.",opts:["der","den","dem"],a:"den",why:"Trinken fiilinin doğrudan nesnesi Akkusativ olur."},
{level:"A1",q:"Ich habe ___ Bruder.",opts:["ein","einen","einem"],a:"einen",why:"Bruder eril ve Akkusativ: einen Bruder."},
{level:"A2",q:"Wir besuchen ___ Eltern.",opts:["unsere","unseren","unserem"],a:"unsere",why:"Çoğul Akkusativ'de unsere kullanılır."},
{level:"A2",q:"Sie stellt die Vase auf ___ Tisch.",opts:["dem","den","des"],a:"den",why:"Nereye? hareket/hedef bildirir; auf + Akkusativ: auf den Tisch."},
{level:"B1",q:"Er erinnert sich an ___ Urlaub.",opts:["den","dem","des"],a:"den",why:"Sich erinnern an + Akkusativ kullanılır."}
],
"Dativ":[
{level:"A1",q:"Ich danke ___ Lehrer.",opts:["den","dem","des"],a:"dem",why:"Danken fiili Dativ ister: dem Lehrer."},
{level:"A1",q:"Sie wohnt bei ___ Eltern.",opts:["ihre","ihren","ihrer"],a:"ihren",why:"Bei + Dativ; çoğul iyelik artikeli ihren olur."},
{level:"A2",q:"Kannst du ___ Kind helfen?",opts:["das","dem","den"],a:"dem",why:"Helfen fiili Dativ ister: dem Kind."},
{level:"A2",q:"Wir fahren mit ___ Freunden.",opts:["die","den","der"],a:"den",why:"Mit + Dativ; çoğulda den Freunden ve isimde -n."},
{level:"B1",q:"Trotz ___ schlechten Wetters gingen sie hinaus.",opts:["dem","des","den"],a:"des",why:"Trotz çoğunlukla Genitiv ister; burada des Wetters."}
],
"Edatlar":[
{level:"A1",q:"Ich gehe ___ Schule.",opts:["zur","mit","für"],a:"zur",why:"Zu + Dativ yönelme bildirir; zu der = zur Schule."},
{level:"A1",q:"Das Geschenk ist ___ dich.",opts:["mit","für","bei"],a:"für",why:"Für edatı Akkusativ ile kullanılır."},
{level:"A2",q:"Wir warten ___ den Bus.",opts:["auf","mit","nach"],a:"auf",why:"Warten auf + Akkusativ kalıbı kullanılır."},
{level:"A2",q:"Er kommt ___ der Türkei.",opts:["aus","zu","bei"],a:"aus",why:"Bir ülkeden/yerden gelmeyi belirtirken aus kullanılır."},
{level:"B1",q:"Sie interessiert sich ___ moderne Kunst.",opts:["für","an","mit"],a:"für",why:"Sich interessieren für + Akkusativ kalıbıdır."}
],
"Zarflar":[
{level:"A1",q:"Ich stehe ___ auf. (erken)",opts:["früh","dort","gestern"],a:"früh",why:"Früh zaman/tarz zarfıdır ve erken anlamına gelir."},
{level:"A1",q:"Er spricht ___. (çok yavaş)",opts:["sehr langsam","morgen","draußen"],a:"sehr langsam",why:"Sehr langsam eylemin nasıl yapıldığını belirtir."},
{level:"A2",q:"Es regnet. ___ bleiben wir zu Hause.",opts:["Deshalb","Trotzdem","Zuerst"],a:"Deshalb",why:"Deshalb önceki cümledeki nedenden çıkan sonucu bildirir."},
{level:"A2",q:"Ich habe ___ Zeit. (maalesef)",opts:["leider","gestern","überall"],a:"leider",why:"Leider konuşanın üzüntüsünü/maalesef anlamını verir."},
{level:"B1",q:"Er hat die Prüfung ___ bestanden. (başarıyla)",opts:["erfolgreich","selten","draußen"],a:"erfolgreich",why:"Erfolgreich eylemin nasıl sonuçlandığını bildirir."}
],
"Bağlaçlar":[
{level:"A1",q:"Ich bin müde, ___ ich gehe schlafen.",opts:["deshalb","weil","obwohl"],a:"deshalb",why:"Deshalb ana cümleleri sonuç ilişkisiyle bağlar."},
{level:"A2",q:"Ich lerne, ___ ich morgen eine Prüfung habe.",opts:["weil","aber","oder"],a:"weil",why:"Weil sebep bildirir; çekimli fiil yan cümle sonunda olur."},
{level:"A2",q:"Er ist krank, ___ geht er zur Arbeit.",opts:["trotzdem","weil","denn"],a:"trotzdem",why:"Trotzdem beklenenin tersine gerçekleşen durumu anlatır."},
{level:"B1",q:"Ich weiß, ___ du heute kommst.",opts:["dass","obwohl","wenn"],a:"dass",why:"Dass yan cümlesinde çekimli fiil sona gider."},
{level:"B1",q:"___ ich Zeit hätte, würde ich mehr lesen.",opts:["Wenn","Weil","Ob"],a:"Wenn",why:"Wenn burada varsayımsal koşul bildirir."}
],
"Genitiv":[
{level:"B1",q:"Das ist die Tasche ___ Lehrerin.",opts:["der","des","dem"],a:"der",why:"Dişil isim Genitiv'de der alır."},
{level:"B1",q:"Das Ende ___ Films war überraschend.",opts:["der","des","dem"],a:"des",why:"Film eril isimdir; Genitiv: des Films."},
{level:"B1",q:"Während ___ Unterrichts darf man nicht telefonieren.",opts:["dem","des","den"],a:"des",why:"Während standart olarak Genitiv ister: des Unterrichts."},
{level:"B1",q:"Die Meinung ___ Experten ist wichtig.",opts:["des","dem","den"],a:"des",why:"Er ist eril isim; Genitiv tekilde des Experten."},
{level:"B1",q:"Die Rechte ___ Kinder müssen geschützt werden.",opts:["der","des","den"],a:"der",why:"Çoğul Genitiv'de der kullanılır: der Kinder."}
]};

const moreGrammarQuestions={
"Artikel":[
{level:"A1",q:"Ich brauche ___ Stuhl.",opts:["ein","einen","einem"],a:"einen",why:"Stuhl eril ve Akkusativ nesnesidir: einen Stuhl."},
{level:"A1",q:"___ Sonne scheint heute.",opts:["Der","Die","Das"],a:"Die",why:"Sonne dişil isimdir: die Sonne."},
{level:"A2",q:"Er trägt ___ blaue Jacke.",opts:["einen","eine","einem"],a:"eine",why:"Jacke dişildir ve Akkusativ'de eine olur."},
{level:"A2",q:"Wir kaufen ___ neues Auto.",opts:["ein","einen","einem"],a:"ein",why:"Auto nötrdür; Akkusativ'de belirsiz artikel ein değişmez."},
{level:"B1",q:"Die Fenster ___ alten Hauses sind offen.",opts:["des","dem","den"],a:"des",why:"Haus nötrdür; Genitiv'de des Hauses kullanılır."}
],
"Akkusativ":[
{level:"A1",q:"Sie liest ___ Brief.",opts:["der","den","dem"],a:"den",why:"Brief eril ve doğrudan nesnedir: den Brief."},
{level:"A1",q:"Wir essen ___ Pizza.",opts:["eine","einer","einen"],a:"eine",why:"Pizza dişildir; Akkusativ'de eine kullanılır."},
{level:"A2",q:"Stell bitte die Milch in ___ Kühlschrank.",opts:["dem","den","des"],a:"den",why:"Nereye? sorusuna cevap veren hareket/hedef Akkusativ alır."},
{level:"A2",q:"Ich suche ___ neuen Job.",opts:["ein","einen","einem"],a:"einen",why:"Job eril ve Akkusativ nesnesidir."},
{level:"B1",q:"Wir müssen ___ Vertrag sorgfältig prüfen.",opts:["der","den","dem"],a:"den",why:"Prüfen fiilinin nesnesi Akkusativ olur."}
],
"Dativ":[
{level:"A1",q:"Das Buch gehört ___ Mann.",opts:["den","dem","des"],a:"dem",why:"Gehören fiili Dativ ister."},
{level:"A1",q:"Sie spricht mit ___ Mutter.",opts:["die","der","den"],a:"der",why:"Mit + Dativ; die Mutter → der Mutter."},
{level:"A2",q:"Nach ___ Arbeit gehe ich nach Hause.",opts:["die","der","den"],a:"der",why:"Nach + Dativ; die Arbeit → der Arbeit."},
{level:"A2",q:"Er schenkt ___ Kindern Süßigkeiten.",opts:["die","den","der"],a:"den",why:"Çoğul Dativ'de den kullanılır; Kindern zaten -n ile biter."},
{level:"B1",q:"Sie hat ___ Kollegen geholfen.",opts:["ihren","ihre","ihrer"],a:"ihren",why:"Helfen Dativ ister; çoğul Dativ iyelik biçimi ihren."}
],
"Edatlar":[
{level:"A1",q:"Der Zug fährt ___ Berlin.",opts:["nach","zu","bei"],a:"nach",why:"Şehir ve ülke adlarına yönelirken çoğunlukla nach kullanılır."},
{level:"A1",q:"Ich bin ___ Hause.",opts:["zu","nach","aus"],a:"zu",why:"Sabit ifade: zu Hause (evde)."},
{level:"A2",q:"Das Bild hängt ___ der Wand.",opts:["an","auf","in"],a:"an",why:"Bir yüzeyin üzerinde/asılı konumda an + Dativ kullanılır."},
{level:"A2",q:"Sie geht ___ Arzt.",opts:["zum","mit","für"],a:"zum",why:"Zu + Dativ; zu dem Arzt kısalarak zum olur."},
{level:"B1",q:"Er hat sich ___ den Fehler entschuldigt.",opts:["für","über","an"],a:"für",why:"Sich entschuldigen für + Akkusativ kalıbı kullanılır."}
],
"Zarflar":[
{level:"A1",q:"Wir sehen uns ___. (bugün)",opts:["heute","dort","gern"],a:"heute",why:"Heute zaman zarfıdır ve bugün demektir."},
{level:"A1",q:"Sie singt ___. (güzel)",opts:["schön","morgen","hier"],a:"schön",why:"Schön eylemin nasıl yapıldığını anlatır."},
{level:"A2",q:"Er kommt ___ zu spät. (nadiren)",opts:["selten","immer","überall"],a:"selten",why:"Selten sıklık zarfıdır: nadiren."},
{level:"A2",q:"___ habe ich keine Zeit. (şu anda)",opts:["Im Moment","Gestern","Draußen"],a:"Im Moment",why:"Im Moment şu anda anlamında zaman zarfı ifadesidir."},
{level:"B1",q:"Sie hat ___ reagiert. (uygun şekilde)",opts:["angemessen","gestern","nirgendwo"],a:"angemessen",why:"Angemessen eylemin uygun biçimde yapıldığını belirtir."}
],
"Bağlaçlar":[
{level:"A1",q:"Möchtest du Tee ___ Kaffee?",opts:["oder","weil","obwohl"],a:"oder",why:"Oder iki seçenek arasında tercih bildirir."},
{level:"A1",q:"Ich lerne Deutsch ___ Englisch.",opts:["und","weil","wenn"],a:"und",why:"Und eş görevli ögeleri birbirine bağlar."},
{level:"A2",q:"Ich gehe spazieren, ___ es kalt ist.",opts:["obwohl","weil","dass"],a:"obwohl",why:"Obwohl zıtlık/rağmen anlamı verir; fiil yan cümle sonunda."},
{level:"A2",q:"Beeil dich, ___ wir verpassen den Bus.",opts:["sonst","weil","dass"],a:"sonst",why:"Sonst aksi hâlde anlamı verir."},
{level:"B1",q:"Er fragte mich, ___ ich Zeit hätte.",opts:["ob","weil","denn"],a:"ob",why:"Dolaylı evet/hayır sorularında ob kullanılır."}
],
"Genitiv":[
{level:"B1",q:"Die Hauptstadt ___ Landes ist sehr groß.",opts:["des","dem","den"],a:"des",why:"Land nötr isimdir; Genitiv: des Landes."},
{level:"B1",q:"Die Bücher ___ Studentin liegen hier.",opts:["der","des","dem"],a:"der",why:"Studentin dişildir; Genitiv artikeli der olur."},
{level:"B1",q:"Die Stimmen ___ Kinder waren laut.",opts:["der","des","den"],a:"der",why:"Çoğul Genitiv'de der kullanılır."},
{level:"B1",q:"Anstelle ___ Autos nahm er den Bus.",opts:["des","dem","den"],a:"des",why:"Anstelle + Genitiv; das Auto → des Autos."},
{level:"B1",q:"Die Tür ___ Hauses ist geschlossen.",opts:["dem","des","den"],a:"des",why:"Haus nötr isimdir; Genitiv'de des Hauses."}
]};
for(const [topic,items] of Object.entries(moreGrammarQuestions))grammarQuestions[topic].push(...items);

for(const [topic,items] of Object.entries(extraGrammarQuestions))grammarQuestions[topic].push(...items);

let grammarQuestionIndex=savedProgress.grammarQuestionIndex||{};
function renderGrammar(){let topic=$("#grammarTopic").value,g=grammar[topic];$("#grammarInfo").innerHTML=`<h3>${topic}</h3><p>${g.text}</p><div class="grammar-example">${g.ex}</div><button class="outline" id="explainGrammar">Bu kuralı açıkla</button><div id="grammarExplain" class="muted"></div>`;$("#explainGrammar").onclick=()=>$("#grammarExplain").textContent=g.why;if(grammarQuestionIndex[topic+"|"+$("#grammarLevel").value]==null)grammarQuestionIndex[topic+"|"+$("#grammarLevel").value]=0;renderGrammarQuestion(false)}
function renderGrammarQuestion(advance=true){
 const topic=$("#grammarTopic").value,level=$("#grammarLevel").value;
 const available=(grammarQuestions[topic]||[]).filter(q=>level==="all"||q.level===level);
 if(!available.length){$("#grammarQuestion").innerHTML='<p>Bu seviyede bu konu için henüz soru yok. Lütfen başka seviye seç.</p>';return}
 const progressKey=topic+"|"+level;let idx=grammarQuestionIndex[progressKey]||0;if(advance)idx=(idx+1)%available.length;else idx=idx%available.length;grammarQuestionIndex[progressKey]=idx;persistProgress();
 const q=available[idx];
 $("#grammarQuestion").innerHTML=`<div class="eyebrow">${q.level} • SORU ${idx+1}/${available.length}</div><p><b>${q.q}</b></p><div class="choices">${q.opts.map(x=>`<button type="button" class="outline grammar-choice">${esc(x)}</button>`).join("")}</div><div id="grammarResult"></div>`;
 let answered=false;
 $$(".grammar-choice").forEach(b=>b.onclick=()=>{if(answered)return;answered=true;const ok=b.textContent===q.a;$$(".grammar-choice").forEach(option=>{option.disabled=true;if(option.textContent===q.a)option.classList.add("choice-correct");else if(option===b&&!ok)option.classList.add("choice-wrong")});$("#grammarResult").innerHTML=`<div class="feedback ${ok?"":"bad"}">${ok?"Doğru!":"Doğru cevap: "+q.a}<br>${q.why}</div><button class="primary" id="grammarContinue">Sonraki soru →</button>`;record("grammar",b.textContent,ok);$("#grammarContinue").onclick=()=>renderGrammarQuestion(true)})
}
$("#grammarTopic").onchange=()=>{renderGrammar();persistProgress()};$("#grammarLevel").onchange=()=>{renderGrammar();persistProgress()};$("#questionType").onchange=persistProgress;
$("#reviewHome").onclick=()=>{let w=stats.wrong[0];if(!w){toast("Henüz tekrar bekleyen soru yok.");return}toast("Tekrar listende "+stats.wrong.length+" kayıt var. İlgili bölümden yeniden çalışabilirsin.");showPage(w.kind==="sentence"?"sentences":w.kind==="verb"?"verbs":w.kind==="grammar"?"grammar":"words")};
$("#excelFile").onchange=async e=>{let f=e.target.files[0];if(!f)return;try{if(!window.XLSX)throw Error("Excel okuyucu yüklenemedi. İnternet bağlantını kontrol et.");let wb=XLSX.read(await f.arrayBuffer(),{type:"array"});let sheet=(names)=>names.map(n=>wb.Sheets[n]).find(Boolean);let ws=sheet(["Kelimeler","kelimeler","Words","Words "])||wb.Sheets[wb.SheetNames[0]],ss=sheet(["Cümleler","Cumleler","cümleler","Sentences"])||wb.Sheets[wb.SheetNames[1]];let rows=XLSX.utils.sheet_to_json(ws||{}),srows=XLSX.utils.sheet_to_json(ss||{});const get=(r,keys)=>{let k=Object.keys(r).find(x=>keys.includes(x.toLocaleLowerCase("tr").trim()));return k?r[k]:""};let nw=rows.map(r=>({de:String(get(r,["almanca","deutsch","german","kelime"])),tr:String(get(r,["türkçe","turkce","turkish","anlam"])),level:String(get(r,["seviye","level"])||"A1").toUpperCase(),article:String(get(r,["artikel"])),plural:String(get(r,["çoğul","cogul","plural"])),examples:[]})).filter(x=>x.de&&x.tr);let ns=srows.map(r=>({de:String(get(r,["almanca","deutsch","german","cümle","cumle"])),tr:String(get(r,["türkçe","turkce","turkish","çeviri","ceviri"])),level:String(get(r,["seviye","level"])||"A1").toUpperCase(),similar:[]})).filter(x=>x.de&&x.tr);if(nw.length)words=[...seedWords,...nw];if(ns.length)sentences=[...seedSentences,...ns];localStorage.setItem("de_words_v2",JSON.stringify(words));localStorage.setItem("de_sentences_v2",JSON.stringify(sentences));$("#uploadStatus").textContent=`Yüklendi: ${nw.length} kelime, ${ns.length} cümle. Cihazında saklandı.`;toast("Excel içeriği eklendi.")}catch(err){$("#uploadStatus").textContent="Yükleme hatası: "+err.message}};
try{let w=JSON.parse(localStorage.getItem("de_words_v2"));if(w?.length)words=w;let s=JSON.parse(localStorage.getItem("de_sentences_v2"));if(s?.length)sentences=s}catch{}
$("#downloadTemplate").onclick=()=>{if(!window.XLSX){toast("Şablon için internet bağlantısı gerekli.");return}let wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([["Almanca","Türkçe","Seviye","Artikel","Çoğul"],["das Haus","ev","A1","das","die Häuser"]]),"Kelimeler");XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([["Almanca","Türkçe","Seviye"],["Ich lerne Deutsch.","Almanca öğreniyorum.","A1"]]),"Cümleler");XLSX.writeFile(wb,"almanca_ornek_sablon.xlsx")};
$("#exportData").onclick=()=>{let blob=new Blob([JSON.stringify({stats,words,sentences},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="almanca_yedek.json";a.click();URL.revokeObjectURL(a.href)};
$("#resetData").onclick=()=>{if(confirm("İstatistiklerin sıfırlansın mı?")){stats={learned:[],correct:0,wrong:[]};save();toast("İstatistikler sıfırlandı.")}};

// Yapay zekâ destekli Almanca sohbeti (Netlify Function + Gemini API)
const CHAT_LIMIT=20, CHAT_STORE="de_chat_history_v1", CHAT_USAGE="de_chat_usage_v1";
let chatHistory=[];let chatInitialized=false;let chatLocked=false;let chatBusy=false;
function chatToday(){const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-")}
function chatUsage(){try{let x=JSON.parse(localStorage.getItem(CHAT_USAGE)||"{}");return x.day===chatToday()?Number(x.count)||0:0}catch{return 0}}
function setChatUsage(n){try{localStorage.setItem(CHAT_USAGE,JSON.stringify({day:chatToday(),count:n}))}catch{};updateChatUsage()}
function updateChatUsage(){const el=$("#chatUsage");if(el)el.textContent=`Günlük hak: ${Math.max(0,CHAT_LIMIT-chatUsage())} / ${CHAT_LIMIT}`}
function chatSave(){try{localStorage.setItem(CHAT_STORE,JSON.stringify(chatHistory.slice(-24)))}catch{}}
function addChatBubble(role,text){const box=$("#chatMessages");const empty=box.querySelector(".chat-empty");if(empty)empty.remove();const item=document.createElement("div");item.className="chat-bubble "+(role==="user"?"user":"assistant");const who=document.createElement("b");who.textContent=role==="user"?"Sen":"Almanca öğretmenin";const body=document.createElement("div");body.className="chat-bubble-text";body.textContent=text;item.append(who,body);box.append(item);box.scrollTop=box.scrollHeight;return item}
function addChatFeedback(data){const box=$("#chatMessages");const card=document.createElement("div");card.className="chat-feedback";if(data.has_errors){const title=document.createElement("b");title.textContent="✍️ Küçük bir düzeltme";const correction=document.createElement("p");correction.textContent="Doğru kullanım: "+(data.correction||"Cümleyi yeniden kontrol et.");const why=document.createElement("p");why.textContent=data.explanation_tr||"";card.append(title,correction,why)}else{const title=document.createElement("b");title.textContent="✓ Cümlen doğru";const note=document.createElement("p");note.textContent=data.explanation_tr||"Çok güzel! Bu şekilde devam edebilirsin.";card.append(title,note)}box.append(card);box.scrollTop=box.scrollHeight}
function initChat(){if(chatInitialized){updateChatUsage();return}chatInitialized=true;try{chatHistory=JSON.parse(localStorage.getItem(CHAT_STORE)||"[]");if(!Array.isArray(chatHistory))chatHistory=[]}catch{chatHistory=[]}const box=$("#chatMessages");box.innerHTML="";if(chatHistory.length){chatHistory.forEach(m=>{if(m.role==="user")addChatBubble("user",m.text);else{addChatBubble("assistant",m.reply_de||"Hallo!");if(m.reply_tr){const t=document.createElement("div");t.className="chat-translation";t.textContent=m.reply_tr;box.append(t)}if(m.feedback)addChatFeedback(m.feedback)}});const last=chatHistory[chatHistory.length-1];chatLocked=!!(last&&last.role==="model"&&last.feedback?.has_errors&&$("#chatStrict").checked)}else{box.innerHTML='<div class="chat-empty">Hallo! 👋<br>Bir konu seç ve Almanca sohbet etmeye başlayalım.</div>'}updateChatUsage();updateChatLock();$("#chatSend").onclick=sendChat;$("#chatInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendChat()}});$("#chatClear").onclick=()=>{if(!confirm("Bu cihazdaki sohbet geçmişi silinsin mi?"))return;chatHistory=[];chatLocked=false;chatSave();$("#chatMessages").innerHTML='<div class="chat-empty">Sohbet temizlendi. Yeni bir diyalog başlatabilirsin.</div>';updateChatLock()};$("#chatStrict").onchange=()=>{const last=chatHistory[chatHistory.length-1];chatLocked=!!($("#chatStrict").checked&&last?.role==="model"&&last.feedback?.has_errors);updateChatLock()};$("#chatScenario").onchange=()=>{if(chatHistory.length&&confirm("Konu değişince mevcut sohbet temizlensin mi?")){chatHistory=[];chatLocked=false;chatSave();$("#chatMessages").innerHTML='<div class="chat-empty">Yeni konu hazır. İlk mesajını yazabilirsin.</div>';updateChatLock()}}}
function updateChatLock(){const n=$("#chatLockNotice"),send=$("#chatSend"),input=$("#chatInput");if(!n)return;n.hidden=!chatLocked;n.textContent=chatLocked?"Devam etmeden önce yukarıdaki doğru cümleyi incele ve düzeltilmiş hâlini kendin yaz. Yeni mesajın kontrol edildikten sonra sohbet açılacak.":"";send.disabled=chatBusy||chatUsage()>=CHAT_LIMIT;input.disabled=chatBusy||chatUsage()>=CHAT_LIMIT;if(chatUsage()>=CHAT_LIMIT)$("#chatStatus").textContent="Bugünkü 20 mesajlık hakkın doldu. Yarın yeniden başlayabilirsin.";else if(chatLocked)$("#chatStatus").textContent="Düzeltmeni yazdıktan sonra sohbete devam edebilirsin.";else $("#chatStatus").textContent=chatBusy?"Öğretmenin cevabını hazırlıyor…":"Enter ile gönder, Shift + Enter ile alt satıra geç."}
async function sendChat(){if(chatBusy)return;const input=$("#chatInput"),textValue=input.value.trim();if(!textValue)return;if(chatUsage()>=CHAT_LIMIT){updateChatLock();return}if(textValue.length>600){toast("Mesaj en fazla 600 karakter olabilir.");return}chatBusy=true;updateChatLock();input.value="";addChatBubble("user",textValue);chatHistory.push({role:"user",text:textValue});if(!(window.APP_CONFIG&&window.APP_CONFIG.CHAT_API_URL)){throw Error("Yapay zekâ sohbeti için ayrı bir sunucu bağlantısı henüz ayarlanmamış. Hazır kalıplarla sohbet çevrimdışı kullanılabilir.");}const prior=chatHistory.slice(0,-1).slice(-12).map(m=>m.role==="user"?{role:"user",text:m.text}:{role:"model",text:JSON.stringify(m.data||{reply_de:m.reply_de,reply_tr:m.reply_tr,has_errors:m.feedback?.has_errors,correction:m.feedback?.correction,explanation_tr:m.feedback?.explanation_tr})});try{const res=await fetch((window.APP_CONFIG&&window.APP_CONFIG.CHAT_API_URL)||"/.netlify/functions/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({level:$("#chatLevel").value,scenario:$("#chatScenario").value,strict:$("#chatStrict").checked,message:textValue,history:prior})});const payload=await res.json().catch(()=>({}));if(!res.ok)throw Error(payload.error||`Bağlantı hatası (${res.status}).`);const d=payload.data||payload;if(!d.reply_de)throw Error("Öğretmenin cevabı alınamadı. Tekrar deneyebilirsin.");const modelEntry={role:"model",reply_de:d.reply_de,reply_tr:d.reply_tr||"",feedback:{has_errors:!!d.has_errors,correction:d.correction||"",explanation_tr:d.explanation_tr||""},data:d};chatHistory.push(modelEntry);chatSave();addChatBubble("assistant",d.reply_de);if(d.reply_tr){const tr=document.createElement("div");tr.className="chat-translation";tr.textContent="Türkçesi: "+d.reply_tr;$("#chatMessages").append(tr)}addChatFeedback(modelEntry.feedback);if($("#chatStrict").checked&&d.has_errors)chatLocked=true;setChatUsage(chatUsage()+1)}catch(err){chatHistory.pop();input.value=textValue;const errEl=document.createElement("div");errEl.className="chat-error";errEl.textContent="Sohbet şu anda yanıt vermedi: "+err.message;$("#chatMessages").append(errEl)}finally{chatBusy=false;updateChatLock();$("#chatMessages").scrollTop=$("#chatMessages").scrollHeight}}

// Önceki oturumun seçimlerini ve çalışma konumunu geri yükle.
try{const p=savedProgress;for(const [id,key] of [["wordLevel","wordLevel"],["wordDirection","wordDirection"],["sentenceLevel","sentenceLevel"],["sentenceDirection","sentenceDirection"],["questionType","questionType"],["grammarLevel","grammarLevel"],["grammarTopic","grammarTopic"],["verbLevel","verbLevel"],["verbType","verbType"]])if(p[key]&&$("#"+id))$("#"+id).value=p[key];
 $$('[data-target="word"]').forEach(b=>b.classList.toggle("active",b.dataset.mode===wordMode));
 $$('[data-target="sentence"]').forEach(b=>b.classList.toggle("active",b.dataset.mode===sentenceMode));
}catch{}
updateStats();renderWord();renderSentence();

// İnternetsiz hazır Almanca diyalog çalışması
const OFFLINE_DIALOGS={
 tanisma:[
  ["Merhaba, nasılsın?", "Hallo, wie geht es dir?"],
  ["Benim adım Ayşe.", "Ich heiße Ayşe.", "Mein Name ist Ayşe."],
  ["Adınız ne?", "Wie heißen Sie?", "Wie ist Ihr Name?", "Wie lautet Ihr Name?", "Darf ich Ihren Namen wissen?"],
  ["Adın ne?", "Wie heißt du?", "Wie ist dein Name?", "Wie lautet dein Name?"],
  ["Nerelisin?", "Woher kommst du?"],
  ["Türkiye’den geliyorum.", "Ich komme aus der Türkei."],
  ["Nerede yaşıyorsun?", "Wo wohnst du?"],
  ["Kuşadası’nda yaşıyorum.", "Ich wohne in Kuşadası."],
  ["Kaç yaşındasın?", "Wie alt bist du?"],
  ["Otuz yaşındayım.", "Ich bin dreißig Jahre alt."],
  ["Tanıştığımıza memnun oldum.", "Freut mich, dich kennenzulernen."],
  ["Hangi dilleri konuşuyorsun?", "Welche Sprachen sprichst du?"],
  ["Biraz Almanca konuşuyorum.", "Ich spreche ein bisschen Deutsch."]
 ],
 aile:[
  ["Ailen büyük mü?", "Ist deine Familie groß?"],
  ["İki kardeşim var.", "Ich habe zwei Geschwister."],
  ["Kız kardeşim Berlin’de yaşıyor.", "Meine Schwester wohnt in Berlin."],
  ["Evli misin?", "Bist du verheiratet?"],
  ["Hayır, bekârım.", "Nein, ich bin ledig."],
  ["Çocukların var mı?", "Hast du Kinder?"],
  ["Bir oğlum ve bir kızım var.", "Ich habe einen Sohn und eine Tochter."],
  ["Hafta sonu arkadaşlarımla buluşuyorum.", "Am Wochenende treffe ich meine Freunde."],
  ["Arkadaşım çok yardımsever.", "Mein Freund ist sehr hilfsbereit."],
  ["Ailen ne iş yapıyor?", "Was macht deine Familie beruflich?"]
 ],
 gunluk:[
  ["Saat kaçta uyanıyorsun?", "Wann stehst du auf?"],
  ["Saat yedide uyanıyorum.", "Ich stehe um sieben Uhr auf."],
  ["Kahvaltı yapıyor musun?", "Frühstückst du?"],
  ["Genellikle evde kahvaltı yaparım.", "Normalerweise frühstücke ich zu Hause."],
  ["İşe nasıl gidiyorsun?", "Wie fährst du zur Arbeit?"],
  ["Otobüsle gidiyorum.", "Ich fahre mit dem Bus."],
  ["Akşamları kitap okuyorum.", "Abends lese ich Bücher."],
  ["Bugün çok meşgulüm.", "Heute bin ich sehr beschäftigt."],
  ["Biraz dinlenmek istiyorum.", "Ich möchte mich ein bisschen ausruhen."],
  ["Yarın erken kalkmam gerekiyor.", "Morgen muss ich früh aufstehen."]
 ],
 kafe:[
  ["Bir kahve alabilir miyim?", "Kann ich einen Kaffee bekommen?"],
  ["Sütlü mü olsun?", "Möchten Sie ihn mit Milch?"],
  ["Evet, lütfen.", "Ja, bitte."],
  ["Bir bardak su da istiyorum.", "Ich möchte auch ein Glas Wasser."],
  ["Burada mı içeceksiniz?", "Trinken Sie hier?"],
  ["Evet, burada içeceğim.", "Ja, ich trinke hier."],
  ["Başka bir şey ister misiniz?", "Möchten Sie noch etwas?"],
  ["Hayır, teşekkürler.", "Nein, danke."],
  ["Hesabı alabilir miyim?", "Kann ich bitte die Rechnung haben?"],
  ["Kartla ödeyebilir miyim?", "Kann ich mit Karte bezahlen?"]
 ],
 restoran:[
  ["İki kişilik bir masa istiyoruz.", "Wir möchten einen Tisch für zwei Personen."],
  ["Rezervasyonunuz var mı?", "Haben Sie eine Reservierung?"],
  ["Evet, saat yedi için.", "Ja, für sieben Uhr."],
  ["Menüyü alabilir miyiz?", "Können wir bitte die Speisekarte bekommen?"],
  ["Ne tavsiye edersiniz?", "Was empfehlen Sie?"],
  ["Vejetaryen yemek var mı?", "Haben Sie vegetarische Gerichte?"],
  ["Ben balık sipariş etmek istiyorum.", "Ich möchte Fisch bestellen."],
  ["Yemek çok lezzetli.", "Das Essen ist sehr lecker."],
  ["Biraz daha ekmek alabilir miyiz?", "Können wir noch etwas Brot bekommen?"],
  ["Hesabı ayrı ödeyeceğiz.", "Wir möchten getrennt bezahlen."]
 ],
 otel:[
  ["Bir odam var, rezervasyon yaptım.", "Ich habe ein Zimmer reserviert."],
  ["Pasaportunuzu görebilir miyim?", "Kann ich Ihren Pass sehen?"],
  ["İşte pasaportum.", "Hier ist mein Pass."],
  ["Kahvaltı saat kaçta?", "Wann gibt es Frühstück?"],
  ["Kahvaltı saat yediden ona kadar.", "Das Frühstück ist von sieben bis zehn Uhr."],
  ["Odamda internet çalışmıyor.", "Das Internet funktioniert in meinem Zimmer nicht."],
  ["Ekstra bir havlu alabilir miyim?", "Kann ich ein zusätzliches Handtuch bekommen?"],
  ["Çıkış saati kaçta?", "Wann ist der Check-out?"],
  ["Bir gece daha kalmak istiyorum.", "Ich möchte noch eine Nacht bleiben."],
  ["Konaklamamız çok güzeldi.", "Unser Aufenthalt war sehr schön."]
 ],
 ulasim:[
  ["Tren istasyonu nerede?", "Wo ist der Bahnhof?"],
  ["Bu tren Berlin’e gidiyor mu?", "Fährt dieser Zug nach Berlin?"],
  ["Bir bilet almak istiyorum.", "Ich möchte eine Fahrkarte kaufen."],
  ["Tek yön mü, gidiş dönüş mü?", "Einfach oder hin und zurück?"],
  ["Gidiş dönüş lütfen.", "Hin und zurück, bitte."],
  ["Tren saat kaçta kalkıyor?", "Wann fährt der Zug ab?"],
  ["Hangi perondan kalkıyor?", "Von welchem Gleis fährt er ab?"],
  ["Tren on dakika gecikti.", "Der Zug hat zehn Minuten Verspätung."],
  ["Bir sonraki durakta ineceğim.", "Ich steige an der nächsten Haltestelle aus."],
  ["Bana burada haber verir misiniz?", "Können Sie mir hier Bescheid sagen?"]
 ],
 yol:[
  ["Affedersiniz, postane nerede?", "Entschuldigung, wo ist die Post?"],
  ["Dümdüz gidin.", "Gehen Sie geradeaus."],
  ["İlk sokaktan sağa dönün.", "Biegen Sie an der ersten Straße rechts ab."],
  ["Işıkların yanında mı?", "Ist es neben der Ampel?"],
  ["Evet, tam karşısında.", "Ja, direkt gegenüber."],
  ["Yürüyerek ne kadar sürer?", "Wie lange dauert es zu Fuß?"],
  ["Yaklaşık on dakika.", "Ungefähr zehn Minuten."],
  ["Haritada gösterebilir misiniz?", "Können Sie es mir auf der Karte zeigen?"],
  ["Kayboldum, bana yardım eder misiniz?", "Ich habe mich verlaufen. Können Sie mir helfen?"],
  ["Çok teşekkür ederim, iyi günler.", "Vielen Dank, schönen Tag noch."]
 ],
 alisveris:[
  ["Bu tişört ne kadar?", "Wie viel kostet dieses T-Shirt?"],
  ["Başka bir beden var mı?", "Haben Sie eine andere Größe?"],
  ["Daha büyük beden istiyorum.", "Ich möchte eine größere Größe."],
  ["Bunu deneyebilir miyim?", "Kann ich das anprobieren?"],
  ["Deneme kabini nerede?", "Wo ist die Umkleidekabine?"],
  ["Bana çok büyük oldu.", "Es ist mir zu groß."],
  ["Başka bir renk var mı?", "Haben Sie eine andere Farbe?"],
  ["Bunu alıyorum.", "Ich nehme das."],
  ["İade etmek istiyorum.", "Ich möchte es zurückgeben."],
  ["Fişimi kaybettim.", "Ich habe meinen Kassenbon verloren."]
 ],
 kurs:[
  ["Almanca kursu arıyorum.", "Ich suche einen Deutschkurs."],
  ["Kurs ne zaman başlıyor?", "Wann beginnt der Kurs?"],
  ["Haftada kaç gün ders var?", "Wie viele Tage pro Woche gibt es Unterricht?"],
  ["Dersler saat kaçta?", "Um wie viel Uhr ist der Unterricht?"],
  ["Öğretmen yavaş konuşabilir mi?", "Kann der Lehrer langsam sprechen?"],
  ["Anlamadım, tekrar eder misiniz?", "Ich habe das nicht verstanden. Können Sie das wiederholen?"],
  ["Ödevimiz var mı?", "Haben wir Hausaufgaben?"],
  ["Bu kelime ne anlama geliyor?", "Was bedeutet dieses Wort?"],
  ["Bir örnek verebilir misiniz?", "Können Sie ein Beispiel geben?"],
  ["Kendimi geliştirmek istiyorum.", "Ich möchte mich verbessern."]
 ],
 is:[
  ["Ne iş yapıyorsun?", "Was bist du von Beruf?"],
  ["Bir şirkette çalışıyorum.", "Ich arbeite in einer Firma."],
  ["Bugün toplantımız var.", "Wir haben heute eine Besprechung."],
  ["Toplantı saat onda başlıyor.", "Die Besprechung beginnt um zehn Uhr."],
  ["Bu dosyayı gönderebilir misin?", "Kannst du diese Datei schicken?"],
  ["E-postanı aldım.", "Ich habe deine E-Mail erhalten."],
  ["Biraz daha zamana ihtiyacım var.", "Ich brauche etwas mehr Zeit."],
  ["Yarın evden çalışıyorum.", "Morgen arbeite ich von zu Hause."],
  ["İzin günü alabilir miyim?", "Kann ich einen freien Tag nehmen?"],
  ["İş arkadaşlarımla iyi anlaşıyorum.", "Ich verstehe mich gut mit meinen Kollegen."]
 ],
 haftasonu:[
  ["Boş zamanlarında ne yaparsın?", "Was machst du in deiner Freizeit?"],
  ["Müzik dinlemeyi seviyorum.", "Ich höre gern Musik."],
  ["Yüzmeye gitmek ister misin?", "Möchtest du schwimmen gehen?"],
  ["Harika bir fikir!", "Das ist eine tolle Idee!"],
  ["Cumartesi müsait misin?", "Hast du am Samstag Zeit?"],
  ["Maalesef, çalışıyorum.", "Leider muss ich arbeiten."],
  ["Pazar günü buluşalım mı?", "Wollen wir uns am Sonntag treffen?"],
  ["Saat üç benim için uygun.", "Drei Uhr passt mir."],
  ["Birlikte yürüyüş yapabiliriz.", "Wir können zusammen spazieren gehen."],
  ["Çok güzel vakit geçirdim.", "Ich hatte eine sehr schöne Zeit."]
 ],
 hava:[
  ["Bugün hava nasıl?", "Wie ist das Wetter heute?"],
  ["Hava çok güneşli.", "Es ist sehr sonnig."],
  ["Yarın yağmur yağacak mı?", "Wird es morgen regnen?"],
  ["Sanırım yağmur yağacak.", "Ich glaube, es wird regnen."],
  ["Dışarısı çok soğuk.", "Draußen ist es sehr kalt."],
  ["Yanına şemsiye al.", "Nimm einen Regenschirm mit."],
  ["Hava kaç derece?", "Wie viel Grad sind es?"],
  ["Rüzgâr çok kuvvetli.", "Der Wind ist sehr stark."],
  ["Bahar mevsimini seviyorum.", "Ich mag den Frühling."],
  ["Umarım hafta sonu hava güzel olur.", "Hoffentlich ist das Wetter am Wochenende schön."]
 ],
 ev:[
  ["Bir daire kiralamak istiyorum.", "Ich möchte eine Wohnung mieten."],
  ["Kaç odası var?", "Wie viele Zimmer hat sie?"],
  ["Kira ne kadar?", "Wie hoch ist die Miete?"],
  ["Aidat kiraya dahil mi?", "Sind die Nebenkosten in der Miete enthalten?"],
  ["Daire ne zaman boş?", "Ab wann ist die Wohnung frei?"],
  ["Evcil hayvan kabul ediyor musunuz?", "Sind Haustiere erlaubt?"],
  ["Mutfak çok küçük.", "Die Küche ist sehr klein."],
  ["Balkonlu bir daire arıyorum.", "Ich suche eine Wohnung mit Balkon."],
  ["Sözleşmeyi incelemek istiyorum.", "Ich möchte den Vertrag prüfen."],
  ["Ne zaman taşınabilirim?", "Wann kann ich einziehen?"]
 ],
 iletisim:[
  ["Merhaba, ben Mehmet.", "Hallo, hier ist Mehmet."],
  ["Kiminle görüşüyorum?", "Mit wem spreche ich?"],
  ["Bir randevu almak istiyorum.", "Ich möchte einen Termin vereinbaren."],
  ["Yarın saat iki uygun mu?", "Passt morgen um zwei Uhr?"],
  ["O saat benim için uygun değil.", "Diese Uhrzeit passt mir nicht."],
  ["Perşembe günü olabilir mi?", "Geht es am Donnerstag?"],
  ["Telefon numaramı vereyim.", "Ich gebe Ihnen meine Telefonnummer."],
  ["Lütfen tekrar arayın.", "Bitte rufen Sie noch einmal an."],
  ["Mesajınızı aldım.", "Ich habe Ihre Nachricht erhalten."],
  ["Görüşmek üzere, hoşça kalın.", "Auf Wiederhören."]
 ],
 saglik:[
  ["Kendimi iyi hissetmiyorum.", "Ich fühle mich nicht gut."],
  ["Başım ağrıyor.", "Ich habe Kopfschmerzen."],
  ["Ne zamandır ağrınız var?", "Seit wann haben Sie Schmerzen?"],
  ["Dünden beri.", "Seit gestern."],
  ["Bir eczane arıyorum.", "Ich suche eine Apotheke."],
  ["Bu ilaç nasıl kullanılır?", "Wie nimmt man dieses Medikament ein?"],
  ["Günde iki kez alın.", "Nehmen Sie es zweimal täglich ein."],
  ["Bol su içmelisiniz.", "Sie sollten viel Wasser trinken."],
  ["Bir doktordan randevu almalıyım.", "Ich sollte einen Arzttermin vereinbaren."],
  ["Teşekkür ederim, iyi günler.", "Danke, auf Wiedersehen."]
 ],
 gezi:[
  ["Tatil için buradayım.", "Ich bin zum Urlaub hier."],
  ["Şehir merkezini gezmek istiyorum.", "Ich möchte die Innenstadt besichtigen."],
  ["Burada müze var mı?", "Gibt es hier ein Museum?"],
  ["Müze pazartesi kapalı.", "Das Museum ist montags geschlossen."],
  ["Fotoğraf çekebilir miyim?", "Darf ich ein Foto machen?"],
  ["Manzara harika.", "Die Aussicht ist fantastisch."],
  ["Bir tur rezervasyonu yapmak istiyorum.", "Ich möchte eine Tour buchen."],
  ["Tur kaç saat sürüyor?", "Wie lange dauert die Tour?"],
  ["Yerel yemekleri denemek istiyorum.", "Ich möchte lokale Gerichte probieren."],
  ["Bu geziyi çok beğendim.", "Diese Reise hat mir sehr gefallen."]
 ],
};
// Her konu için daha uzun diyaloglar: mevcut sorulara ek 5 konuşma adımı.
const OFFLINE_EXTRA={"tanisma":[["Nerede doğdunuz?","Wo sind Sie geboren?"],["Hangi şehirde büyüdünüz?","In welcher Stadt sind Sie aufgewachsen?"],["Burada ne kadar kalacaksınız?","Wie lange bleiben Sie hier?"],["Almanca öğrenmek neden istiyorsunuz?","Warum möchten Sie Deutsch lernen?"],["Sizinle tanıştığıma sevindim.","Es freut mich, Sie kennenzulernen."]],"aile":[["Anne babanız nerede yaşıyor?","Wo wohnen Ihre Eltern?"],["Kardeşiniz var mı?","Haben Sie Geschwister?"],["Ailenizle sık sık görüşür müsünüz?","Sehen Sie Ihre Familie oft?"],["Birlikte ne yapmayı seversiniz?","Was machen Sie gern zusammen?"],["Aileniz benim için çok önemli.","Meine Familie ist mir sehr wichtig."]],"gunluk":[["Öğle yemeğini nerede yiyorsun?","Wo isst du zu Mittag?"],["İşten saat kaçta çıkıyorsun?","Wann kommst du von der Arbeit nach Hause?"],["Akşam ne yapacaksın?","Was wirst du heute Abend machen?"],["Markete uğramam gerekiyor.","Ich muss noch im Supermarkt vorbeigehen."],["Genellikle gece on birde yatarım.","Normalerweise gehe ich um elf Uhr ins Bett."]],"kafe":[["Şekersiz bir kahve alabilir miyim?","Kann ich einen Kaffee ohne Zucker bekommen?"],["Wi-Fi şifresi nedir?","Wie lautet das WLAN-Passwort?"],["Dışarıda oturabilir miyiz?","Können wir draußen sitzen?"],["Siparişimiz ne zaman hazır olur?","Wann ist unsere Bestellung fertig?"],["Her şey çok güzeldi, teşekkürler.","Alles war sehr gut, vielen Dank."]],"restoran":[["Pencere kenarında oturabilir miyiz?","Können wir am Fenster sitzen?"],["Bu yemeğin içinde ne var?","Was ist in diesem Gericht?"],["Fıstığa alerjim var.","Ich bin allergisch gegen Erdnüsse."],["Yemeği paket yaptırabilir miyim?","Kann ich das Essen mitnehmen?"],["Kartla ödeme yapacağım.","Ich werde mit Karte bezahlen."]],"otel":[["Odam deniz manzaralı mı?","Hat mein Zimmer Meerblick?"],["Asansör nerede?","Wo ist der Aufzug?"],["Klima çalışmıyor.","Die Klimaanlage funktioniert nicht."],["Valizimi resepsiyonda bırakabilir miyim?","Kann ich meinen Koffer an der Rezeption lassen?"],["Bana taksi çağırabilir misiniz?","Können Sie mir ein Taxi rufen?"]],"ulasim":[["Bu koltuk boş mu?","Ist dieser Platz frei?"],["Biletimi nerede gösterebilirim?","Wo kann ich mein Ticket zeigen?"],["Treni kaçırdım.","Ich habe den Zug verpasst."],["Bir sonraki tren ne zaman?","Wann fährt der nächste Zug?"],["Bu durakta aktarma yapmam gerekiyor mu?","Muss ich an dieser Haltestelle umsteigen?"]],"yol":[["En yakın banka nerede?","Wo ist die nächste Bank?"],["Buraya nasıl gidebilirim?","Wie komme ich dorthin?"],["Sağa mı sola mı dönmeliyim?","Muss ich rechts oder links abbiegen?"],["Buradan çok uzak mı?","Ist es von hier weit?"],["Yardımınız için teşekkür ederim.","Vielen Dank für Ihre Hilfe."]],"alisveris":[["Pamuklu bir gömlek arıyorum.","Ich suche ein Baumwollhemd."],["Bu ürün indirimde mi?","Ist dieser Artikel im Angebot?"],["Nakit ödeyebilir miyim?","Kann ich bar bezahlen?"],["Daha ucuz bir modeliniz var mı?","Haben Sie ein günstigeres Modell?"],["Alışveriş çantası alabilir miyim?","Kann ich eine Einkaufstasche bekommen?"]],"kurs":[["Sınıfımız kaçıncı katta?","In welchem Stock ist unser Klassenraum?"],["Sınav ne zaman yapılacak?","Wann findet die Prüfung statt?"],["Bu cümleyi açıklayabilir misiniz?","Können Sie diesen Satz erklären?"],["Birlikte çalışabilir miyiz?","Können wir zusammenarbeiten?"],["Ders çok faydalıydı.","Der Unterricht war sehr hilfreich."]],"is":[["Saat dokuzda işe başlıyorum.","Ich fange um neun Uhr mit der Arbeit an."],["Müdürümle konuşmam gerekiyor.","Ich muss mit meinem Chef sprechen."],["Raporu bugün bitireceğim.","Ich werde den Bericht heute fertigstellen."],["Toplantıyı erteleyebilir miyiz?","Können wir die Besprechung verschieben?"],["İş arkadaşım bana yardımcı oldu.","Mein Kollege hat mir geholfen."]],"haftasonu":[["Hafta sonu nereye gitmek istersin?","Wohin möchtest du am Wochenende gehen?"],["Birlikte sinemaya gidelim mi?","Wollen wir zusammen ins Kino gehen?"],["Hangi filmleri seversin?","Welche Filme magst du?"],["Doğada vakit geçirmeyi tercih ederim.","Ich verbringe lieber Zeit in der Natur."],["Gelecek hafta tekrar görüşelim.","Lass uns nächste Woche wieder treffen."]],"hava":[["Hava bugün dünden daha sıcak.","Heute ist es wärmer als gestern."],["Akşam kar yağabilir.","Am Abend kann es schneien."],["Hava tahminini kontrol ettin mi?","Hast du den Wetterbericht geprüft?"],["Rüzgâr nedeniyle çok soğuk hissediliyor.","Wegen des Windes fühlt es sich sehr kalt an."],["Güzel havada yürüyüşe çıkalım.","Lass uns bei schönem Wetter spazieren gehen."]],"ev":[["Daire kaç metrekare?","Wie viele Quadratmeter hat die Wohnung?"],["Isıtma fiyata dahil mi?","Ist die Heizung im Preis enthalten?"],["Komşular sessiz mi?","Sind die Nachbarn ruhig?"],["Evi ne zaman görebilirim?","Wann kann ich die Wohnung besichtigen?"],["Depozito ne kadar?","Wie hoch ist die Kaution?"]],"iletisim":[["Şu anda konuşmak için uygun musunuz?","Haben Sie gerade Zeit zum Sprechen?"],["Size daha sonra geri dönebilir miyim?","Kann ich Sie später zurückrufen?"],["Randevuyu saat üçe alabilir miyiz?","Können wir den Termin auf drei Uhr legen?"],["Adresinizi mesajla gönderir misiniz?","Können Sie mir Ihre Adresse per Nachricht schicken?"],["Aradığınız için teşekkür ederim.","Vielen Dank für Ihren Anruf."]],"saglik":[["Ateşim var.","Ich habe Fieber."],["Öksürüyorum ve boğazım ağrıyor.","Ich habe Husten und Halsschmerzen."],["Doktor bugün müsait mi?","Hat der Arzt heute Zeit?"],["Sigorta kartım yanımda.","Ich habe meine Versicherungskarte dabei."],["İlaçları yemekten sonra mı almalıyım?","Soll ich die Medikamente nach dem Essen nehmen?"]],"gezi":[["Eski şehir merkezine gitmek istiyorum.","Ich möchte in die Altstadt gehen."],["Giriş ücreti ne kadar?","Wie viel kostet der Eintritt?"],["Rehber İngilizce konuşuyor mu?","Spricht der Reiseführer Englisch?"],["Burada hediyelik eşya alabilir miyim?","Kann ich hier Souvenirs kaufen?"],["Yarın sabah erkenden yola çıkacağız.","Morgen früh fahren wir früh los."]]};
Object.entries(OFFLINE_EXTRA).forEach(([key,items])=>{ if(OFFLINE_DIALOGS[key]) OFFLINE_DIALOGS[key].push(...items); });
let offlineIndex=0,offlineDone=false;
function offlineRender(){const key=$('#offlineScenario').value,arr=OFFLINE_DIALOGS[key]||OFFLINE_DIALOGS.tanisma,item=arr[offlineIndex%arr.length];$('#offlineStep').textContent=`${offlineIndex+1} / ${arr.length}`;$('#offlineLevelTag').textContent=$('#offlineLevel').value;$('#offlinePrompt').textContent=item[0];$('#offlineAnswer').value='';$('#offlineFeedback').textContent='';$('#offlineFeedback').className='offline-feedback';$('#offlineNext').hidden=true;$('#offlineAccept').hidden=true;$('#offlineCheck').disabled=false;offlineDone=false;$('#offlineHint').textContent='Almanca karşılığını yaz.';}
function offlineNorm(x){return String(x||"").toLocaleLowerCase("de").normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").replace(/ß/g,"ss").replace(/[.,!?;:¿¡'"“”„]/g,"").replace(/\\s+/g," ").trim()}
function offlineAccepted(){try{return JSON.parse(localStorage.getItem("de_offline_accepted_v1")||"{}")}catch{return {}}}
function offlineSaveAccepted(key,value){const all=offlineAccepted();all[key]=Array.isArray(all[key])?all[key]:[];if(!all[key].includes(value))all[key].push(value);try{localStorage.setItem("de_offline_accepted_v1",JSON.stringify(all))}catch{}}
function offlineQuestionKey(scenario,item){return scenario+"::"+item[0]}
function offlineCheck(){const scenario=$('#offlineScenario').value,arr=OFFLINE_DIALOGS[scenario]||OFFLINE_DIALOGS.tanisma,item=arr[offlineIndex%arr.length],answer=offlineNorm($('#offlineAnswer').value),saved=offlineAccepted()[offlineQuestionKey(scenario,item)]||[],correct=item.slice(1).some(x=>offlineNorm(x)===answer)||saved.includes(answer);const box=$('#offlineFeedback');box.textContent=correct?'✓ Sehr gut! Doğru cevap.':'Cevabın kayıtlı örneklerden farklı. Eğer anlamı doğruysa “Benim cevabım da doğru” düğmesiyle kabul ettirebilirsin. Örnek: '+item[1];box.className='offline-feedback '+(correct?'good':'try');$('#offlineNext').hidden=false;$('#offlineCheck').disabled=true;$('#offlineAccept').hidden=correct||!answer;offlineDone=true;}
function initOfflineChat(){if(!$('#offlineScenario'))return;$('#offlineScenario').onchange=()=>{offlineIndex=0;offlineRender()};$('#offlineLevel').onchange=offlineRender; $('#offlineCheck').onclick=offlineCheck;$('#offlineAccept').onclick=()=>{const scenario=$('#offlineScenario').value,arr=OFFLINE_DIALOGS[scenario]||OFFLINE_DIALOGS.tanisma,item=arr[offlineIndex%arr.length],answer=offlineNorm($('#offlineAnswer').value);if(!answer){toast('Önce cevabını yaz.');return}offlineSaveAccepted(offlineQuestionKey(scenario,item),answer);$('#offlineFeedback').textContent='✓ Cevabın doğru kabul edildi ve bu soru için bu cihazda kaydedildi. Sonraki çalışmalarda da kabul edilecek.';$('#offlineFeedback').className='offline-feedback good';$('#offlineAccept').hidden=true;$('#offlineNext').hidden=false;$('#offlineCheck').disabled=true;offlineDone=true};$('#offlineReveal').onclick=()=>{const item=(OFFLINE_DIALOGS[$('#offlineScenario').value]||OFFLINE_DIALOGS.tanisma)[offlineIndex%((OFFLINE_DIALOGS[$('#offlineScenario').value]||OFFLINE_DIALOGS.tanisma).length)];$('#offlineFeedback').textContent='Doğru cevap: '+item[1];$('#offlineFeedback').className='offline-feedback';$('#offlineNext').hidden=false;$('#offlineCheck').disabled=true};$('#offlineNext').onclick=()=>{const arr=OFFLINE_DIALOGS[$('#offlineScenario').value]||OFFLINE_DIALOGS.tanisma;offlineIndex=(offlineIndex+1)%arr.length;offlineRender()};offlineRender();}
function initChatModes(){
 const ai=$('#aiChatMode'),off=$('#offlineChatMode');
 if(!ai||!off)return;
 if(ai.dataset.ready==='1')return;
 ai.dataset.ready='1';
 const activate=(mode)=>{
   const useOffline=mode==='offline';
   ai.classList.toggle('active',!useOffline);off.classList.toggle('active',useOffline);
   $('#aiChatArea').hidden=useOffline;$('#offlineChatArea').hidden=!useOffline;
   if(useOffline){try{initOfflineChat()}catch(err){console.error('Hazır sohbet başlatılamadı:',err);$('#offlineFeedback').textContent='Hazır sohbet açılırken bir hata oluştu. Sayfayı yenileyip tekrar deneyin.';}}
 };
 ai.addEventListener('click',()=>activate('ai'));
 off.addEventListener('click',()=>activate('offline'));
 // AI sohbeti başlatılamasa bile varsayılan görünüm ve hazır sohbet bağımsız kalır.
 activate('ai');
}

let lastPage="home";try{lastPage=localStorage.getItem("de_last_page")||"home"}catch{};showPage(["home","words","sentences","verbs","grammar","chat","import"].includes(lastPage)?lastPage:"home");
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
