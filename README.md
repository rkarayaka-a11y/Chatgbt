# Almanca Yolculuğum – GitHub Pages sürümü

Bu paket, V10 uygulamasının GitHub Pages üzerinde yayınlanabilecek statik sürümüdür.

## Önemli fark
GitHub Pages yalnızca statik dosyaları yayınlar; Netlify Functions gibi sunucu kodlarını çalıştırmaz. Bu nedenle:
- **Hazır kalıplarla sohbet** ve diğer uygulama bölümleri GitHub Pages üzerinde çalışır.
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

## Sorun giderme
- Sayfa açılmıyorsa repository'nin en üst seviyesinde `index.html` olduğundan emin olun; `public` klasörünün içinde kalmamalı.
- Güncelleme görünmüyorsa Chrome'da siteyi yenileyin; PWA eski dosyaları önbellekten gösterebilir. Gerekirse site verilerini temizleyip tekrar açın.
- Hazır sohbet internet gerektirmez; ilk ziyaret ve uygulamanın dosyalarını indirmek için internet gerekir.
- Gemini kotası veya model yoğunluğu gibi Google tarafındaki hatalar Cloudflare Worker kullanılsa da yaşanabilir.

## Paket içeriği
- `index.html`, `app.js`, `style.css`, `sw.js`, ikonlar ve manifest: GitHub Pages uygulaması.
- `config.js`: AI Worker adresi ayarı (başlangıçta boş).
- `cloudflare-worker/`: API anahtarını sunucuda gizli tutan örnek Gemini Worker.
