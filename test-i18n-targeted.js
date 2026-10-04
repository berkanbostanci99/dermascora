global.localStorage={getItem(){return null},setItem(){}};
global.document={documentElement:{lang:'tr'}};
require('./assets/i18n.js');
const I=global.DermaScoraI18n;
const samples=[
'Dispigmentasyon ≥12 ay sürüyor (dispigmentasyon skoru ikiyle çarpılır)',
'Her bölge için vitiligolu alanı hand unit (HU) olarak ve depigmentasyon yüzdesini girin.',
'Sağ başparmak','pitting, lökonişi, kırılma, lunulada kırmızı noktalar.',
'1. gün','1 · <20 / 24 sa','SALT = üst×0.40 + arka×0.24 + sol×0.18 + sağ×0.18',
'Renk yoğunluğu, ilgili bölgedeki tutulan alan yüzdesini yaklaşık yansıtır; hesaplama yine yayınlanmış PASI alan eşiklerine göre otomatik yapılır.',
'Orijinal kriter: >40 yıl','Üre mmol/L','Risk: üre >10 mmol/L ≈ BUN >28 mg/dL ≈ üre >60 mg/dL',
'toplam 0–18','ağırlık 0.1','1 · 1–3; hiçbiri >1 cm','5 · >3 ve en az biri >25 cm',
'Son 4 haftada ürtiker tedaviniz belirtilerinizi kontrol etmekte ne sıklıkta yetersiz kaldı?','0 · Çok sık','4 · Çok iyi',
'Sağ aksilla','Bölgesel satırlar kayıt kolaylığı içindir; her lezyonu yalnızca bir bölgede sayın. Son IHS4, tüm bölgelerin lezyon toplamlarından hesaplanır.',
'Hızla ilerleyen hastalık / ülserin 6 hafta içinde gelişmesi','Orijinal çalışma: ≥10 puan PG için yüksek olasılık. 2026 çok merkezli validasyonda >10 eşik değerinin özgüllüğü artırdığı bildirilmiştir; sonuç bu nedenle klinik bağlamla yorumlanmalıdır.'
];
for(const lang of ['en','de','fr','es']){
  I.setLang(lang);
  for(const x of samples){
    const y=I.translateText(x);
    if(y===x) throw new Error(`${lang} untranslated: ${x}`);
  }
  if(!I.getUI('aboutContactLabel') || I.getUI('aboutContactLabel')==='aboutContactLabel') throw new Error(`${lang} missing contact UI`);
}
console.log('i18n targeted tests passed');
