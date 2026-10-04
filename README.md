# DermaScora v1.6.7

Dermatoloji asistanları ve uzmanları için bilimsel kaynaklı, tamamen statik klinik skorlama hesaplayıcıları.

## Diller

Arayüz artık sağ üstteki küçük bayraklı dil menüsünden şu sırayla değiştirilebilir:

1. Türkçe
2. English
3. Deutsch
4. Français
5. Español

Seçilen dil tarayıcıda saklanır ve sonraki ziyarette korunur. Skor formülleri dilden bağımsızdır; dil değişimi yalnızca arayüz ve açıklama metinlerini değiştirir.

> Hasta bildirimli ölçeklerde (örn. UCT, POEM) klinik veya araştırma kullanımı için ilgili dilde resmi/validasyonu yapılmış sürüm tercih edilmelidir. Uygulamadaki çeviriler arayüz kolaylığı içindir.

## İçerik

- PASI — Psoriasis Area and Severity Index
- SALT — Severity of Alopecia Tool
- LPPAI — Lichen Planopilaris Activity Index
- PDAI — Pemphigus Disease Area Index
- BPDAI — Bullous Pemphigoid Disease Area Index
- EASI — Eczema Area and Severity Index
- SCORAD — SCORing Atopic Dermatitis
- SCORTEN — Severity-of-Illness Score for Toxic Epidermal Necrolysis
- UAS7 — Urticaria Activity Score over 7 days
- IHS4 — International Hidradenitis Suppurativa Severity Score System
- PARACELSUS — diagnostic likelihood score for pyoderma gangrenosum
- NAPSI — Nail Psoriasis Severity Index
- VASI — Vitiligo Area Scoring Index
- CLASI — Cutaneous Lupus Erythematosus Disease Area and Severity Index
- mLoSSI — modified Localized Scleroderma Skin Severity Index
- LoSCAT — Localized Scleroderma Cutaneous Assessment Tool
- ABSIS — Autoimmune Bullous Skin Disorder Intensity Score
- UCT — Urticaria Control Test
- POEM — Patient-Oriented Eczema Measure
- mMASI — Modified Melasma Area and Severity Index
- GAGS — Global Acne Grading System
- RASI — Rosacea Area and Severity Index

## Yayınlama (GitHub Pages)

1. Bu klasörün **içeriğini** GitHub deposunun köküne yükleyin.
2. GitHub'da **Settings → Pages** bölümünü açın.
3. **Deploy from a branch** seçeneğini kullanın.
4. Branch olarak `main`, klasör olarak `/ (root)` seçin ve kaydedin.
5. Site birkaç dakika içinde yayımlanır.

Build sistemi veya sunucu gerektirmez.

## v1.6.7
- Skorlama araçları klinik başlıklar altında gruplandırıldı; ana sayfa ve sol menü aynı grup yapısını kullanır.
- PARACELSUS ile Piyoderma gangrenosum etiketlerinin çakışmasını önlemek için hesaplayıcı başlığı ve sol menü yerleşimi yeniden düzenlendi.
- Uzun skor kodlarında taşma/üst üste binme engellendi; mobil ve masaüstü görünüm iyileştirildi.

## v1.5.0
- CLASI skatrisyel alopesi alanı resmi puan kategorilerine göre **0 / 3 / 4 / 5 / 6** olarak düzenlendi.
- UCT cevap seçenekleri soru yönüne göre açık ifadelerle yeniden yazıldı; tüm sorularda yüksek puan daha iyi kontrolü gösterir.
- IHS4 anatomik bölge bazlı lezyon girişiyle yeniden tasarlandı; standart toplam IHS4 formülü değişmedi.
- **PARACELSUS** skoru yeni bir hesaplayıcı olarak eklendi.
- CLASI, VASI, NAPSI, UAS7, SCORTEN, SCORAD, EASI, BPDAI, SALT ve PASI sayfalarındaki çok-dilli eksik/dinamik metinler tamamlandı.
- Hakkında sayfası modern kart düzeniyle yenilendi ve iletişim adresi **berkanbostanci99@gmail.com** eklendi.
- Toplam hesaplayıcı sayısı **22** oldu.

## v1.3.0

- Türkçe, İngilizce, Almanca, Fransızca ve İspanyolca arayüz desteği.
- Sağ üst köşede kompakt bayraklı dil seçici.
- Dil tercihi `localStorage` ile korunur.
- Aynı URL, aynı hesaplayıcı mimarisi ve aynı skor formülleri korunur.
- Tıbbi ölçekler için resmi/validasyonu yapılmış dil sürümlerinin tercih edilmesi gerektiğine dair not eklendi.

## Tıbbi uyarı

Bu uygulama eğitim ve klinik dokümantasyon desteği içindir. Tanı, tedavi veya acil klinik değerlendirme yerine geçmez. Özellikle SCORTEN yalnızca prognostik skordur ve SJS/TEN tıbbi acildir.

## Gizlilik

Hesaplamalar tamamen istemci tarafında JavaScript ile yapılır. Uygulama hasta verisi toplamaz veya sunucuya göndermez.
