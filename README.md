# Almanca Yolculuğum – GitHub Pages sürümü

Bu paket, V10 uygulamasının GitHub Pages üzerinde yayınlanabilecek statik sürümüdür.

## Önemli fark
GitHub Pages yalnızca statik dosyaları yayınlar; Netlify Functions gibi sunucu kodlarını çalıştırmaz. Bu nedenle:
- **Hazır kalıplarla sohbet** ve diğer uygulama bölümleri GitHub Pages üzerinde çalışır. Hazır sohbette cevap farkları yerel olarak gösterilir; internet varsa yazım/dilbilgisi kontrolü LanguageTool, alternatif cümle araması Tatoeba üzerinden denenir.
- **Yapay zekâ sohbeti** için ayrı bir sunucu gerekir. Bu pakete Cloudflare Worker örneği eklendi.
- Google Gemini API anahtarını GitHub'a veya `config.js` dosyasına kesinlikle koymayın.

## A) GitHub'a yükleme ve hazır sohbeti çalıştırma

1. GitHub'da oturum açın ve yeni bir repository oluşturun. Örnek ad: `almanca-yolculugum`.
2. Bu ZIP dosyasını açın.
3. ZIP'in içindeki dosya ve klasörleri repository'nin **en üst seviyesine** yükleyin. En üst seviyede `index.html`, `app.js`, `style.css`, `sw.js`, `manifest.webmanifest` ve `config.js` görünmeli.
4. GitHub repository sayfasında **Settings → Pages** bölümünü açın.
5. **Build and deployment → Deploy from a branch** seçin.
6. Branch olarak `main`, klasör olarak `/(root)` seçip Save'e basın.
7. GitHub Pages adresinin yayınlanmasını bekleyin. Adres genellikle `https://KULLANICI.github.io/almanca-yolculugum/` biçimindedir.
8. Bu adresi Android Chrome'da açın. Hazır kalıplarla sohbet ve diğer statik uygulama özellikleri kullanılabilir.

Not: İlk açılışta internet bağlantısı gerekir. PWA önbelleği yüklendikten sonra önceden önbelleğe alınmış uygulama ekranları çevrimdışı açılabilir. Excel içeriği ve ilerleme aynı cihazın tarayıcısında tutulur; otomatik bulut eşitleme yoktur.

## B) Yapay zekâ sohbetini de etkinleştirmek (isteğe bağlı)

GitHub Pages API anahtarını gizli tutup sunucu kodu çalıştıramaz. Bu nedenle Cloudflare Worker kullanın:

1. Cloudflare hesabı açın ve Workers & Pages bölümüne gidin.
2. `cloudflare-worker` klasöründeki `index.js` dosyasını yeni bir Worker'a kopyalayın veya Wrangler ile dağıtın.
3. Worker ayarlarında **Settings → Variables and Secrets** bölümünden `GEMINI_API_KEY` adlı bir **Secret** oluşturun. Google AI Studio anahtarınızı bu Secret'ın değerine girin. Anahtarı bana veya GitHub'a göndermeyin.
4. Worker'ı deploy edin ve size verilen HTTPS adresini kopyalayın. Adres `https://...workers.dev` biçiminde olur.
5. GitHub repository'sindeki `config.js` dosyasını düzenleyin ve şu satıra Worker adresini tırnak içinde yazın:
   `CHAT_API_URL: "https://WORKER-ADRESINIZ.workers.dev"`
6. Değişikliği commit edin. GitHub Pages yeniden yayınlandıktan sonra yapay zekâ sohbetini deneyin.

Worker CORS başlığında HTTPS kaynaklarına izin verir. Üretimde güvenliği artırmak için Worker kodundaki CORS izin listesini yalnızca kendi GitHub Pages alan adınıza sınırlandırmanız önerilir.

## Hazır sohbet kontrolü
- Cevap kontrolünde önce beklenen cümle, ardından eksik/fazla kelime veya olası yazım farkı gösterilir. LanguageTool yanıt verirse dilbilgisi/yazım önerileri de eklenir.
- Tatoeba üzerinden aynı Türkçe ifadeye bağlı Almanca karşılıklar aranır; bulunamazsa soru kartında kayıtlı alternatifler gösterilir. İnternetteki kaynakların kapsamı her cümle için aynı değildir.
- LanguageTool ücretsiz kamu servisi olduğundan yoğunluk, limit veya bağlantı nedeniyle zaman zaman yanıt vermeyebilir.

## Sorun giderme
- Sayfa açılmıyorsa repository'nin en üst seviyesinde `index.html` olduğundan emin olun; `public` klasörünün içinde kalmamalı.
- Güncelleme görünmüyorsa Chrome'da siteyi yenileyin; PWA eski dosyaları önbellekten gösterebilir. Gerekirse site verilerini temizleyip tekrar açın.
- Hazır sohbetin soru-cevap akışı çalışmak için AI gerektirmez. Ancak ayrıntılı yazım/dilbilgisi kontrolü ve internetten alternatif cümle araması için internet bağlantısı gerekir. Yazdığın Almanca cevap, kontrol düğmesine bastığında LanguageTool servisine gönderilir; servis ücretsizdir ve hız/kullanım sınırları vardır. Bağlantı veya servis sorunu olursa uygulama yerel kelime karşılaştırmasını ve kayıtlı alternatifleri gösterir.
- Gemini kotası veya model yoğunluğu gibi Google tarafındaki hatalar Cloudflare Worker kullanılsa da yaşanabilir.

## Paket içeriği
- `index.html`, `app.js`, `style.css`, `sw.js`, ikonlar ve manifest: GitHub Pages uygulaması.
- `config.js`: AI Worker adresi ayarı (başlangıçta boş).
- `cloudflare-worker/`: API anahtarını sunucuda gizli tutan örnek Gemini Worker.
