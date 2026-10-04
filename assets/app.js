(function(){
  'use strict';
  const S = window.DermaScoraScores;
  const I = window.DermaScoraI18n;


const tools = [
  {id:'pasi',code:'PASI',title:'Psoriasis Area and Severity Index',disease:'Psoriasis',desc:'Eritem, indürasyon, skuam ve bölgesel tutulum ile 0–72.'},
  {id:'salt',code:'SALT',title:'Severity of Alopecia Tool',disease:'Alopesi areata',desc:'İnteraktif saçlı deri haritası ile dört bölgenin ağırlıklı saç kaybı yüzdesi; 0–100.'},
  {id:'lppai',code:'LPPAI',title:'Lichen Planopilaris Activity Index',disease:'Liken planopilaris',desc:'Semptomlar, klinik bulgular, anajen pull test ve yayılma ile hastalık aktivitesi; 0–10.'},
  {id:'pdai',code:'PDAI',title:'Pemphigus Disease Area Index',disease:'Pemfigus',desc:'Cilt, saçlı deri ve mukozal aktivite + hasar alt skorları.'},
  {id:'bpdai',code:'BPDAI',title:'Bullous Pemphigoid Disease Area Index',disease:'Büllöz pemfigoid',desc:'Bül/erozyon, ürtiker/eritem, mukoza ve hasar bileşenleri.'},
  {id:'easi',code:'EASI',title:'Eczema Area and Severity Index',disease:'Atopik dermatit',desc:'Dört vücut bölgesi için alan ve dört klinik bulgu; 0–72.'},
  {id:'scorad',code:'SCORAD',title:'SCORing Atopic Dermatitis',disease:'Atopik dermatit',desc:'Yaygınlık, yoğunluk, kaşıntı ve uykusuzluk; 0–103.'},
  {id:'scorten',code:'SCORTEN',title:'Severity-of-Illness Score for TEN',disease:'SJS / TEN',desc:'Yedi risk faktörü ile prognostik mortalite tahmini.'},
  {id:'uas7',code:'UAS7',title:'Urticaria Activity Score over 7 days',disease:'Kronik spontan ürtiker',desc:'7 gün boyunca kabarıklık ve kaşıntı aktivitesi; 0–42.'},
  {id:'ihs4',code:'IHS4',title:'International HS Severity Score System',disease:'Hidradenitis suppurativa',desc:'Bölgesel lezyon girişiyle nodül + 2×apse + 4×drene tünel.'},
  {id:'paracelsus',code:'PARACELSUS',title:'PARACELSUS Score',disease:'Piyoderma gangrenosum',desc:'Piyoderma gangrenosum olasılığını 10 klinik ve histopatolojik kriterle değerlendirir.'},
  {id:'napsi',code:'NAPSI',title:'Nail Psoriasis Severity Index',disease:'Tırnak psoriasisi',desc:'Her tırnakta matriks ve tırnak yatağı tutulumu; 0–8/tırnak.'},
  {id:'vasi',code:'VASI',title:'Vitiligo Area Scoring Index',disease:'Vitiligo',desc:'Vücut bölgelerinde hand-unit ve depigmentasyon derecesi ile toplam VASI.'},
  {id:'clasi',code:'CLASI',title:'Cutaneous Lupus Erythematosus Disease Area and Severity Index',disease:'Kutanöz lupus',desc:'Aktivite ve hasarı ayrı raporlayan dijital CLASI formu.'},
  {id:'mlossi',code:'mLoSSI',title:'modified Localized Scleroderma Skin Severity Index',disease:'Morfea / lokalize skleroderma',desc:'18 anatomik bölgede eritem, deri kalınlığı ve yeni/genişleyen lezyon ile aktivite skoru.'},
  {id:'loscat',code:'LoSCAT',title:'Localized Scleroderma Cutaneous Assessment Tool',disease:'Morfea / lokalize skleroderma',desc:'Güncel LoSAI aktivitesi, LoSDI hasarı ve hekim global değerlendirmelerini ayrı raporlar.'},
  {id:'absis',code:'ABSIS',title:'Autoimmune Bullous Skin Disorder Intensity Score',disease:'Pemfigus',desc:'Kutanöz tutulum ve oral bileşenleri birlikte özetler.'},
  {id:'uct',code:'UCT',title:'Urticaria Control Test',disease:'Ürtiker kontrolü',desc:'Son 4 haftadaki kontrol düzeyi için 4 soruluk test; 0–16.'},
  {id:'poem',code:'POEM',title:'Patient-Oriented Eczema Measure',disease:'Atopik dermatit',desc:'Hastanın bildirdiği 7 semptomun haftalık sıklığı; 0–28.'},
  {id:'mmasi',code:'mMASI',title:'Modified Melasma Area and Severity Index',disease:'Melazma',desc:'Alın, sağ/sol malar ve çene alanları üzerinden melazma şiddeti.'},
  {id:'gags',code:'GAGS',title:'Global Acne Grading System',disease:'Akne vulgaris',desc:'Yüz ve gövde alanlarına göre akne şiddet puanı.'},
  {id:'rasi',code:'RASI',title:'Rosacea Area and Severity Index',disease:'Rozasea',desc:'Yüz bölgelerinde alan ve temel klinik bulgular ile rosacea skoru.'}
];


const refs = {
  pasi:[
    ['Fredriksson T, Pettersson U. Severe psoriasis—oral therapy with a new retinoid. Dermatologica. 1978;157:238–244.','https://doi.org/10.1159/000250839'],
    ['Schmitt J, Wozel G. The psoriasis area and severity index is the adequate criterion to define severity in chronic plaque-type psoriasis. Dermatology. 2005;210:194–199.','https://doi.org/10.1159/000083509']
  ],
  salt:[
    ['Olsen EA, et al. Alopecia areata investigational assessment guidelines—Part II. J Am Acad Dermatol. 2004;51:440–447.','https://doi.org/10.1016/j.jaad.2003.09.032'],
    ['Olsen EA, Canfield D. SALT II: A new take on the Severity of Alopecia Tool. J Am Acad Dermatol. 2016;75:1268–1270.','https://doi.org/10.1016/j.jaad.2016.08.042'],
    ['Blume-Peytavi U, et al. S3 guideline diagnostics and therapy of alopecia areata — Part 1. J Dtsch Dermatol Ges. 2026.','https://doi.org/10.1111/ddg.70065x']
  ],
  pdai:[
    ['Murrell DF, et al. Consensus statement on definitions of disease, end points, and therapeutic response for pemphigus. J Am Acad Dermatol. 2008;58:1043–1046.','https://doi.org/10.1016/j.jaad.2008.01.012'],
    ['Société Française de Dermatologie — PDAI formu.','https://www.sfdermato.org/media/pdf/recommandation/pemphigus-pdai-0532ba1df791008948a862b4485f7faf.pdf'],
    ['Shimizu T, et al. Grading criteria for disease severity by pemphigus disease area index. J Dermatol. 2014;41:969–973.','https://doi.org/10.1111/1346-8138.12649'],
    ['Boulard C, et al. Calculation of cut-off values based on ABSIS and PDAI. Br J Dermatol. 2016;175:142–149.','https://doi.org/10.1111/bjd.14405']
  ],
  bpdai:[
    ['Murrell DF, et al. Definitions and outcome measures for bullous pemphigoid. J Am Acad Dermatol. 2012;66:479–485.','https://doi.org/10.1016/j.jaad.2011.06.032'],
    ['Masmoudi W, et al. International validation of the BPDAI severity score and cut-off values. Br J Dermatol. 2021;184:1106–1112.','https://pubmed.ncbi.nlm.nih.gov/33067805/'],
    ['Société Française de Dermatologie — BPDAI formu.','https://www.sfdermato.org/upload/scores/pemphigoide-bulleuse-bpdai-aedf0c3158953447cdd30ecf14304eae.pdf']
  ],
  easi:[
    ['Hanifin JM, et al. The Eczema Area and Severity Index (EASI): assessment of reliability in atopic dermatitis. Exp Dermatol. 2001;10:11–18.','https://doi.org/10.1034/j.1600-0625.2001.100102.x'],
    ['Leshem YA, et al. What the EASI score tells us about the severity of atopic dermatitis. Br J Dermatol. 2015;172:1353–1357.','https://doi.org/10.1111/bjd.13662']
  ],
  scorad:[
    ['European Task Force on Atopic Dermatitis. Severity scoring of atopic dermatitis: the SCORAD index. Dermatology. 1993;186:23–31.','https://doi.org/10.1159/000247298'],
    ['Oranje AP, et al. Practical issues on interpretation of scoring atopic dermatitis. Br J Dermatol. 2007;157:645–648.','https://doi.org/10.1111/j.1365-2133.2007.08112.x'],
    ['Wollenberg A, et al. ETFAD/EADV position paper on diagnosis and treatment of atopic dermatitis. JEADV. 2020;34:2717–2744.','https://doi.org/10.1111/jdv.16892']
  ],
  scorten:[
    ['Bastuji-Garin S, et al. SCORTEN: a severity-of-illness score for toxic epidermal necrolysis. J Invest Dermatol. 2000;115:149–153.','https://doi.org/10.1046/j.1523-1747.2000.00061.x']
  ],
  uas7:[
    ['Zuberbier T, et al. EAACI/GA²LEN/EDF/WAO Guideline for urticaria: 2013 revision and update. Allergy. 2014;69:868–887.','https://doi.org/10.1111/all.12313'],
    ['Weller K, et al. Chronic urticaria: tools to aid diagnosis and assessment of disease status in daily practice. JEADV. 2015.','https://doi.org/10.1111/jdv.13200']
  ],
  ihs4:[
    ['Zouboulis CC, et al. Development and validation of the International Hidradenitis Suppurativa Severity Score System (IHS4). Br J Dermatol. 2017;177:1401–1409.','https://doi.org/10.1111/bjd.15748']
  ],
  paracelsus:[
    ['Jockenhöfer F, et al. The PARACELSUS score: a novel diagnostic tool for pyoderma gangrenosum. Br J Dermatol. 2019;180:615–620.','https://pubmed.ncbi.nlm.nih.gov/29388188/'],
    ['Moelleken M, et al. Validation of PARACELSUS score performance for the diagnosis of pyoderma gangrenosum: an international multicenter study with 1403 cases. J Am Acad Dermatol. 2026;94:1738–1746.','https://pubmed.ncbi.nlm.nih.gov/41785996/']
  ],
  napsi:[
    ['Rich P, Scher RK. Nail Psoriasis Severity Index: a useful tool for evaluation of nail psoriasis. J Am Acad Dermatol. 2003;49:206–212.','https://doi.org/10.1067/S0190-9622(03)00910-1']
  ],
  vasi:[
    ['Hamzavi I, et al. Parametric modeling of narrowband UV-B phototherapy for vitiligo using VASI. Arch Dermatol. 2004.','https://pubmed.ncbi.nlm.nih.gov/15162195/']
  ],
  clasi:[
    ['Albrecht J, et al. The CLASI: an outcome instrument for cutaneous lupus erythematosus. J Invest Dermatol. 2005;125:889–894.','https://doi.org/10.1111/j.0022-202X.2005.23889.x'],
    ['Klein R, et al. Cutaneous lupus and the CLASI instrument. Rheum Dis Clin North Am. 2010.','https://pmc.ncbi.nlm.nih.gov/articles/PMC3035848/']
  ],
  absis:[
    ['Pfutze M, et al. Clinical assessment of pemphigus vulgaris by ABSIS. J Dtsch Dermatol Ges. 2007;5:434–442.','https://pubmed.ncbi.nlm.nih.gov/17324820/']
  ],
  uct:[
    ['Weller K, et al. Development, validation, and initial results of the Urticaria Control Test. Allergy. 2014.','https://pubmed.ncbi.nlm.nih.gov/24522090/']
  ],
  poem:[
    ['Charman CR, et al. The Patient-Oriented Eczema Measure. Arch Dermatol. 2004;140:1513–1519.','https://pubmed.ncbi.nlm.nih.gov/15611429/'],
    ['Schram ME, et al. Severity stratification of POEM scores. J Am Acad Dermatol. 2012.','https://jamanetwork.com/journals/jamadermatology/fullarticle/480876']
  ],
  mmasi:[
    ['Pandya AG, et al. Reliability assessment and validation of the Melasma Area and Severity Index (MASI) and modified MASI (mMASI). J Am Acad Dermatol. 2011.','https://pubmed.ncbi.nlm.nih.gov/20398960/'],
    ['Pandya AG, et al. Interpretability of the modified MASI. JAMA Dermatol. 2016.','https://jamanetwork.com/journals/jamadermatology/fullarticle/2519450']
  ],
  gags:[
    ['Doshi A, et al. A comparison of current acne grading systems and proposal of a novel system. Int J Dermatol. 1997;36:416–418.','https://pubmed.ncbi.nlm.nih.gov/9248884/']
  ],
  lppai:[
    ['Chiang C, et al. Hydroxychloroquine and lichen planopilaris: efficacy and introduction of Lichen Planopilaris Activity Index scoring system. J Am Acad Dermatol. 2010;62:387–392.','https://pubmed.ncbi.nlm.nih.gov/20061052/'],
    ['Management of classic lichen planopilaris: EADV Task Force on Hair Diseases position statement.','https://pmc.ncbi.nlm.nih.gov/articles/PMC13425247/']
  ],
  mlossi:[
    ['Arkachaisri T, et al. The localized scleroderma skin severity index and physician global assessment of disease activity. Rheumatology (Oxford). 2009.','https://pubmed.ncbi.nlm.nih.gov/19833758/'],
    ['Kelsey CE, Torok KS. The Localized Scleroderma Cutaneous Assessment Tool: responsiveness to change in a pediatric clinical population. J Am Acad Dermatol. 2013;69:214–220.','https://pubmed.ncbi.nlm.nih.gov/23562760/'],
    ['Teske NM, Jacobe HT. Using the LoSCAT to classify morphoea by severity and identify clinically significant change. Br J Dermatol. 2020;182:398–404.','https://pubmed.ncbi.nlm.nih.gov/31049928/']
  ],
  loscat:[
    ['Kelsey CE, Torok KS. The Localized Scleroderma Cutaneous Assessment Tool: responsiveness to change in a pediatric clinical population. J Am Acad Dermatol. 2013;69:214–220.','https://pubmed.ncbi.nlm.nih.gov/23562760/'],
    ['Arkachaisri T, et al. Development and initial validation of the Localized Scleroderma Skin Damage Index and Physician Global Assessment of disease Damage. Rheumatology (Oxford). 2010.','https://pubmed.ncbi.nlm.nih.gov/20008472/'],
    ['Skrzypek-Salamon A, et al. LoSCAT adapted for use in adult patients: initial validation study. Health Qual Life Outcomes. 2018;16:185.','https://pubmed.ncbi.nlm.nih.gov/30217204/'],
    ['Teske NM, Jacobe HT. Using the LoSCAT to classify morphoea by severity and identify clinically significant change. Br J Dermatol. 2020;182:398–404.','https://pubmed.ncbi.nlm.nih.gov/31049928/']
  ],
  rasi:[
    ['Tan J, et al. Validation of the Rosacea Area and Severity Index (RASI). Br J Dermatol. 2023.','https://pubmed.ncbi.nlm.nih.gov/36331365/']
  ]
};

  const toolGroups = [
    {id:'inflammatory', label:'İnflamatuvar dermatozlar', ids:['pasi','easi','scorad','poem','uas7','uct']},
    {id:'bullous', label:'Otoimmün büllöz hastalıklar', ids:['pdai','bpdai','absis']},
    {id:'connective', label:'Kutanöz otoimmün / sklerozan', ids:['clasi','mlossi','loscat']},
    {id:'hair-nail', label:'Saç ve tırnak', ids:['salt','lppai','napsi']},
    {id:'pigment', label:'Pigmentasyon bozuklukları', ids:['vasi','mmasi']},
    {id:'acne-hs', label:'Akne, rozasea ve HS', ids:['gags','rasi','ihs4']},
    {id:'special', label:'Ülseratif / ağır tablolar', ids:['paracelsus','scorten']}
  ];

  const host = document.getElementById('calculatorHost');
  const scoreNav = document.getElementById('scoreNav');
  const toolCards = document.getElementById('toolCards');

  function localizedTools(){
    return tools.map(t=>{
      const meta=I && I.getToolMeta ? I.getToolMeta(t.id) : null;
      return {...t,disease:meta?.[0]||t.disease,desc:meta?.[1]||t.desc};
    });
  }
  function groupedTools(){
    const all=localizedTools();
    const byId=new Map(all.map(t=>[t.id,t]));
    return toolGroups.map(g=>({...g,tools:g.ids.map(id=>byId.get(id)).filter(Boolean)}));
  }
  function renderNav(){
    scoreNav.innerHTML = groupedTools().map(g=>`<section class="nav-group" data-group="${g.id}"><div class="nav-group-title">${tr(g.label)}</div><div class="nav-group-items">${g.tools.map(t=>`<a href="#${t.id}" data-id="${t.id}"><span class="nav-code">${t.code}</span><span class="nav-label">${t.disease}</span></a>`).join('')}</div></section>`).join('');
  }
  function renderCards(){
    toolCards.innerHTML = groupedTools().map(g=>`<section class="tool-group" data-group="${g.id}"><div class="tool-group-heading"><span>${tr(g.label)}</span><b>${g.tools.length}</b></div><div class="tool-grid">${g.tools.map(t=>`<a class="tool-card" href="#${t.id}" data-search="${(t.code+' '+t.title+' '+t.disease+' '+t.desc+' '+tr(g.label)).toLowerCase()}"><div><div class="code">${t.code}</div><h3>${t.disease}</h3><p>${t.desc}</p></div><span class="arrow">→</span></a>`).join('')}</div></section>`).join('');
  }

  const tr = (value) => I && I.translateText ? I.translateText(value) : String(value ?? '');
  const severityChip = (s) => `<span class="result-chip tone-${s.tone || 'neutral'}">${tr(s.label)}</span>`;
  const num = (id) => Number((document.getElementById(id)||{}).value || 0);
  const val = (id) => (document.getElementById(id)||{}).value;
  const checked = (id) => Boolean((document.getElementById(id)||{}).checked);
  const setText = (id, text) => { const el=document.getElementById(id); if(el) el.textContent=tr(text); };
  const setHTML = (id, html) => { const el=document.getElementById(id); if(el) el.innerHTML=html; };
  function sourceBlock(id, note=''){
    return `<div class="source-card"><h2>${tr('Kaynakça')}</h2><ol class="source-list">${refs[id].map(([label,url])=>`<li>${label} <a href="${url}" target="_blank" rel="noopener noreferrer">${tr('Kaynağı aç ↗')}</a></li>`).join('')}</ol>${note?`<p class="source-note">${tr(note)}</p>`:''}</div>`;
  }
  function head(t, intro){return `<div class="calc-head"><div><a class="back-link" href="#home">${tr('← Tüm araçlar')}</a><div class="calc-kicker"><span class="calc-code">${t.code}</span><span class="calc-disease">${t.disease}</span></div><h1>${t.title}</h1><p>${tr(intro)}</p></div></div>`;}
  function resetButton(){return `<div class="reset-row"><button class="reset-btn" type="button" data-reset>${tr('Değerleri sıfırla')}</button></div>`;}
  function intSelect(id,max,labels){
    let opts='';for(let i=0;i<=max;i++) opts+=`<option value="${i}">${labels?.[i] || i}</option>`;
    return `<select id="${id}">${opts}</select>`;
  }
  function activitySelect(id, options){return `<select id="${id}" class="compact-select">${options.map(o=>`<option value="${o[0]}">${o[1]}</option>`).join('')}</select>`;}
  function bindLive(calc){host.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',calc));host.querySelectorAll('[data-reset]').forEach(b=>b.addEventListener('click',()=>{host.querySelectorAll('input').forEach(i=>{if(i.type==='checkbox')i.checked=i.defaultChecked;else if(i.type==='range'||i.type==='number')i.value=i.defaultValue;});host.querySelectorAll('select').forEach(s=>s.selectedIndex=0);calc();}));calc();}

  function renderPasi(t){
    const regions=[['head','Baş / boyun','0.1'],['arms','Üst ekstremiteler','0.2'],['trunk','Gövde','0.3'],['legs','Alt ekstremiteler','0.4']];
    const regionControls=regions.map(([id,name,w])=>`<section class="pasi-region-card" id="pasi-card-${id}" data-pasi-card="${id}"><div class="subsection-head"><div><strong>${name}</strong><span class="pasi-region-weight">PASI ağırlığı ${w}</span></div><span class="pasi-area-badge" id="pasi-badge-${id}">%0</span></div><div class="form-grid cols-4"><div class="field"><span>Eritem</span>${intSelect(`pasi-${id}-e`,4)}</div><div class="field"><span>İndürasyon</span>${intSelect(`pasi-${id}-i`,4)}</div><div class="field"><span>Skuam</span>${intSelect(`pasi-${id}-s`,4)}</div><div class="field"><span>Tutulan alan (%)</span><input id="pasi-${id}-a" type="number" min="0" max="100" step="1" value="0"><small>0→0; 1–9→1; 10–29→2; 30–49→3; 50–69→4; 70–89→5; 90–100→6</small></div></div></section>`).join('');
    const bodyMap=`<div class="pasi-anatomy medmap-panel" aria-label="PASI anatomik bölge seçici"><div class="pasi-anatomy-head medmap-head"><div><span class="eyebrow">Anatomik harita</span><strong>PASI bölgeleri</strong></div><span class="pasi-map-hint">Bölgeye tıklayın</span></div><div class="pasi-body-stage medmap-stage"><svg class="pasi-body-svg med-body-svg" viewBox="0 0 340 500" role="img" aria-labelledby="pasiBodyTitle pasiBodyDesc"><title id="pasiBodyTitle">PASI vücut bölgesi haritası</title><desc id="pasiBodyDesc">Baş ve boyun, üst ekstremiteler, gövde ve alt ekstremiteler tıklanabilir medikal anatomi bölgeleri olarak gösterilir.</desc><defs><linearGradient id="skinGradPasi" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#f7eadf"/><stop offset="100%" stop-color="#efd8c7"/></linearGradient></defs><g class="body-outline front"><circle cx="170" cy="46" r="30" class="body-base"/><path d="M152 73h36v26q0 10-18 10t-18-10z" class="body-base"/><path d="M125 96q45-18 90 0l-10 149q-35 12-70 0z" class="body-base"/><path d="M126 108l-18 15-23 87 13 6 31-66z" class="body-base"/><path d="M214 108l18 15 23 87-13 6-31-66z" class="body-base"/><path d="M88 210l-9 86 16 2 12-79z" class="body-base"/><path d="M252 210l9 86-16 2-12-79z" class="body-base"/><ellipse cx="87" cy="311" rx="11" ry="14" class="body-base"/><ellipse cx="253" cy="311" rx="11" ry="14" class="body-base"/><path d="M142 243l27 7-7 107h-32z" class="body-base"/><path d="M171 250l27-7 12 114h-32z" class="body-base"/><path d="M130 356h32l-6 102h-28z" class="body-base"/><path d="M178 356h32l2 102h-28z" class="body-base"/><path d="M127 454h29l-3 18h-34q0-10 8-18z" class="body-base"/><path d="M180 454h34q8 8 8 18h-34z" class="body-base"/></g><g class="pasi-body-region region-head" data-pasi-region="head" role="button" tabindex="0" aria-label="Baş ve boyun, ağırlık 0.1"><circle class="pasi-region-shape med-region" cx="170" cy="46" r="30"/><path class="pasi-region-shape med-region" d="M152 73h36v26q0 10-18 10t-18-10z"/></g><g class="pasi-body-region region-trunk" data-pasi-region="trunk" role="button" tabindex="0" aria-label="Gövde, ağırlık 0.3"><path class="pasi-region-shape med-region" d="M125 96q45-18 90 0l-10 149q-35 12-70 0z"/></g><g class="pasi-body-region region-arms" data-pasi-region="arms" role="button" tabindex="0" aria-label="Üst ekstremiteler, ağırlık 0.2"><path class="pasi-region-shape med-region" d="M126 108l-18 15-23 87 13 6 31-66z"/><path class="pasi-region-shape med-region" d="M214 108l18 15 23 87-13 6-31-66z"/><path class="pasi-region-shape med-region" d="M88 210l-9 86 16 2 12-79z"/><path class="pasi-region-shape med-region" d="M252 210l9 86-16 2-12-79z"/><ellipse class="pasi-region-shape med-region" cx="87" cy="311" rx="11" ry="14"/><ellipse class="pasi-region-shape med-region" cx="253" cy="311" rx="11" ry="14"/></g><g class="pasi-body-region region-legs" data-pasi-region="legs" role="button" tabindex="0" aria-label="Alt ekstremiteler, ağırlık 0.4"><path class="pasi-region-shape med-region" d="M142 243l27 7-7 107h-32z"/><path class="pasi-region-shape med-region" d="M171 250l27-7 12 114h-32z"/><path class="pasi-region-shape med-region" d="M130 356h32l-6 102h-28z"/><path class="pasi-region-shape med-region" d="M178 356h32l2 102h-28z"/><path class="pasi-region-shape med-region" d="M127 454h29l-3 18h-34q0-10 8-18z"/><path class="pasi-region-shape med-region" d="M180 454h34q8 8 8 18h-34z"/></g></svg><div class="pasi-map-label label-head" data-pasi-jump="head"><strong>Baş / boyun</strong><span>×0.1 · <b id="pasi-map-head">%0</b></span></div><div class="pasi-map-label label-arms" data-pasi-jump="arms"><strong>Üst ekstremiteler</strong><span>×0.2 · <b id="pasi-map-arms">%0</b></span></div><div class="pasi-map-label label-trunk" data-pasi-jump="trunk"><strong>Gövde</strong><span>×0.3 · <b id="pasi-map-trunk">%0</b></span></div><div class="pasi-map-label label-legs" data-pasi-jump="legs"><strong>Alt ekstremiteler</strong><span>×0.4 · <b id="pasi-map-legs">%0</b></span></div></div><div class="pasi-map-note medmap-note">Renk yoğunluğu, ilgili bölgedeki tutulan alan yüzdesini yaklaşık yansıtır; hesaplama yine yayınlanmış PASI alan eşiklerine göre otomatik yapılır.</div></div>`;
    host.innerHTML=head(t,'Dört anatomik bölgede eritem, indürasyon ve skuam (0–4) ile tutulan alan yüzdesini kullanır. Medikal vücut haritasından bir bölge seçerek giriş alanına hızla geçebilirsiniz; bölgesel alan puanı otomatik olarak 0–6’ya dönüştürülür.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">PASI = Σ (E + I + S) × alan puanı × bölge ağırlığı</div><div class="pasi-workspace">${bodyMap}<div class="pasi-region-stack">${regionControls}</div></div>${resetButton()}</div><aside class="result-card"><div class="result-label">PASI</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Aralık</span><strong>0–72</strong></div><div><span>Sınıflama kaynağı</span><strong>Schmitt & Wozel 2005</strong></div></div><div class="notice info">PASI tek başına tedavi uygunluğunu belirlemez; BSA, yaşam kalitesi ve özel bölge tutulumu klinik kararı değiştirebilir.</div></aside></div>${sourceBlock('pasi')}`;

    let activeRegion='head';
    function activateRegion(id,scroll=false){
      activeRegion=id;
      host.querySelectorAll('[data-pasi-region]').forEach(el=>el.classList.toggle('active',el.dataset.pasiRegion===id));
      host.querySelectorAll('[data-pasi-card]').forEach(el=>el.classList.toggle('active',el.dataset.pasiCard===id));
      host.querySelectorAll('[data-pasi-jump]').forEach(el=>el.classList.toggle('active',el.dataset.pasiJump===id));
      if(scroll){
        const card=document.getElementById(`pasi-card-${id}`);
        if(card) card.scrollIntoView({behavior:'smooth',block:'center'});
      }
    }
    host.querySelectorAll('[data-pasi-region]').forEach(el=>{
      el.addEventListener('click',()=>activateRegion(el.dataset.pasiRegion,true));
      el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activateRegion(el.dataset.pasiRegion,true);}});
    });
    host.querySelectorAll('[data-pasi-jump]').forEach(el=>el.addEventListener('click',()=>activateRegion(el.dataset.pasiJump,true)));
    regions.forEach(([id])=>document.getElementById(`pasi-card-${id}`).querySelectorAll('input,select').forEach(el=>el.addEventListener('focus',()=>activateRegion(id,false))));
    activateRegion(activeRegion,false);

    bindLive(()=>{
      const data={};
      regions.forEach(([id])=>{
        const area=Math.max(0,Math.min(100,num(`pasi-${id}-a`)));
        data[id]={erythema:num(`pasi-${id}-e`),induration:num(`pasi-${id}-i`),scaling:num(`pasi-${id}-s`),area};
        setText(`pasi-badge-${id}`,`%${area}`);
        setText(`pasi-map-${id}`,`%${area}`);
        const mapRegion=host.querySelector(`[data-pasi-region="${id}"]`);
        if(mapRegion){
          const level=area===0?0:area<10?1:area<30?2:area<50?3:area<70?4:area<90?5:6;
          mapRegion.dataset.areaLevel=String(level);
        }
      });
      const sc=S.pasi(data);
      setText('resultScore',sc.toFixed(1));
      setHTML('resultSeverity',severityChip(S.pasiSeverity(sc)));
    });
  }



function renderSalt(t){
  const parts=[['top','Üst / vertex',40],['back','Arka / oksipital',24],['left','Sol lateral',18],['right','Sağ lateral',18]];
  const map=`<div class="salt-map"><div class="salt-map-head"><div><span class="eyebrow">Saçlı deri haritası</span><strong>Bölge seçin</strong></div><span class="salt-map-hint">Haritaya tıklayın</span></div><div class="salt-map-stage"><svg class="salt-scalp-svg" viewBox="0 0 260 250" aria-label="SALT saçlı deri haritası"><ellipse cx="130" cy="120" rx="82" ry="96" class="salt-outline"/><path data-salt-region="top" class="salt-region-shape" d="M130 35 C162 35 187 54 199 84 C187 93 170 99 152 102 C144 84 138 71 130 55 C122 71 116 84 108 102 C90 99 73 93 61 84 C73 54 98 35 130 35 Z"/><path data-salt-region="back" class="salt-region-shape" d="M61 84 C73 93 90 99 108 102 C108 131 111 162 130 197 C149 162 152 131 152 102 C170 99 187 93 199 84 C208 98 212 113 212 129 C212 173 176 210 130 210 C84 210 48 173 48 129 C48 113 52 98 61 84 Z"/>
    <path data-salt-region="left" class="salt-region-shape" d="M48 129 C48 95 68 67 98 51 C100 66 103 83 108 102 C91 106 78 113 68 124 C72 148 84 165 101 182 C91 182 76 176 65 166 C54 155 48 143 48 129 Z"/>
    <path data-salt-region="right" class="salt-region-shape" d="M212 129 C212 95 192 67 162 51 C160 66 157 83 152 102 C169 106 182 113 192 124 C188 148 176 165 159 182 C169 182 184 176 195 166 C206 155 212 143 212 129 Z"/>
    <text x="130" y="76" text-anchor="middle" class="salt-svg-label">Üst</text><text x="130" y="178" text-anchor="middle" class="salt-svg-label">Arka</text><text x="82" y="144" text-anchor="middle" class="salt-svg-label">Sol</text><text x="178" y="144" text-anchor="middle" class="salt-svg-label">Sağ</text></svg></div></div>`;
  host.innerHTML=head(t,'SALT; üst/vertex, arka/oksipital, sol lateral ve sağ lateral saçlı deri alanlarının saç kaybı yüzdelerini ağırlıklandırır. Haritadan bölge seçerek veri girebilirsiniz.')+
  `<div class="calc-layout"><div class="calc-card"><div class="formula">SALT = üst×0.40 + arka×0.24 + sol×0.18 + sağ×0.18</div><div class="salt-workspace">${map}<div class="salt-region-stack">${parts.map(([id,name,w])=>`<div class="salt-region-card" data-salt-card="${id}"><div class="subsection-head"><div><strong>${name}</strong><span class="pasi-region-weight">saçlı derinin %${w}'ı</span></div><span class="pasi-area-badge" id="salt-badge-${id}">%0</span></div><div class="field"><span>Bu bölgede terminal saç kaybı (%)</span><div class="range-row"><input id="salt-${id}" type="range" min="0" max="100" value="0"><input id="salt-${id}-n" type="number" min="0" max="100" value="0"></div></div></div>`).join('')}</div></div>${resetButton()}</div><aside class="result-card"><div class="result-label">SALT</div><div id="resultScore" class="result-value">0%</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Aralık</span><strong>0–100%</strong></div><div><span>SALT sınıfı</span><strong>S0–S5</strong></div></div><div class="notice info">Sınıf gösterimi klinik pratikte sık kullanılan SALT aralıklarını verir. Haritadaki renk yoğunluğu ilgili bölgedeki saç kaybı yüzdesi arttıkça koyulaşır.</div></aside></div>${sourceBlock('salt')}`;
  function focusRegion(region){
    host.querySelectorAll('[data-salt-card]').forEach(el=>el.classList.toggle('active',el.dataset.saltCard===region));
    host.querySelectorAll('[data-salt-region]').forEach(el=>el.classList.toggle('active',el.dataset.saltRegion===region));
    const card=host.querySelector(`[data-salt-card="${region}"]`); if(card) card.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  parts.forEach(([id])=>{
    const r=document.getElementById(`salt-${id}`),n=document.getElementById(`salt-${id}-n`);
    r.addEventListener('input',()=>{n.value=r.value;n.dispatchEvent(new Event('input'));});
    n.addEventListener('input',()=>{r.value=n.value;calc();});
    [r,n].forEach(el=>el.addEventListener('focus',()=>focusRegion(id)));
    const card=host.querySelector(`[data-salt-card="${id}"]`); if(card) card.addEventListener('click',()=>focusRegion(id));
    const region=host.querySelector(`[data-salt-region="${id}"]`); if(region){ region.setAttribute('tabindex','0'); region.addEventListener('click',()=>focusRegion(id)); region.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();focusRegion(id);}}); }
  });
  function calc(){
    const vals={top:num('salt-top-n'),back:num('salt-back-n'),left:num('salt-left-n'),right:num('salt-right-n')};
    const sc=S.salt(vals);
    setText('resultScore',sc.toFixed(1)+'%');
    setHTML('resultSeverity',severityChip(S.saltSeverity(sc)));
    parts.forEach(([id])=>{
      const v=clampLocal(vals[id]);
      setText(`salt-badge-${id}`,'%'+v);
      const region=host.querySelector(`[data-salt-region="${id}"]`); if(region) region.dataset.areaLevel=Math.min(6, Math.ceil(v/17))||0;
    });
  }
  function clampLocal(v){ v=Number(v)||0; return Math.max(0,Math.min(100,Math.round(v))); }
  bindLive(calc);focusRegion('top');
}


  const pdaiSkin=['Kulaklar','Burun','Yüzün geri kalanı','Boyun','Göğüs','Abdomen','Sırt / kalçalar','Kollar','Eller','Bacaklar','Ayaklar','Genitaller'];
  const mucosa=['Gözler','Burun','Bukkal mukoza','Sert damak','Yumuşak damak','Üst gingiva','Alt gingiva','Dil','Ağız tabanı','Labial mukoza','Posterior farinks','Anogenital'];
  const pdaiActOpts=[[0,'0 · Yok'],[1,'1 · 1–3 lezyon; en fazla biri >2 cm, hiçbiri >6 cm'],[2,'2 · 2–3 lezyon; en az ikisi >2 cm, hiçbiri >6 cm'],[3,'3 · >3 lezyon; hiçbiri >6 cm'],[5,'5 · >3 lezyon ve/veya ≥1 lezyon >6 cm'],[10,'10 · >3 lezyon ve/veya ≥1 lezyon >16 cm / tüm alan']];
  const mucOpts=[[0,'0 · Yok'],[1,'1 · 1 lezyon'],[2,'2 · 2–3 lezyon'],[5,'5 · >3 lezyon veya 2 lezyon >2 cm'],[10,'10 · Tüm alan']];
  function renderPdai(t){
    host.innerHTML=head(t,'PDAI aktivite skoru cilt (0–120), saçlı deri (0–10) ve mukoza (0–120) toplamıdır. Hasar, aktif skordan ayrı raporlanır.')+`<div class="calc-layout"><div class="calc-card"><div class="notice info">Aşağıdaki seçenekler SFD PDAI formundaki kategori tanımlarını izler; kategori seçildiğinde alt skor otomatik toplanır.</div><div class="form-title">Cilt aktivitesi ve hasar</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Aktivite</th><th>Hasar</th></tr></thead><tbody>${pdaiSkin.map((n,i)=>`<tr><td>${n}</td><td>${activitySelect(`pdai-sa-${i}`,pdaiActOpts)}</td><td><select id="pdai-sd-${i}"><option value="0">0 · Yok</option><option value="1">1 · Postinflamatuvar hiperpigmentasyon / iyileşen lezyon eritemi var</option></select></td></tr>`).join('')}</tbody></table></div><div class="subsection"><div class="subsection-head"><strong>Saçlı deri</strong></div><div class="form-grid"><div class="field"><span>Aktivite</span>${activitySelect('pdai-scalp',[[0,'0 · Yok'],[1,'1 · Bir kadran'],[2,'2 · İki kadran'],[3,'3 · Üç kadran'],[4,'4 · Tüm saçlı deri'],[10,'10 · ≥1 lezyon >6 cm']])}</div><div class="field"><span>Hasar</span><select id="pdai-scalpd"><option value="0">0 · Yok</option><option value="1">1 · Var</option></select></div></div></div><div class="form-title">Mukoza aktivitesi</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Aktivite</th></tr></thead><tbody>${mucosa.map((n,i)=>`<tr><td>${n}</td><td>${activitySelect(`pdai-ma-${i}`,mucOpts)}</td></tr>`).join('')}</tbody></table></div>${resetButton()}</div><aside class="result-card"><div class="result-label">PDAI aktivite</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Cilt</span><strong id="pdaiSkinSub">0 / 120</strong></div><div><span>Saçlı deri</span><strong id="pdaiScalpSub">0 / 10</strong></div><div><span>Mukoza</span><strong id="pdaiMucSub">0 / 120</strong></div><div><span>Hasar</span><strong id="pdaiDamage">0 / 13</strong></div></div><div class="notice warn">PDAI için farklı eşik çalışmaları vardır. Bu sonuçta hafif 0–8, orta 9–24, şiddetli ≥25 (Shimizu 2014) gösterilir; uluslararası panel bu eşiklerin evrensel olarak kesinleşmediğini belirtmiştir.</div></aside></div>${sourceBlock('pdai','Boulard ve ark. (2016) alternatif olarak PDAI 15 ve 45 kesimlerini önermiştir. Arayüz tek bir eşik sistemini gizlememek için bu farkı açıkça belirtir.')}`;
    bindLive(()=>{const d={skinActivity:pdaiSkin.map((_,i)=>num(`pdai-sa-${i}`)),skinDamage:pdaiSkin.map((_,i)=>num(`pdai-sd-${i}`)),scalpActivity:num('pdai-scalp'),scalpDamage:num('pdai-scalpd'),mucosaActivity:mucosa.map((_,i)=>num(`pdai-ma-${i}`))};const r=S.pdai(d);setText('resultScore',r.activity);setHTML('resultSeverity',severityChip(S.pdaiSeverity(r.activity)));setText('pdaiSkinSub',`${r.skin} / 120`);setText('pdaiScalpSub',`${r.scalp} / 10`);setText('pdaiMucSub',`${r.mucosa} / 120`);setText('pdaiDamage',`${r.damage} / 13`);});
  }

  const bpSkin=['Baş','Boyun','Göğüs','Sol kol','Sağ kol','Eller','Abdomen','Genitaller','Sırt / kalçalar','Sol bacak','Sağ bacak','Ayaklar'];
  const bpBlOpts=[[0,'0 · Yok'],[1,'1 · 1–3; hiçbiri >1 cm'],[2,'2 · 1–3; en az biri >1 cm'],[3,'3 · >3; hiçbiri >2 cm'],[5,'5 · >3 ve en az biri >2 cm'],[10,'10 · >3 ve en az biri >5 cm / tüm alan']];
  const bpUrtOpts=[[0,'0 · Yok'],[1,'1 · 1–3; hiçbiri >6 cm'],[2,'2 · 1–3; en az biri >6 cm'],[3,'3 · >3 veya en az biri >10 cm'],[5,'5 · >3 ve en az biri >25 cm'],[10,'10 · >3 ve en az biri >50 cm / tüm alan']];
  function renderBpdai(t){
    host.innerHTML=head(t,'BPDAI aktivitesi; ciltte erozyon/bül (0–120), ürtiker/eritem (0–120) ve mukozal erozyon/bül (0–120) toplamından oluşur.')+`<div class="calc-layout"><div class="calc-card"><div class="form-title">Cilt</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Erozyon / bül</th><th>Ürtiker / eritem</th><th>Hasar</th></tr></thead><tbody>${bpSkin.map((n,i)=>`<tr><td>${n}</td><td>${activitySelect(`bp-b-${i}`,bpBlOpts)}</td><td>${activitySelect(`bp-u-${i}`,bpUrtOpts)}</td><td><select id="bp-d-${i}"><option value="0">0 · Yok</option><option value="1">1 · Pigmentasyon / diğer hasar var</option></select></td></tr>`).join('')}</tbody></table></div><div class="form-title" style="margin-top:20px">Mukoza</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Erozyon / bül</th></tr></thead><tbody>${mucosa.map((n,i)=>`<tr><td>${n}</td><td>${activitySelect(`bp-m-${i}`,mucOpts)}</td></tr>`).join('')}</tbody></table></div>${resetButton()}</div><aside class="result-card"><div class="result-label">BPDAI aktivite</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Erozyon / bül</span><strong id="bpBl">0 / 120</strong></div><div><span>Ürtiker / eritem</span><strong id="bpUrt">0 / 120</strong></div><div><span>Mukoza</span><strong id="bpMuc">0 / 120</strong></div><div><span>Hasar</span><strong id="bpDam">0 / 12</strong></div></div><div class="notice info">Doğrulanmış aktivite eşikleri: ≤19 hafif, 20–56 orta, ≥57 şiddetli.</div></aside></div>${sourceBlock('bpdai')}`;
    bindLive(()=>{const r=S.bpdai({blister:bpSkin.map((_,i)=>num(`bp-b-${i}`)),urticaria:bpSkin.map((_,i)=>num(`bp-u-${i}`)),damage:bpSkin.map((_,i)=>num(`bp-d-${i}`)),mucosa:mucosa.map((_,i)=>num(`bp-m-${i}`))});setText('resultScore',r.activity);setHTML('resultSeverity',severityChip(S.bpdaiSeverity(r.activity)));setText('bpBl',`${r.blister} / 120`);setText('bpUrt',`${r.urticaria} / 120`);setText('bpMuc',`${r.mucosa} / 120`);setText('bpDam',`${r.damage} / 12`);});
  }

  function renderEasi(t){
    const regions=[['head','Baş / boyun'],['arms','Üst ekstremiteler'],['trunk','Gövde'],['legs','Alt ekstremiteler']];
    host.innerHTML=head(t,'Her bölge için eritem, ödem/papülasyon, ekskoriasyon ve likenifikasyon 0–3 puanlanır; tutulan alan yüzdesi otomatik 0–6 alan skoruna dönüştürülür.')+`<div class="calc-layout"><div class="calc-card"><div class="field" style="max-width:320px;margin-bottom:16px"><span>Yaş grubu / bölgesel ağırlık</span><select id="easi-age"><option value="adult">≥8 yaş</option><option value="child">0–7 yaş</option></select></div><div class="formula">Bölge skoru = (E + Ö/P + Eks + L) × alan puanı × bölge ağırlığı</div>${regions.map(([id,name])=>`<div class="subsection"><div class="subsection-head"><strong>${name}</strong><span class="eyebrow" id="easi-weight-${id}"></span></div><div class="form-grid cols-4"><div class="field"><span>Eritem</span>${intSelect(`easi-${id}-e`,3)}</div><div class="field"><span>Ödem / papülasyon</span>${intSelect(`easi-${id}-o`,3)}</div><div class="field"><span>Ekskoriasyon</span>${intSelect(`easi-${id}-x`,3)}</div><div class="field"><span>Likenifikasyon</span>${intSelect(`easi-${id}-l`,3)}</div></div><div class="field" style="margin-top:10px"><span>Tutulan alan (%)</span><input id="easi-${id}-a" type="number" min="0" max="100" value="0"></div></div>`).join('')}${resetButton()}</div><aside class="result-card"><div class="result-label">EASI</div><div id="resultScore" class="result-value">0.0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Aralık</span><strong>0–72</strong></div><div><span>Şiddet bantları</span><strong>Leshem 2015</strong></div></div></aside></div>${sourceBlock('easi')}`;
    bindLive(()=>{const ped=val('easi-age')==='child';const data={};regions.forEach(([id])=>data[id]={erythema:num(`easi-${id}-e`),edema:num(`easi-${id}-o`),excoriation:num(`easi-${id}-x`),lichenification:num(`easi-${id}-l`),area:num(`easi-${id}-a`)});const sc=S.easi(data,ped);setText('resultScore',sc.toFixed(1));setHTML('resultSeverity',severityChip(S.easiSeverity(sc)));const w=ped?{head:.2,arms:.2,trunk:.3,legs:.3}:{head:.1,arms:.2,trunk:.3,legs:.4};Object.keys(w).forEach(k=>setText(`easi-weight-${k}`,`ağırlık ${w[k]}`));});
  }

  function renderScorad(t){
    const signs=[['erythema','Eritem'],['edema','Ödem / papülasyon'],['oozing','Sızıntı / krut'],['excoriation','Ekskoriasyon'],['lichenification','Likenifikasyon'],['dryness','Kuruluk']];
    host.innerHTML=head(t,'SCORAD; yaygınlık (A), altı objektif yoğunluk bulgusu (B) ve iki subjektif semptomu (C) birleştirir.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">SCORAD = A/5 + 7B/2 + C</div><div class="subsection"><div class="subsection-head"><strong>A · Yaygınlık</strong><span class="eyebrow">0–100</span></div><div class="field"><span>Etkilenen vücut yüzey alanı (%)</span><input id="sc-extent" type="number" min="0" max="100" value="0"></div></div><div class="subsection"><div class="subsection-head"><strong>B · Yoğunluk</strong><span class="eyebrow">toplam 0–18</span></div><div class="form-grid">${signs.map(([id,n])=>`<div class="field"><span>${n}</span>${intSelect(`sc-${id}`,3)}</div>`).join('')}</div></div><div class="subsection"><div class="subsection-head"><strong>C · Subjektif semptomlar</strong><span class="eyebrow">son 3 gün</span></div><div class="form-grid"><div class="field"><span>Kaşıntı (0–10)</span><input id="sc-pruritus" type="number" min="0" max="10" value="0"></div><div class="field"><span>Uyku kaybı (0–10)</span><input id="sc-sleep" type="number" min="0" max="10" value="0"></div></div></div>${resetButton()}</div><aside class="result-card"><div class="result-label">SCORAD</div><div id="resultScore" class="result-value">0.0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>A</span><strong id="scA">0</strong></div><div><span>B</span><strong id="scB">0</strong></div><div><span>C</span><strong id="scC">0</strong></div><div><span>Maksimum</span><strong>103</strong></div></div></aside></div>${sourceBlock('scorad')}`;
    bindLive(()=>{const r=S.scorad({extent:num('sc-extent'),erythema:num('sc-erythema'),edema:num('sc-edema'),oozing:num('sc-oozing'),excoriation:num('sc-excoriation'),lichenification:num('sc-lichenification'),dryness:num('sc-dryness'),pruritus:num('sc-pruritus'),sleep:num('sc-sleep')});setText('resultScore',r.score.toFixed(1));setHTML('resultSeverity',severityChip(S.scoradSeverity(r.score)));setText('scA',r.A);setText('scB',r.B);setText('scC',r.C);});
  }

  function renderScorten(t){
    host.innerHTML=head(t,'SCORTEN, toksik epidermal nekroliz için geliştirilen 7 değişkenli prognostik mortalite skorudur. İlk 24 saatte değerlendirilmesi önerilir.')+`<div class="calc-layout"><div class="calc-card"><div class="notice danger"><strong>SJS/TEN tıbbi acildir.</strong> Bu hesaplayıcı acil değerlendirme, yoğun bakım / yanık ünitesi yaklaşımı veya uzman konsültasyonunun yerine geçmez.</div><div class="form-grid"><div class="field"><span>Yaş</span><input id="st-age" type="number" min="0" max="120" value="0"><small>Orijinal kriter: &gt;40 yıl</small></div><label class="checkbox"><input id="st-malignancy" type="checkbox"> Eşlik eden malignite</label><div class="field"><span>Kalp hızı (/dk)</span><input id="st-hr" type="number" min="0" max="300" value="0"><small>Risk: &gt;120/dk</small></div><div class="field"><span>Epidermal ayrışma (%)</span><input id="st-bsa" type="number" min="0" max="100" value="0"><small>Risk: &gt;%10</small></div><div class="field"><span>Serum üre / BUN</span><div class="range-row unit-row"><input id="st-urea" type="number" min="0" step="0.1" value="0"><select id="st-urea-unit"><option value="mmol">Üre mmol/L</option><option value="bunmgdl">BUN mg/dL</option><option value="ureamgdl">Üre mg/dL</option></select></div><small>Risk: üre &gt;10 mmol/L ≈ BUN &gt;28 mg/dL ≈ üre &gt;60 mg/dL</small></div><div class="field"><span>Serum glukoz</span><div class="range-row unit-row"><input id="st-glucose" type="number" min="0" step="0.1" value="0"><select id="st-glucose-unit"><option value="mmol">mmol/L</option><option value="mgdl">mg/dL</option></select></div><small>Risk: &gt;14 mmol/L (~252 mg/dL)</small></div><div class="field"><span>Serum bikarbonat (mmol/L)</span><input id="st-bicarb" type="number" min="0" max="60" step="0.1" value="24"><small>Risk: &lt;20 mmol/L</small></div></div>${resetButton()}</div><aside class="result-card"><div class="result-label">SCORTEN</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Orijinal çalışmada tahmini mortalite</span><strong id="stMort">3.2%</strong></div><div><span>Pozitif kriter</span><strong id="stFactors">0 / 7</strong></div></div><div id="stFactorList" class="notice info">Pozitif kriter yok.</div><div class="notice warn">Mortalite yüzdeleri 2000’de yayımlanan geliştirme/validasyon kohortuna aittir; güncel merkez sonuçlarını birebir temsil etmeyebilir.</div></aside></div>${sourceBlock('scorten')}`;
    bindLive(()=>{const r=S.scorten({age:num('st-age'),malignancy:checked('st-malignancy'),heartRate:num('st-hr'),detachment:num('st-bsa'),urea:num('st-urea'),ureaUnit:val('st-urea-unit'),glucose:num('st-glucose'),glucoseUnit:val('st-glucose-unit'),bicarbonate:num('st-bicarb')});setText('resultScore',r.score);const tone=r.score<=1?'moderate':r.score===2?'high':'critical';setHTML('resultSeverity',severityChip({label:`Tahmini mortalite %${r.mortality}`,tone}));setText('stMort',`%${r.mortality}`);setText('stFactors',`${r.score} / 7`);setText('stFactorList',r.factors.length?`Pozitif: ${r.factors.join(' · ')}`:'Pozitif kriter yok.');});
  }

  function renderUas7(t){
    const wh=[[0,'0 · Kabarıklık yok'],[1,'1 · <20 / 24 sa'],[2,'2 · 20–50 / 24 sa'],[3,'3 · >50 / 24 sa veya geniş birleşik alanlar']];
    const it=[[0,'0 · Kaşıntı yok'],[1,'1 · Hafif'],[2,'2 · Orta; rahatsız edici, aktivite/uykuyu bozmaz'],[3,'3 · Şiddetli; aktivite veya uykuyu etkiler']];
    host.innerHTML=head(t,'UAS7, yedi ardışık gün boyunca günlük kabarıklık (0–3) ve kaşıntı (0–3) puanlarının toplamıdır.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">UAS7 = Σ 7 gün [kabarıklık (0–3) + kaşıntı (0–3)]</div><div class="table-wrap"><table><thead><tr><th>Gün</th><th>Kabarıklık</th><th>Kaşıntı</th><th>Günlük</th></tr></thead><tbody>${Array.from({length:7},(_,i)=>`<tr><td>${i+1}. gün</td><td>${activitySelect(`uas-w-${i}`,wh)}</td><td>${activitySelect(`uas-i-${i}`,it)}</td><td><strong id="uas-day-${i}">0</strong></td></tr>`).join('')}</tbody></table></div>${resetButton()}</div><aside class="result-card"><div class="result-label">UAS7</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Aralık</span><strong>0–42</strong></div><div><span>Değerlendirme</span><strong>7 gün</strong></div></div><div class="notice info">Aktivite bantları: 0 semptomsuz; 1–6 iyi kontrollü; 7–15 hafif; 16–27 orta; 28–42 şiddetli. Bu bantlar klinik durumları yorumlamak için önerilmiştir.</div></aside></div>${sourceBlock('uas7','UAS, GA²LEN tarafından telifli bir ölçektir. Bu uygulama puanlama mantığını hesaplar; resmi formun yerine geçtiği iddia edilmez.')}`;
    bindLive(()=>{const days=Array.from({length:7},(_,i)=>({wheals:num(`uas-w-${i}`),itch:num(`uas-i-${i}`)}));days.forEach((d,i)=>setText(`uas-day-${i}`,d.wheals+d.itch));const sc=S.uas7(days);setText('resultScore',sc);setHTML('resultSeverity',severityChip(S.uas7Severity(sc)));});
  }

  function renderIhs4(t){
    const regions=[
      ['rax','Sağ aksilla'],['lax','Sol aksilla'],
      ['rinfra','Sağ inframammary bölge'],['linfra','Sol inframammary bölge'],['inter','İntermammary bölge'],
      ['ring','Sağ inguinal bölge'],['ling','Sol inguinal bölge'],['pubic','Pubik / suprapubik bölge'],
      ['rgluteal','Sağ gluteal bölge'],['lgluteal','Sol gluteal bölge'],
      ['perineal','Perineal / perianal'],['other','Diğer bölge']
    ];
    host.innerHTML=head(t,'IHS4 standart olarak tüm vücuttaki inflamatuvar nodül, apse ve drene tünellerin toplamından hesaplanır. Bu form, lezyonları anatomik bölgelere göre girmenizi sağlar ve toplamları otomatik birleştirir.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">IHS4 = toplam nodül + (2 × toplam apse) + (4 × toplam drene tünel)</div><div class="notice info">Bölgesel satırlar kayıt kolaylığı içindir; her lezyonu yalnızca bir bölgede sayın. Son IHS4, tüm bölgelerin lezyon toplamlarından hesaplanır.</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>İnflamatuvar nodül</th><th>Apse</th><th>Drene tünel</th><th>Bölgesel katkı</th></tr></thead><tbody>${regions.map(([id,name])=>`<tr><td>${name}</td><td><input id="ih-n-${id}" type="number" min="0" step="1" value="0"></td><td><input id="ih-a-${id}" type="number" min="0" step="1" value="0"></td><td><input id="ih-t-${id}" type="number" min="0" step="1" value="0"></td><td><strong id="ih-sub-${id}">0</strong></td></tr>`).join('')}</tbody><tfoot><tr><th>Toplam</th><th id="ih-total-n">0</th><th id="ih-total-a">0</th><th id="ih-total-t">0</th><th id="ih-total-score">0</th></tr></tfoot></table></div>${resetButton()}</div><aside class="result-card"><div class="result-label">IHS4</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Hafif</span><strong>≤3</strong></div><div><span>Orta</span><strong>4–10</strong></div><div><span>Şiddetli</span><strong>≥11</strong></div></div><div class="notice info">Standart IHS4 formülü korunmuştur; anatomik bölgelere ayırma yalnızca daha sistematik lezyon sayımı içindir.</div></aside></div>${sourceBlock('ihs4')}`;
    bindLive(()=>{
      const entries=regions.map(([id])=>({nodules:num(`ih-n-${id}`),abscesses:num(`ih-a-${id}`),tunnels:num(`ih-t-${id}`)}));
      const r=S.ihs4Regional(entries);
      regions.forEach(([id],i)=>setText(`ih-sub-${id}`,S.ihs4(entries[i])));
      setText('ih-total-n',r.nodules);setText('ih-total-a',r.abscesses);setText('ih-total-t',r.tunnels);setText('ih-total-score',r.score);
      setText('resultScore',r.score);setHTML('resultSeverity',severityChip(S.ihs4Severity(r.score)));
    });
  }

  function renderParacelsus(t){
    const criteria=[
      ['progressing','Hızla ilerleyen hastalık / ülserin 6 hafta içinde gelişmesi',3,'Majör kriter'],
      ['differential','İlgili ayırıcı tanıların değerlendirilmesi ve dışlanması',3,'Majör kriter'],
      ['violaceousBorder','Kırmızı-mor (reddish-violaceous) yara kenarı',3,'Majör kriter'],
      ['immunosuppressantResponse','İmmünsüpresif tedaviyle belirgin düzelme',2,'Minör kriter'],
      ['irregularShape','Karakteristik düzensiz / bizarre ülser şekli',2,'Minör kriter'],
      ['extremePain','Şiddetli ağrı >4/10 (VAS)',2,'Minör kriter'],
      ['pathergy','Travma bölgesinde lokalizasyon / paterji',2,'Minör kriter'],
      ['suppurativeHistology','Histopatolojide süpüratif inflamasyon',1,'Ek kriter'],
      ['underminedBorder','Undermine yara kenarı',1,'Ek kriter'],
      ['systemicDisease','İlişkili sistemik hastalık',1,'Ek kriter']
    ];
    host.innerHTML=head(t,'PARACELSUS, Piyoderma gangrenosum tanısal olasılığını 10 klinik, histopatolojik ve tedavi yanıtı kriteri üzerinden puanlayan yardımcı bir skordur.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">PARACELSUS = majör kriterler (3 puan) + minör kriterler (2 puan) + ek kriterler (1 puan)</div><div class="notice warn">Bu skor klinik tanının yerine geçmez. Enfeksiyon, vaskülit/vasülopati, malignite ve diğer kronik ülser nedenlerinin uygun şekilde değerlendirilmesi gerekir.</div><div class="paracelsus-list">${criteria.map(([id,label,points,group])=>`<label class="criterion-card"><input id="para-${id}" type="checkbox"><span><strong>${label}</strong><small>${group} · +${points} puan</small></span><b>+${points}</b></label>`).join('')}</div>${resetButton()}</div><aside class="result-card"><div class="result-label">PARACELSUS</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Orijinal eşik</span><strong>≥10</strong></div><div><span>Maksimum</span><strong>20</strong></div><div><span>Pozitif kriter</span><strong id="para-count">0 / 10</strong></div></div><div class="notice info">Orijinal çalışma: ≥10 puan PG için yüksek olasılık. 2026 çok merkezli validasyonda >10 eşik değerinin özgüllüğü artırdığı bildirilmiştir; sonuç bu nedenle klinik bağlamla yorumlanmalıdır.</div></aside></div>${sourceBlock('paracelsus')}`;
    bindLive(()=>{
      const data={}; criteria.forEach(([id])=>data[id]=checked(`para-${id}`));
      const sc=S.paracelsus(data); setText('resultScore',sc); setHTML('resultSeverity',severityChip(S.paracelsusInterpretation(sc)));
      setText('para-count',`${criteria.filter(([id])=>data[id]).length} / 10`);
    });
  }

  function renderNapsi(t){
    const names=['Sağ başparmak','Sağ işaret','Sağ orta','Sağ yüzük','Sağ küçük','Sol başparmak','Sol işaret','Sol orta','Sol yüzük','Sol küçük'];
    const toes=['Sağ 1. ayak','Sağ 2. ayak','Sağ 3. ayak','Sağ 4. ayak','Sağ 5. ayak','Sol 1. ayak','Sol 2. ayak','Sol 3. ayak','Sol 4. ayak','Sol 5. ayak'];
    function rows(list,prefix){return list.map((n,i)=>`<tr class="${prefix==='toe'?'toe-row':''}"><td>${n}</td><td>${intSelect(`nap-${prefix}-m-${i}`,4)}</td><td>${intSelect(`nap-${prefix}-b-${i}`,4)}</td><td><strong id="nap-${prefix}-t-${i}">0</strong></td></tr>`).join('')}
    host.innerHTML=head(t,'Her tırnak dört kadrana ayrılır. Tırnak matriksi ve tırnak yatağı için, herhangi bir ilgili bulgunun bulunduğu kadran sayısı ayrı ayrı 0–4 olarak puanlanır.')+`<div class="calc-layout"><div class="calc-card"><div class="notice info"><strong>Matriks bulguları:</strong> pitting, lökonişi, kırılma, lunulada kırmızı noktalar. <strong>Yatak bulguları:</strong> onikoliz, splinter hemoraji, subungual hiperkeratoz, oil-drop/salmon patch.</div><label class="checkbox" style="margin-bottom:14px"><input id="nap-toes" type="checkbox"> Ayak tırnaklarını da dahil et (maksimum 160)</label><div class="table-wrap"><table><thead><tr><th>Tırnak</th><th>Matriks: etkilenen kadran (0–4)</th><th>Yatak: etkilenen kadran (0–4)</th><th>Tırnak toplamı</th></tr></thead><tbody>${rows(names,'finger')}${rows(toes,'toe')}</tbody></table></div>${resetButton()}</div><aside class="result-card"><div class="result-label">NAPSI</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity">${severityChip({label:'Sayısal izlem',tone:'neutral'})}</div><div class="result-meta"><div><span>Değerlendirilen tırnak</span><strong id="napCount">10</strong></div><div><span>Maksimum</span><strong id="napMax">80</strong></div></div><div class="notice info">Orijinal NAPSI için evrensel olarak kabul edilmiş hafif/orta/şiddetli kesim değerleri yoktur; bu nedenle renkli şiddet etiketi üretilmez.</div></aside></div>${sourceBlock('napsi')}`;
    const toeRows=[...host.querySelectorAll('.toe-row')];function calc(){const include=checked('nap-toes');toeRows.forEach(r=>r.style.display=include?'table-row':'none');const nails=[];names.forEach((_,i)=>{const x={matrix:num(`nap-finger-m-${i}`),bed:num(`nap-finger-b-${i}`)};nails.push(x);setText(`nap-finger-t-${i}`,x.matrix+x.bed)});if(include)toes.forEach((_,i)=>{const x={matrix:num(`nap-toe-m-${i}`),bed:num(`nap-toe-b-${i}`)};nails.push(x);setText(`nap-toe-t-${i}`,x.matrix+x.bed)});setText('resultScore',S.napsi(nails));setText('napCount',include?'20':'10');setText('napMax',include?'160':'80');}
    bindLive(calc);
  }


function renderVasi(t){
  const regions=[['hands','Eller'],['upper','Üst ekstremiteler'],['trunk','Gövde'],['lower','Alt ekstremiteler'],['feet','Ayaklar']];
  const map=`<div class="vasi-map medmap-panel"><div class="medmap-head"><div><span class="eyebrow">Vücut haritası</span><strong>VASI bölgeleri</strong></div><span class="pasi-map-hint">Bölge seçin</span></div><div class="medmap-stage"><svg class="vasi-body-svg med-body-svg" viewBox="0 0 340 500" aria-label="VASI vücut haritası"><g class="body-outline front"><circle cx="170" cy="46" r="30" class="body-base"/><path d="M152 73h36v26q0 10-18 10t-18-10z" class="body-base"/><path d="M125 96q45-18 90 0l-10 149q-35 12-70 0z" class="body-base"/><path d="M126 108l-18 15-23 87 13 6 31-66z" class="body-base"/><path d="M214 108l18 15 23 87-13 6-31-66z" class="body-base"/><path d="M88 210l-9 86 16 2 12-79z" class="body-base"/><path d="M252 210l9 86-16 2-12-79z" class="body-base"/><ellipse cx="87" cy="311" rx="11" ry="14" class="body-base"/><ellipse cx="253" cy="311" rx="11" ry="14" class="body-base"/><path d="M142 243l27 7-7 107h-32z" class="body-base"/><path d="M171 250l27-7 12 114h-32z" class="body-base"/><path d="M130 356h32l-6 102h-28z" class="body-base"/><path d="M178 356h32l2 102h-28z" class="body-base"/><path d="M127 454h29l-3 18h-34q0-10 8-18z" class="body-base"/><path d="M180 454h34q8 8 8 18h-34z" class="body-base"/></g><g class="vasi-body-region" data-vasi-region="trunk"><circle class="vasi-region-shape med-region" cx="170" cy="46" r="30"/><path class="vasi-region-shape med-region" d="M152 73h36v26q0 10-18 10t-18-10z"/><path class="vasi-region-shape med-region" d="M125 96q45-18 90 0l-10 149q-35 12-70 0z"/></g><g class="vasi-body-region" data-vasi-region="upper"><path class="vasi-region-shape med-region" d="M126 108l-18 15-23 87 13 6 31-66z"/><path class="vasi-region-shape med-region" d="M214 108l18 15 23 87-13 6-31-66z"/><path class="vasi-region-shape med-region" d="M88 210l-9 86 16 2 12-79z"/><path class="vasi-region-shape med-region" d="M252 210l9 86-16 2-12-79z"/></g><g class="vasi-body-region" data-vasi-region="hands"><ellipse class="vasi-region-shape med-region" cx="87" cy="311" rx="11" ry="14"/><ellipse class="vasi-region-shape med-region" cx="253" cy="311" rx="11" ry="14"/></g><g class="vasi-body-region" data-vasi-region="lower"><path class="vasi-region-shape med-region" d="M142 243l27 7-7 107h-32z"/><path class="vasi-region-shape med-region" d="M171 250l27-7 12 114h-32z"/><path class="vasi-region-shape med-region" d="M130 356h32l-6 102h-28z"/><path class="vasi-region-shape med-region" d="M178 356h32l2 102h-28z"/></g><g class="vasi-body-region" data-vasi-region="feet"><path class="vasi-region-shape med-region" d="M127 454h29l-3 18h-34q0-10 8-18z"/><path class="vasi-region-shape med-region" d="M180 454h34q8 8 8 18h-34z"/></g></svg><div class="pasi-map-label label-head" data-vasi-jump="trunk"><strong>Gövde</strong><span><b id="vasi-map-trunk">0 HU · %0</b></span></div><div class="pasi-map-label label-arms" data-vasi-jump="upper"><strong>Üst ekstremiteler</strong><span><b id="vasi-map-upper">0 HU · %0</b></span></div><div class="pasi-map-label label-trunk" data-vasi-jump="hands"><strong>Eller</strong><span><b id="vasi-map-hands">0 HU · %0</b></span></div><div class="pasi-map-label label-legs" data-vasi-jump="lower"><strong>Alt ekstremiteler</strong><span><b id="vasi-map-lower">0 HU · %0</b></span></div><div class="pasi-map-label label-feet" data-vasi-jump="feet"><strong>Ayaklar</strong><span><b id="vasi-map-feet">0 HU · %0</b></span></div></div><div class="medmap-note">Her bölge için vitiligolu alanı hand unit (HU) olarak ve depigmentasyon yüzdesini girin.</div></div>`;
  host.innerHTML=head(t,'VASI, her vücut bölgesindeki vitiligolu alanı hand unit olarak ve depigmentasyon yüzdesi ile çarpar. Daha hızlı giriş için medikal vücut haritası kullanılabilir.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">VASI = Σ (hand unit sayısı × depigmentasyon oranı)</div><div class="pasi-workspace">${map}<div class="pasi-region-stack">${regions.map(([id,n])=>`<section class="pasi-region-card" data-vasi-card="${id}"><div class="subsection-head"><div><strong>${n}</strong></div><span class="pasi-area-badge" id="vasi-badge-${id}">0 HU</span></div><div class="form-grid"><div class="field"><span>Vitiligolu alan (hand unit)</span><input id="vasi-hu-${id}" type="number" min="0" step="0.1" value="0"></div><div class="field"><span>Depigmentasyon (%)</span><input id="vasi-dep-${id}" type="number" min="0" max="100" step="1" value="0"></div></div><small>Bölgesel katkı: <strong id="vasi-sub-${id}">0.00</strong></small></section>`).join('')}</div></div><div class="notice info">Depigmentasyon için pratik değerler: 0, 10, 25, 50, 75, 90 veya 100 girilebilir.</div>${resetButton()}</div><aside class="result-card"><div class="result-label">VASI</div><div id="resultScore" class="result-value">0.00</div><div id="resultSeverity">${severityChip({label:'Sayısal izlem',tone:'neutral'})}</div><div class="result-meta"><div><span>Yorum</span><strong>Toplam vitiligo yükü</strong></div><div><span>Eşik</span><strong>Evrensel bant yok</strong></div></div></aside></div>${sourceBlock('vasi')}`;

  function activateRegion(id,scroll=false){
    host.querySelectorAll('[data-vasi-region]').forEach(el=>el.classList.toggle('active',el.dataset.vasiRegion===id));
    host.querySelectorAll('[data-vasi-card]').forEach(el=>el.classList.toggle('active',el.dataset.vasiCard===id));
    host.querySelectorAll('[data-vasi-jump]').forEach(el=>el.classList.toggle('active',el.dataset.vasiJump===id));
    if(scroll){
      const card=host.querySelector(`[data-vasi-card="${id}"]`);
      if(card) card.scrollIntoView({behavior:'smooth',block:'center'});
    }
  }
  host.querySelectorAll('[data-vasi-region]').forEach(el=>{el.setAttribute('role','button');el.setAttribute('tabindex','0');el.addEventListener('click',()=>activateRegion(el.dataset.vasiRegion,true));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activateRegion(el.dataset.vasiRegion,true);}});});
  host.querySelectorAll('[data-vasi-jump]').forEach(el=>el.addEventListener('click',()=>activateRegion(el.dataset.vasiJump,true)));
  regions.forEach(([id])=>{const card=host.querySelector(`[data-vasi-card="${id}"]`);if(card)card.addEventListener('click',()=>activateRegion(id,false));['hu','dep'].forEach(kind=>{const el=document.getElementById(`vasi-${kind}-${id}`);if(el)el.addEventListener('focus',()=>activateRegion(id,false));});});

  bindLive(()=>{
    const data=regions.map(([id])=>({handUnits:num(`vasi-hu-${id}`),depigmentation:num(`vasi-dep-${id}`)}));
    regions.forEach(([id],i)=>{
      const hu=Math.max(0,Number(data[i].handUnits)||0);
      const dep=Math.max(0,Math.min(100,Number(data[i].depigmentation)||0));
      setText(`vasi-sub-${id}`,(hu*(dep/100)).toFixed(2));
      setText(`vasi-badge-${id}`,`${hu} HU · %${dep}`);
      setText(`vasi-map-${id}`,`${hu} HU · %${dep}`);
      const mapRegion=host.querySelector(`[data-vasi-region="${id}"]`);
      if(mapRegion){
        const level=dep===0?0:dep<10?1:dep<30?2:dep<50?3:dep<70?4:dep<90?5:6;
        mapRegion.dataset.areaLevel=String(level);
      }
    });
    setText('resultScore',S.vasi(data).toFixed(2));
  });
  activateRegion('trunk',false);
}



function renderClasi(t){
  const regions=[['face','Yüz'],['scalp','Saçlı deri'],['ears','Kulaklar'],['vneck','V boyun/dekolte'],['arms','Kollar'],['hands','Eller'],['legs','Bacak/ayak']];
  host.innerHTML=head(t,'CLASI aktivite ve hasarı ayrı raporlar. Dijital formda bölgesel eritem ve skuam/hiperkeratoz; ayrıca mukoza ve saç tutulumu alanları birleştirilmiştir.')+`<div class="calc-layout"><div class="calc-card"><div class="form-title">Aktivite</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Eritem (0–3)</th><th>Skuam / hiperkeratoz (0–2)</th><th>Dispigmentasyon (0–1)</th><th>Skar / atrofi / pannikülit (0–2)</th></tr></thead><tbody>${regions.map(([id,n])=>`<tr><td>${n}</td><td>${intSelect(`clasi-e-${id}`,3)}</td><td>${intSelect(`clasi-s-${id}`,2)}</td><td>${intSelect(`clasi-d-${id}`,1)}</td><td>${intSelect(`clasi-c-${id}`,2)}</td></tr>`).join('')}</tbody></table></div><div class="form-grid" style="margin-top:16px"><div class="field"><span>Mukoza tutulumu</span><select id="clasi-muc"><option value="0">0 · Yok</option><option value="1">1 · Var</option><option value="2">2 · Belirgin</option></select></div><div class="field"><span>Akut saç kaybı</span><select id="clasi-hair"><option value="0">0 · Yok</option><option value="1">1 · Var</option></select></div><div class="field"><span>Non-skatrisyel alopesi</span><select id="clasi-ns"><option value="0">0 · Yok</option><option value="1">1 · Hafif</option><option value="2">2 · Orta</option><option value="3">3 · Belirgin</option></select></div><div class="field"><span>Skatrisyel alopesi</span><select id="clasi-sa"><option value="0">0 · Yok</option><option value="3">3 · 1 saçlı deri kadranı</option><option value="4">4 · 2 saçlı deri kadranı</option><option value="5">5 · 3 saçlı deri kadranı</option><option value="6">6 · Tüm saçlı deri / 4 kadran</option></select><small>CLASI hasar alanında yalnızca 0, 3, 4, 5 veya 6 kullanılır.</small></div></div><label class="checkbox" style="margin-top:14px"><input id="clasi-d12" type="checkbox"> Dispigmentasyon ≥12 ay sürüyor (dispigmentasyon skoru ikiyle çarpılır)</label>${resetButton()}</div><aside class="result-card"><div class="result-label">CLASI</div><div id="resultScore" class="result-value">0 / 0</div><div id="resultSeverity">${severityChip({label:'Aktivite / hasar',tone:'neutral'})}</div><div class="result-meta"><div><span>Aktivite</span><strong id="clasiAct">0</strong></div><div><span>Hasar</span><strong id="clasiDam">0</strong></div></div><div class="notice info">CLASI için evrensel hafif-orta-şiddetli bantlar yoktur; sonuç aktivite ve hasarın ayrı izlenmesi için verilir.</div></aside></div>${sourceBlock('clasi')}`;
  bindLive(()=>{const data={regions:regions.map(([id])=>({erythema:num(`clasi-e-${id}`),scale:num(`clasi-s-${id}`),dyspigmentation:num(`clasi-d-${id}`),scarring:num(`clasi-c-${id}`)})),mucosa:num('clasi-muc'),acuteHairLoss:num('clasi-hair'),nonscarringAlopecia:num('clasi-ns'),scarringAlopecia:num('clasi-sa'),dyspigmentGte12m:checked('clasi-d12')};const r=S.clasi(data);setText('resultScore',`${r.activity} / ${r.damage}`);setText('clasiAct',r.activity);setText('clasiDam',r.damage);});
}

function renderAbsis(t){
  host.innerHTML=head(t,'ABSIS; deri alanı ve lezyon niteliğine dayanan kutanöz skoru, oral tutulumun alan ve rahatsızlık bileşenleri ile birleştirir.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">Deri skoru = etkilenen BSA (%) × lezyon ağırlığı; toplam = deri + oral alan + oral rahatsızlık</div><div class="form-grid"><div class="field"><span>Deri tutulumu (%)</span><input id="ab-bsa" type="number" min="0" max="100" value="0"></div><div class="field"><span>Baskın lezyon tipi</span><select id="ab-weight"><option value="0.5">Yeniden epitelize / kuru lezyon (×0.5)</option><option value="1" selected>Eroziv fakat kuru (×1.0)</option><option value="1.5">Eksüdatif / Nikolsky pozitif / büllöz (×1.5)</option></select></div><div class="field"><span>Oral tutulan bölge sayısı</span><input id="ab-oral-extent" type="number" min="0" max="11" value="0"></div><div class="field"><span>İçecek alırken rahatsızlık (0–10)</span><input id="ab-drink" type="number" min="0" max="10" value="0"></div><div class="field"><span>Yemek yerken rahatsızlık (0–10)</span><input id="ab-food" type="number" min="0" max="10" value="0"></div></div><div class="notice warn">Orijinal ABSIS formunda oral bileşen daha ayrıntılıdır. Bu dijital araç, alan ve rahatsızlık alt skorlarını hızlı klinik kayıt için özetler.</div>${resetButton()}</div><aside class="result-card"><div class="result-label">ABSIS</div><div id="resultScore" class="result-value">0.0</div><div id="resultSeverity">${severityChip({label:'Toplam skor',tone:'neutral'})}</div><div class="result-meta"><div><span>Deri</span><strong id="abSkin">0.0</strong></div><div><span>Oral alan</span><strong id="abExtent">0</strong></div><div><span>Oral rahatsızlık</span><strong id="abDis">0</strong></div></div></aside></div>${sourceBlock('absis')}`;
  bindLive(()=>{const r=S.absis({bsa:num('ab-bsa'),weight:Number(val('ab-weight')),oralExtent:num('ab-oral-extent'),drinkDiscomfort:num('ab-drink'),foodDiscomfort:num('ab-food')});setText('resultScore',r.total.toFixed(1));setText('abSkin',r.skin.toFixed(1));setText('abExtent',r.oralExtent);setText('abDis',r.oralDiscomfort);});
}

function renderUct(t){
  const qs=[
    ['Son 4 haftada ürtikerin fiziksel belirtilerinden (kaşıntı, kabarıklık ve/veya şişlik) ne kadar rahatsız oldunuz?',['0 · Çok fazla','1 · Fazla','2 · Orta derecede','3 · Biraz','4 · Hiç']],
    ['Son 4 haftada ürtiker yaşam kalitenizi ne kadar etkiledi?',['0 · Çok fazla','1 · Fazla','2 · Orta derecede','3 · Biraz','4 · Hiç']],
    ['Son 4 haftada ürtiker tedaviniz belirtilerinizi kontrol etmekte ne sıklıkta yetersiz kaldı?',['0 · Çok sık','1 · Sık','2 · Bazen','3 · Nadiren','4 · Hiç']],
    ['Genel olarak son 4 haftada ürtikeriniz ne kadar iyi kontrol altındaydı?',['0 · Hiç kontrol altında değil','1 · Biraz','2 · Kısmen','3 · İyi','4 · Çok iyi']]
  ];
  host.innerHTML=head(t,'UCT, kronik ürtiker kontrolünü değerlendiren 4 soruluk hasta bildirimli ölçektir. Tüm sorularda 0 en kötü, 4 en iyi kontrolü temsil eder; ancak soru yönleri farklı olduğu için cevap ifadeleri soru bazında gösterilir.')+`<div class="calc-layout"><div class="calc-card"><div class="notice info"><strong>Puan yönü:</strong> Her soruda yüksek puan daha iyi kontrol anlamına gelir. 1–3. sorularda sorun/yetersizlik azaldıkça puan yükselir; 4. soruda kontrol arttıkça puan yükselir.</div>${qs.map(([q,labels],i)=>`<div class="subsection"><div class="subsection-head"><strong>Soru ${i+1}</strong><span class="eyebrow">0 → 4</span></div><div class="field"><span>${q}</span>${intSelect(`uct-${i}`,4,labels)}</div></div>`).join('')}${resetButton()}</div><aside class="result-card"><div class="result-label">UCT</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Aralık</span><strong>0–16</strong></div><div><span>İyi kontrol</span><strong>≥12</strong></div><div><span>Tam kontrol</span><strong>16</strong></div></div></aside></div>${sourceBlock('uct')}`;
  bindLive(()=>{const sc=S.uct([0,1,2,3].map(i=>num(`uct-${i}`)));setText('resultScore',sc);setHTML('resultSeverity',severityChip(S.uctSeverity(sc)));});
}

function renderPoem(t){
  const items=['Kaşıntı','Uyku bozukluğu','Kanama','Islaklık / sızıntı','Çatlama','Deri dökülmesi / pul pul olma','Kuruluk / pürüzlülük'];
  const labels=['0 · Hiç gün yok','1 · 1–2 gün','2 · 3–4 gün','3 · 5–6 gün','4 · Her gün'];
  host.innerHTML=head(t,'POEM, son 1 haftadaki atopik dermatit semptom sıklığını hastanın bildirimine göre değerlendirir.')+`<div class="calc-layout"><div class="calc-card">${items.map((q,i)=>`<div class="subsection"><div class="field"><span>${q}</span>${intSelect(`poem-${i}`,4,labels)}</div></div>`).join('')}${resetButton()}</div><aside class="result-card"><div class="result-label">POEM</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Aralık</span><strong>0–28</strong></div><div><span>Yorum</span><strong>Hasta bildirimi</strong></div></div></aside></div>${sourceBlock('poem')}`;
  bindLive(()=>{const sc=S.poem([0,1,2,3,4,5,6].map(i=>num(`poem-${i}`)));setText('resultScore',sc);setHTML('resultSeverity',severityChip(S.poemSeverity(sc)));});
}

function renderMmasi(t){
  const regs=[['forehead','Alın',0.3],['rightMalar','Sağ malar',0.3],['leftMalar','Sol malar',0.3],['chin','Çene',0.1]];
  host.innerHTML=head(t,'mMASI; dört yüz alanında alan skoru (0–6) ile koyuluk skorunu (0–4) çarpar ve bölgesel katsayılarla toplar.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">mMASI = 0.3(Af×Df) + 0.3(Arm×Drm) + 0.3(Alm×Dlm) + 0.1(Ac×Dc)</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Alan (0–6)</th><th>Koyuluk (0–4)</th><th>Katsayı</th><th>Katkı</th></tr></thead><tbody>${regs.map(([id,n,w])=>`<tr><td>${n}</td><td>${intSelect(`mm-a-${id}`,6)}</td><td>${intSelect(`mm-d-${id}`,4)}</td><td>${w}</td><td id="mm-sub-${id}">0.0</td></tr>`).join('')}</tbody></table></div>${resetButton()}</div><aside class="result-card"><div class="result-label">mMASI</div><div id="resultScore" class="result-value">0.0</div><div id="resultSeverity">${severityChip({label:'Sayısal izlem',tone:'neutral'})}</div><div class="result-meta"><div><span>Maksimum</span><strong>24</strong></div><div><span>Yorum</span><strong>İzlem skoru</strong></div></div></aside></div>${sourceBlock('mmasi')}`;
  bindLive(()=>{const v={};regs.forEach(([id])=>{v[`${id}Area`]=num(`mm-a-${id}`);v[`${id}Darkness`]=num(`mm-d-${id}`);});const sc=S.mmasi(v);regs.forEach(([id,,w])=>setText(`mm-sub-${id}`,(w*num(`mm-a-${id}`)*num(`mm-d-${id}`)).toFixed(1)));setText('resultScore',sc.toFixed(1));});
}

function renderGags(t){
  const areas=[['forehead','Alın',2],['rightCheek','Sağ yanak',2],['leftCheek','Sol yanak',2],['nose','Burun',1],['chin','Çene',1],['chestBack','Göğüs / üst sırt',3]];
  const labels=['0 · Lezyon yok','1 · Komedon','2 · Papül','3 · Püstül','4 · Nodül'];
  host.innerHTML=head(t,'GAGS, her anatomik alan için en ağır lezyon tipini alır ve alan faktörü ile çarpar.')+`<div class="calc-layout"><div class="calc-card"><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Alan faktörü</th><th>En ağır lezyon tipi</th><th>Yerel skor</th></tr></thead><tbody>${areas.map(([id,n,f])=>`<tr><td>${n}</td><td>${f}</td><td>${intSelect(`ga-${id}`,4,labels)}</td><td id="ga-sub-${id}">0</td></tr>`).join('')}</tbody></table></div>${resetButton()}</div><aside class="result-card"><div class="result-label">GAGS</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity"></div><div class="result-meta"><div><span>Hafif</span><strong>1–18</strong></div><div><span>Orta</span><strong>19–30</strong></div><div><span>Şiddetli</span><strong>31–38</strong></div><div><span>Çok şiddetli</span><strong>>39</strong></div></div></aside></div>${sourceBlock('gags')}`;
  bindLive(()=>{const vals={};areas.forEach(([id,,f])=>{vals[id]=num(`ga-${id}`);setText(`ga-sub-${id}`,num(`ga-${id}`)*f);});const sc=S.gags(vals);setText('resultScore',sc);setHTML('resultSeverity',severityChip(S.gagsSeverity(sc)));});
}


const morpheaSites=[
  ['head','Baş / yüz'],['neck','Boyun'],['chest','Göğüs'],['abdomen','Abdomen'],['upperBack','Üst sırt'],['lowerBack','Alt sırt'],
  ['rightArm','Sağ üst kol'],['leftArm','Sol üst kol'],['rightForearm','Sağ ön kol'],['leftForearm','Sol ön kol'],
  ['rightHand','Sağ el / parmaklar'],['leftHand','Sol el / parmaklar'],['rightThigh','Sağ uyluk'],['leftThigh','Sol uyluk'],
  ['rightLeg','Sağ bacak'],['leftLeg','Sol bacak'],['rightFoot','Sağ ayak'],['leftFoot','Sol ayak']
];

function renderLppai(t){
  const four=['0 · Yok','1 · Hafif','2 · Orta','3 · Şiddetli'];
  const spread=[[0,'0 · Yayılma yok'],[1,'1 · Belirsiz'],[2,'2 · Yayılma var']];
  const pull=[[0,'0 · Negatif (anajen saç yok)'],[1,'1 · Pozitif (anajen saç var)']];
  host.innerHTML=head(t,'LPPAI; kaşıntı, ağrı ve yanma gibi semptomları; saçlı deri eritemi, perifoliküler eritem ve perifoliküler skuam gibi bulguları; anajen pull testini ve hastalık yayılımını birleştirerek LPP aktivitesini 0–10 arasında sayısallaştırır.')+
  `<div class="calc-layout"><div class="calc-card"><div class="formula">LPPAI = (kaşıntı + ağrı + yanma)/3 + (saçlı deri eritemi + perifoliküler eritem + perifoliküler skuam)/3 + 2.5×pull test + 1.5×(yayılma/2)</div>
  <fieldset class="form-section"><legend>Semptomlar</legend><div class="form-grid cols-4"><div class="field"><span>Kaşıntı</span>${intSelect('lp-pruritus',3,four)}</div><div class="field"><span>Ağrı</span>${intSelect('lp-pain',3,four)}</div><div class="field"><span>Yanma</span>${intSelect('lp-burning',3,four)}</div></div></fieldset>
  <fieldset class="form-section"><legend>Klinik bulgular</legend><div class="form-grid cols-4"><div class="field"><span>Saçlı deri eritemi</span>${intSelect('lp-scalp-ery',3,four)}</div><div class="field"><span>Perifoliküler eritem</span>${intSelect('lp-peri-ery',3,four)}</div><div class="field"><span>Perifoliküler skuam</span>${intSelect('lp-scale',3,four)}</div></div></fieldset>
  <fieldset class="form-section"><legend>Aktivite göstergeleri</legend><div class="form-grid"><div class="field"><span>Anajen pull testi</span>${activitySelect('lp-pull',pull)}</div><div class="field"><span>Hastalık yayılımı</span>${activitySelect('lp-spread',spread)}</div></div></fieldset>
  <div class="notice info">LPPAI için evrensel olarak doğrulanmış hafif/orta/şiddetli eşikleri bulunmadığından sonuç sayısal aktivite skoru olarak gösterilir; daha yüksek skor daha fazla aktiviteyi ifade eder.</div>${resetButton()}</div>
  <aside class="result-card"><div class="result-label">LPPAI</div><div id="resultScore" class="result-value">0.00</div><div id="resultSeverity">${severityChip({label:'Sayısal aktivite',tone:'neutral'})}</div><div class="result-meta"><div><span>Aralık</span><strong>0–10</strong></div><div><span>Yorum</span><strong>Daha yüksek = daha aktif</strong></div></div></aside></div>${sourceBlock('lppai')}`;
  bindLive(()=>{
    const sc=S.lppai({pruritus:num('lp-pruritus'),pain:num('lp-pain'),burning:num('lp-burning'),scalpErythema:num('lp-scalp-ery'),perifollicularErythema:num('lp-peri-ery'),perifollicularScale:num('lp-scale'),pullTest:num('lp-pull'),spreading:num('lp-spread')});
    setText('resultScore',sc.toFixed(2));
  });
}

function renderMlossi(t){
  const ery=['0 · Eritem yok','1 · Hafif / pembe','2 · Kırmızı / belirgin','3 · Koyu kırmızı / viyolase'];
  const thick=['0 · Normal, serbest hareketli','1 · Hafif kalınlaşma, hareketli','2 · Orta kalınlaşma, hareket kısıtlı','3 · Belirgin kalınlaşma / hareket yok'];
  const ne=[[0,'0 · Son 1 ayda yok'],[3,'3 · Yeni lezyon ve/veya genişleme var']];
  host.innerHTML=head(t,'mLoSSI, morfea/lokalize sklerodermada aktif deri hastalığını 18 anatomik bölgede değerlendirir. Her bölgede en şiddetli lezyonun eritemi, deri kalınlığı ve son 1 ayda yeni lezyon veya mevcut lezyonda genişleme olup olmadığı kaydedilir.')+
  `<div class="calc-layout"><div class="calc-card"><div class="formula">mLoSSI = Σ 18 bölge [eritem (0–3) + deri kalınlığı (0–3) + yeni/genişleyen lezyon (0 veya 3)]</div>
  <div class="morphea-legend-grid"><div class="notice info"><strong>Eritem:</strong> 0 yok · 1 pembe · 2 kırmızı · 3 koyu kırmızı/viyolase</div><div class="notice info"><strong>Deri kalınlığı:</strong> 0 normal · 1 hafif · 2 orta/hareket kısıtlı · 3 belirgin/hareket yok</div><div class="notice info"><strong>Yeni/genişleyen lezyon:</strong> Son 1 ay içinde varsa 3 puan, yoksa 0.</div></div>
  <div class="table-wrap"><table class="morphea-table"><thead><tr><th>Anatomik bölge</th><th>Yeni / genişleyen (0/3)</th><th>Eritem (0–3)</th><th>Deri kalınlığı (0–3)</th><th>Bölge toplamı</th></tr></thead><tbody>${morpheaSites.map(([id,n])=>`<tr><td>${n}</td><td>${activitySelect(`ml-ne-${id}`,ne)}</td><td>${intSelect(`ml-er-${id}`,3,ery)}</td><td>${intSelect(`ml-st-${id}`,3,thick)}</td><td id="ml-sub-${id}">0</td></tr>`).join('')}</tbody></table></div>
  <div class="notice info">mLoSSI önceki LoSCAT sürümlerinde kullanılan aktivite indeksidir. Güncel LoSCAT aktivite indeksi LoSAI, aktivite alanında deri kalınlığı yerine lezyon kenarındaki indürasyonu kullanır. LoSAI için tanımlanan şiddet bantları mLoSSI'ye otomatik olarak uygulanmamalıdır.</div>${resetButton()}</div>
  <aside class="result-card"><div class="result-label">mLoSSI</div><div id="resultScore" class="result-value">0</div><div id="resultSeverity">${severityChip({label:'Sayısal aktivite',tone:'neutral'})}</div><div class="result-meta"><div><span>Aralık</span><strong>0–162</strong></div><div><span>Değerlendirilen bölge</span><strong>18</strong></div><div><span>Yorum</span><strong>Daha yüksek = daha aktif</strong></div></div></aside></div>${sourceBlock('mlossi')}`;
  bindLive(()=>{
    const rows=morpheaSites.map(([id])=>({newExtension:num(`ml-ne-${id}`),erythema:num(`ml-er-${id}`),skinThickness:num(`ml-st-${id}`)}));
    rows.forEach((r,i)=>setText(`ml-sub-${morpheaSites[i][0]}`,r.newExtension+r.erythema+r.skinThickness));
    const sc=S.mlossi(rows); setText('resultScore',sc);
  });
}

function renderLoscat(t){
  host.innerHTML=head(t,'Güncel LoSCAT, morfea/lokalize sklerodermada hastalık aktivitesini LoSAI ile, kalıcı deri hasarını LoSDI ile ayrı değerlendirir; ayrıca PGA-A ve PGA-D hekim global değerlendirmeleri 0–100 arasında kaydedilebilir.')+
  `<div class="calc-layout"><div class="calc-card"><div class="formula">LoSAI = Σ [yeni/genişleyen (0/3) + eritem (0–3) + indürasyon (0–3)] · LoSDI = Σ [dermal atrofi + subkutan/derin atrofi + dispigmentasyon + merkezde skleroz/kalınlık] (her biri 0–3)</div>
  <div class="morphea-legend-grid"><div class="notice info"><strong>LoSAI:</strong> yeni/genişleyen lezyon (0/3), eritem (0–3) ve lezyon kenarında indürasyon (0–3).</div><div class="notice info"><strong>LoSDI:</strong> dermal atrofi, subkutan/derin atrofi, dispigmentasyon ve lezyon merkezinde skleroz/kalınlık; her biri 0–3.</div><div class="notice info">Her anatomik bölgede birden fazla lezyon varsa her alan için en yüksek / en şiddetli değer kullanılır.</div></div>
  <div class="table-wrap"><table class="morphea-table loscat-table"><thead><tr><th>Anatomik bölge</th><th>Yeni / genişleyen (0/3)</th><th>Eritem</th><th>İndürasyon · kenar</th><th>Dermal atrofi</th><th>Subkutan / derin atrofi</th><th>Dispigmentasyon</th><th>Skleroz / kalınlık · merkez</th></tr></thead><tbody>${morpheaSites.map(([id,n])=>`<tr><td>${n}</td><td>${activitySelect(`lc-ne-${id}`,[[0,'0'],[3,'3']])}</td><td>${intSelect(`lc-er-${id}`,3)}</td><td>${intSelect(`lc-in-${id}`,3)}</td><td>${intSelect(`lc-da-${id}`,3)}</td><td>${intSelect(`lc-sa-${id}`,3)}</td><td>${intSelect(`lc-dp-${id}`,3)}</td><td>${intSelect(`lc-cs-${id}`,3)}</td></tr>`).join('')}</tbody></table></div>
  <details class="score-guide"><summary>0–3 puanlama tanımları</summary><div class="guide-grid"><div><strong>Eritem</strong><p>0 yok · 1 pembe · 2 kırmızı · 3 koyu kırmızı/viyolase</p></div><div><strong>İndürasyon · lezyon kenarı</strong><p>0 yok · 1 hafif · 2 orta · 3 belirgin</p></div><div><strong>Dermal atrofi</strong><p>0 yok · 1 parlak · 2 görünür damarlar · 3 belirgin cliff-drop</p></div><div><strong>Subkutan / derin atrofi</strong><p>0 yok · 1 düz · 2 konkav · 3 belirgin</p></div><div><strong>Dispigmentasyon</strong><p>0 yok · 1 hafif · 2 orta · 3 belirgin hiper- veya hipopigmentasyon</p></div><div><strong>Skleroz / kalınlık · lezyon merkezi</strong><p>0 yok · 1 hafif · 2 orta · 3 belirgin</p></div></div></details>
  <fieldset class="form-section pga-panel"><legend>Hekim global değerlendirmeleri</legend><div class="form-grid"><div class="field"><span>PGA-A · Aktivite (0–100)</span><input id="lc-pgaa" type="number" min="0" max="100" step="1" value="0"><small>0 = inaktif / aktivite yok · 100 = belirgin derecede aktif</small></div><div class="field"><span>PGA-D · Hasar (0–100)</span><input id="lc-pgad" type="number" min="0" max="100" step="1" value="0"><small>0 = hasar yok · 100 = belirgin derecede hasarlı</small></div></div></fieldset>
  <div class="notice info">Teske ve Jacobe: LoSAI için 0–4 hafif, 5–12 orta, ≥13 şiddetli aktivite; LoSDI için 0–10 hafif, 11–15 orta, ≥16 şiddetli hasar bantları bildirilmiştir. PGA-A için 0–10 / 11–30 / ≥31; PGA-D için 0–18 / 19–30 / ≥31 bantları kullanılmıştır. Bunlar evrensel tedavi eşikleri değildir.</div>${resetButton()}</div>
  <aside class="result-card loscat-result"><div class="result-label">LoSAI · Aktivite</div><div id="loscatActivity" class="result-value">0</div><div id="loscatActivitySeverity"></div><div class="result-divider"></div><div class="result-label">LoSDI · Hasar</div><div id="loscatDamage" class="result-value secondary-value">0</div><div id="loscatDamageSeverity"></div><div class="result-divider"></div><div class="loscat-pga-summary"><div><span class="result-label">PGA-A</span><strong id="loscatPgaA">0</strong><span id="loscatPgaASeverity"></span></div><div><span class="result-label">PGA-D</span><strong id="loscatPgaD">0</strong><span id="loscatPgaDSeverity"></span></div></div><div class="result-meta"><div><span>LoSAI aralığı</span><strong>0–162</strong></div><div><span>LoSDI aralığı</span><strong>0–216</strong></div><div><span>PGA aralığı</span><strong>0–100</strong></div><div><span>Anatomik bölge</span><strong>18</strong></div></div></aside></div>${sourceBlock('loscat')}`;
  bindLive(()=>{
    const rows=morpheaSites.map(([id])=>({newExtension:num(`lc-ne-${id}`),erythema:num(`lc-er-${id}`),induration:num(`lc-in-${id}`),dermalAtrophy:num(`lc-da-${id}`),subcutaneousAtrophy:num(`lc-sa-${id}`),dyspigmentation:num(`lc-dp-${id}`),centralSclerosis:num(`lc-cs-${id}`)}));
    const sc=S.loscat(rows); const pgaA=Math.max(0,Math.min(100,num('lc-pgaa'))); const pgaD=Math.max(0,Math.min(100,num('lc-pgad')));
    setText('loscatActivity',sc.activity); setText('loscatDamage',sc.damage); setHTML('loscatActivitySeverity',severityChip(S.losaiSeverity(sc.activity))); setHTML('loscatDamageSeverity',severityChip(S.losdiSeverity(sc.damage)));
    setText('loscatPgaA',pgaA); setText('loscatPgaD',pgaD); setHTML('loscatPgaASeverity',severityChip(S.pgaActivitySeverity(pgaA))); setHTML('loscatPgaDSeverity',severityChip(S.pgaDamageSeverity(pgaD)));
  });
}

function renderRasi(t){
  const regs=[['forehead','Alın',0.2],['rightCheek','Sağ yanak',0.3],['leftCheek','Sol yanak',0.3],['noseChin','Burun / çene',0.2]];
  host.innerHTML=head(t,'RASI, yüz bölgelerinde alan ve temel rozasea bulgularını birleştiren sayısal izlem skorudur.')+`<div class="calc-layout"><div class="calc-card"><div class="formula">Bölgesel katkı = ağırlık × alan (0–6) × [eritem + papül/püstül + telanjiektazi]</div><div class="table-wrap"><table><thead><tr><th>Bölge</th><th>Alan (0–6)</th><th>Eritem (0–3)</th><th>Papül / püstül (0–3)</th><th>Telanjiektazi (0–3)</th><th>Katsayı</th></tr></thead><tbody>${regs.map(([id,n,w])=>`<tr><td>${n}</td><td>${intSelect(`ra-a-${id}`,6)}</td><td>${intSelect(`ra-e-${id}`,3)}</td><td>${intSelect(`ra-p-${id}`,3)}</td><td>${intSelect(`ra-t-${id}`,3)}</td><td>${w}</td></tr>`).join('')}</tbody></table></div><div class="notice info">RASI, rosacea yükünü zamansal izlem için sayısallaştırmak amacıyla kullanılmalıdır; evrensel şiddet bantları henüz sınırlıdır.</div>${resetButton()}</div><aside class="result-card"><div class="result-label">RASI</div><div id="resultScore" class="result-value">0.0</div><div id="resultSeverity">${severityChip({label:'Sayısal izlem',tone:'neutral'})}</div><div class="result-meta"><div><span>Yorum</span><strong>İzlem skoru</strong></div></div></aside></div>${sourceBlock('rasi')}`;
  bindLive(()=>{const vals={};regs.forEach(([id])=>vals[id]={area:num(`ra-a-${id}`),erythema:num(`ra-e-${id}`),papules:num(`ra-p-${id}`),telangiectasia:num(`ra-t-${id}`)});setText('resultScore',S.rasi(vals).toFixed(1));});
}

  const renderers={pasi:renderPasi,salt:renderSalt,lppai:renderLppai,pdai:renderPdai,bpdai:renderBpdai,easi:renderEasi,scorad:renderScorad,scorten:renderScorten,uas7:renderUas7,ihs4:renderIhs4,paracelsus:renderParacelsus,napsi:renderNapsi,vasi:renderVasi,clasi:renderClasi,mlossi:renderMlossi,loscat:renderLoscat,absis:renderAbsis,uct:renderUct,poem:renderPoem,mmasi:renderMmasi,gags:renderGags,rasi:renderRasi};

  function applyStaticUI(){
    if(!I) return;
    const q=(sel)=>document.querySelector(sel);
    const txt=(sel,key)=>{const el=q(sel);if(el)el.textContent=I.getUI(key);};
    const attr=(sel,name,key)=>{const el=q(sel);if(el)el.setAttribute(name,I.getUI(key));};
    document.documentElement.lang=I.getLang();
    const meta=q('meta[name="description"]'); if(meta) meta.setAttribute('content',I.getUI('metaDescription'));
    txt('.skip-link','skip'); attr('.brand','aria-label','homeAria'); attr('.top-actions','aria-label','topMenu');
    attr('#languageSwitcher','aria-label','language'); attr('#themeToggle','aria-label','theme'); attr('#themeToggle','title','theme'); txt('.top-actions .text-link','about');
    attr('.sidebar','aria-label','toolsAria'); txt('.side-title','scores'); txt('.side-note strong','localCalc'); txt('.side-note span','localCalcNote');
    txt('.hero-copy > .eyebrow','heroEyebrow'); txt('.hero-copy h1','heroTitle'); txt('.hero-copy > p','heroText'); txt('.hero-actions .primary','startPasi'); txt('.hero-actions .ghost','sourceApproach');
    attr('.hero-badges','aria-label','features'); const badges=document.querySelectorAll('.hero-badges span'); ['tools18','offline','referencesIncluded','githubReady'].forEach((k,i)=>{if(badges[i])badges[i].textContent=I.getUI(k);});
    attr('.hero-panel','aria-label','scoreSummary'); const stats=document.querySelectorAll('.hero-panel .mini-stat span'); if(stats[3])stats[3].textContent=I.getUI('bpdaiActivity');
    txt('#toolsGrid .section-heading .eyebrow','quickAccess'); txt('#toolsGrid .section-heading h2','toolsHeading');
    const searchLabel=q('.search-box'); if(searchLabel){ const input=searchLabel.querySelector('input'); const labelText=I.getUI('searchLabel'); searchLabel.childNodes.forEach(n=>{if(n.nodeType===3 && n.nodeValue.trim())n.nodeValue=labelText;}); if(input)input.placeholder=I.getUI('searchPlaceholder'); }
    txt('#references > .eyebrow','science'); txt('#references h1','sourcePolicy'); txt('#references > p','sourcePolicyText');
    const refNotice=q('#references .notice'); if(refNotice) refNotice.innerHTML=`<strong>${I.getUI('important')}</strong> ${I.getUI('importantText')}`;
    txt('#about h1','aboutTitle'); txt('#aboutText1','aboutText1'); txt('#aboutText2','aboutText2'); txt('#aboutContactLabel','aboutContactLabel'); txt('#aboutContactText','aboutContactText'); txt('#translationNotice','translationNote');
    txt('.footer-credit','credit'); const footerDivs=document.querySelectorAll('.footer > div'); if(footerDivs[1])footerDivs[1].textContent=I.getUI('footerDisclaimer');
    txt('.noscript','noscript');
  }

  function updateLanguageControl(){
    if(!I) return;
    const lang=I.languages.find(l=>l.code===I.getLang())||I.languages[0];
    document.querySelectorAll('#languageSwitcher [data-lang]').forEach(b=>{
      const active=b.dataset.lang===lang.code;
      b.classList.toggle('active',active);
      b.setAttribute('aria-pressed',String(active));
    });
    const switcher=document.getElementById('languageSwitcher');
    if(switcher) switcher.setAttribute('aria-label',I.getUI('language'));
  }

  function route(){
    const hash=(location.hash||'#home').slice(1);
    document.querySelectorAll('.page-section').forEach(s=>s.classList.remove('active'));
    document.querySelectorAll('.score-nav a').forEach(a=>a.classList.toggle('active',a.dataset.id===hash));
    const ltools=localizedTools();
    if(renderers[hash]){
      host.classList.add('active');
      const tool=ltools.find(t=>t.id===hash);
      renderers[hash](tool);
      if(I) I.apply(host);
      document.title=`${tool.code} — DermaScora`;
      window.scrollTo({top:0,behavior:'auto'});
    } else {
      host.classList.remove('active');
      const page=document.getElementById(hash)||document.getElementById('home');
      if(hash==='home'){document.querySelectorAll('[data-page="home"]').forEach(s=>s.classList.add('active'));}else page.classList.add('active');
      document.title=I?I.getUI('pageTitle'):'DermaScora — Dermatoloji Skorlama Araçları';
      window.scrollTo({top:0,behavior:'auto'});
    }
  }

  renderNav(); renderCards(); applyStaticUI(); updateLanguageControl();
  window.addEventListener('hashchange',route); route();

  const languageSwitcher=document.getElementById('languageSwitcher');
  if(languageSwitcher && I){
    languageSwitcher.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{
      I.setLang(btn.dataset.lang); applyStaticUI(); updateLanguageControl(); renderNav(); renderCards(); route();
    }));
  }

  document.getElementById('toolSearch').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();document.querySelectorAll('.tool-group').forEach(group=>{let visible=0;group.querySelectorAll('.tool-card').forEach(c=>{const hide=Boolean(q && !c.dataset.search.includes(q));c.classList.toggle('hidden',hide);if(!hide)visible++;});group.classList.toggle('hidden',visible===0);});});
  const themeBtn=document.getElementById('themeToggle');const saved=localStorage.getItem('cutismetra-theme');if(saved)document.documentElement.dataset.theme=saved;themeBtn.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('cutismetra-theme',next);});
})();
