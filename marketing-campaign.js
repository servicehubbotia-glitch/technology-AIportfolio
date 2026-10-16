/* Real campaign copy and original assets. Separate portfolio composition; no ad-account access. */
(()=>{
 'use strict';
 const $=id=>document.getElementById(id);
 const p=new URLSearchParams(location.search);
 const supportedUI=['en','nl','es'];
 const UI={
  en:{
   skip:'Skip to campaign',back:'Back to portfolio',brand:'SELECTED TECHNICAL WORK',
   kicker:'02 / GOOGLE ADS & PRODUCT MARKETING · CAMPAIGN PRODUCTION',
   heading:'The campaign is the product of the Studio.',
   lede:'Creative Studio brings together the marketing strategy, campaign messages, product photography, real app references and BOTIA’s robot. It prepares consistent advertising and product-presentation materials in multiple languages and formats.',
   stats:['campaign scenes','languages','production formats','video storyboard'],
   side:'Original campaign assets, connected through a multilingual creative-production workflow.',
   storyKicker:'THE CAMPAIGN / THE STORY',storyTitle:'Explore all nine scenes.',
   storyDesc:'Follow the marketing narrative, from the product packaging to its documented evidence. Choose a scene, then change language or format without replacing the campaign itself.',
   language:'Campaign language',format:'Production format',help:'All 14 original marketing translations are included. Screenshots of the Android app are original Spanish captures, even when the campaign language changes.',
   preview:'PORTFOLIO COMPOSITION / SELECTED SCENE',previewNote:'Separate portfolio composition using real BOTIA photographs, screenshots, robot and campaign copy. Not a pixel-for-pixel Studio export.',
   prev:'← Previous',next:'Next →',sequenceTitle:'The 25-second marketing narrative',
   sequenceText:'Seven timed scenes from the original Studio storyboard: label, camera, analysis, results, layers, explanations and sources. This viewer is a simplified narrative playback, not an exported video.',
   play:'▶ Play sequence',stop:'■ Stop',running:'Playing storyboard',finished:'Sequence complete',stopped:'',
   sceneLabel:'CAMPAIGN / SCENE',labels:['Product introduction','Look at the label','Front of the package','Ingredients on the back','Choose what matters','Take a photo','See the results','Explore the layers','Open the evidence'],
   descriptions:[
    'Start with the product, show front and back photographs, and connect the promise to the app and the BOTIA character.',
    'Introduce the camera-led task and explain that the product label is the starting point.',
    'Show the front of a real product before turning to its ingredient list.',
    'Reveal the ingredient list and the challenge of small-print reading.',
    'Explain that different people look for different information on the same label.',
    'Guide the viewer from the physical label to the photo-taking step.',
    'Present the actual result interface and the information that follows the scan.',
    'Show how separate information layers and nutrition can be explored.',
    'Complete the story with documentation, explainable criteria and the ability to consult sources.'
   ],
   capture:'Original app screenshot (ES)',brandSmall:'FOOD LABEL INTELLIGENCE',photoFront:'Product front',photoBack:'Ingredient label',
   materialKicker:'THE MATERIALS',materialTitle:'Original assets, connected production.',
   materialDesc:'A selection of the actual sources used by Creative Studio. The photographic assets are not stock illustrations, and the app captures remain clearly identified as Spanish originals.',
   materials:['Real product photography','The original ingredient label','Original app capture (ES)','Original results capture (ES)','Original BOTIA robot artwork'],
   architectureKicker:'THE TECHNOLOGY BEHIND THE CAMPAIGN',architectureTitle:'A campaign, not nine disconnected pictures.',
   architectureDesc:'Creative Studio separates campaign narrative, assets, translations and dimensions so that one marketing system can produce many consistent versions.',
   steps:[
    ['Narrative & positioning','Nine ordered campaign pieces with copy grounded in the marketing strategy.'],
    ['Real materials & data','Original photographs, app references, assets and documentation are reused.'],
    ['Internationalization','Fourteen localized dictionaries including Arabic RTL, plus eight format presets.'],
    ['Review & output','Static/animated preview, full-campaign navigation, a video storyboard and optional PNG batch export.']
   ],
   validation:'The Studio documented tests for 1,008 combinations (9 pieces × 14 languages × 8 formats). This is validation of output configurations, not proof that advertisements ran or achieved particular performance.',
   visit:'Visit BOTIA ↗',playLink:'Android on Google Play ↗',overview:'Technical case overview ↗',contact:'Discuss a project ↗'
  },
  nl:{
   skip:'Naar de campagne',back:'Terug naar portfolio',brand:'GESELECTEERD TECHNISCH WERK',
   kicker:'02 / GOOGLE ADS EN PRODUCTMARKETING · CAMPAGNEPRODUCTIE',
   heading:'De campagne is het resultaat van de Studio.',
   lede:'Creative Studio brengt marketingstrategie, campagneteksten, productfoto’s, echte app-referenties en de BOTIA-robot samen. Zo worden consistente reclame- en productpresentatiematerialen gemaakt voor verschillende talen en formaten.',
   stats:['campagneonderdelen','talen','productieformaten','video-storyboard'],
   side:'Oorspronkelijke campagnebestanden, verbonden in één meertalig productiesysteem.',
   storyKicker:'DE CAMPAGNE / HET VERHAAL',storyTitle:'Ontdek alle negen onderdelen.',
   storyDesc:'Volg het marketingverhaal van productverpakking tot gedocumenteerde bronnen. Kies een onderdeel en verander de taal of het formaat zonder de campagne opnieuw te maken.',
   language:'Campagnetaal',format:'Productieformaat',help:'Alle 14 originele campagnetalingen zijn beschikbaar. De Android-schermafbeeldingen zijn originele Spaanse opnamen, ook als je de campagnetaal wijzigt.',
   preview:'PORTFOLIOCOMPOSITIE / ONDERDEEL',previewNote:'Afzonderlijke portfoliocompositie met echte BOTIA-foto’s, schermafbeeldingen, robot en teksten. Geen exacte export van de Studio.',
   prev:'← Vorige',next:'Volgende →',sequenceTitle:'Het marketingverhaal in 25 seconden',
   sequenceText:'Zeven getimede scènes uit het originele Studio-storyboard: etiket, camera, analyse, resultaten, lagen, uitleg en bronnen. Dit is een vereenvoudigde weergave, geen geëxporteerde video.',
   play:'▶ Bekijk de reeks',stop:'■ Stop',running:'Story wordt afgespeeld',finished:'Reeks voltooid',stopped:'',
   sceneLabel:'CAMPAGNE / ONDERDEEL',labels:['Productintroductie','Lees het etiket','Voorkant van de verpakking','Ingrediënten op de achterkant','Kies wat voor jou telt','Maak een foto','Bekijk het resultaat','Verken de lagen','Open de bronnen'],
   descriptions:[
    'Toon het product, echte foto’s van voor- en achterkant, de app en het BOTIA-personage.',
    'Introduceer de foto-gestuurde handeling: het etiket is het uitgangspunt.',
    'Laat de voorkant van een echt product zien voordat de ingrediënten volgen.',
    'Toon de ingrediëntenlijst en het probleem van kleine letters.',
    'Laat zien dat verschillende mensen iets anders op hetzelfde etiket zoeken.',
    'Verbind de fysieke verpakking met het fotograferen van de ingrediënten.',
    'Presenteer de oorspronkelijke resultaatweergave en de informatie na de foto.',
    'Laat zien hoe afzonderlijke informatielagen en voeding kunnen worden onderzocht.',
    'Sluit af met documentatie, controleerbare criteria en toegang tot bronnen.'
   ],
   capture:'Originele app-schermafbeelding (ES)',brandSmall:'VOEDSELETIKET-INTELLIGENTIE',photoFront:'Voorkant',photoBack:'Ingrediëntenlijst',
   materialKicker:'HET MATERIAAL',materialTitle:'Originele middelen, samenhangende productie.',
   materialDesc:'Een selectie van de bestanden die Creative Studio echt gebruikt. De productfoto’s zijn geen stockbeelden en de app-schermafbeeldingen worden als Spaanse originelen aangeduid.',
   materials:['Echte productfotografie','De oorspronkelijke ingrediëntenlijst','Originele app-schermafbeelding (ES)','Originele resultaatweergave (ES)','Oorspronkelijke BOTIA-robot'],
   architectureKicker:'TECHNOLOGIE ACHTER DE CAMPAGNE',architectureTitle:'Eén campagne. Geen negen losse plaatjes.',
   architectureDesc:'Creative Studio scheidt campagneverhaal, middelen, vertalingen en afmetingen, zodat één systeem consistente versies kan produceren.',
   steps:[
    ['Verhaal en positionering','Negen campagneonderdelen met copy op basis van de marketingstrategie.'],
    ['Echte middelen en gegevens','Oorspronkelijke foto’s, app-referenties en documentatie worden hergebruikt.'],
    ['Internationalisering','Veertien woordenboeken waaronder Arabisch RTL, en acht formaatinstellingen.'],
    ['Controle en uitvoer','Statische/geanimeerde preview, navigatie, storyboard en optionele PNG-batchexport.']
   ],
   validation:'De Studio documenteerde tests van 1.008 combinaties (9 onderdelen × 14 talen × 8 formaten). Dat is configuratievalidatie, geen bewijs dat advertenties geplaatst zijn of resultaten hebben opgeleverd.',
   visit:'Bezoek BOTIA ↗',playLink:'Android op Google Play ↗',overview:'Technische casestudy ↗',contact:'Bespreek een project ↗'
  },
  es:{
   skip:'Ir a la campaña',back:'Volver al portfolio',brand:'PROYECTOS TÉCNICOS SELECCIONADOS',
   kicker:'02 / GOOGLE ADS Y MARKETING DE PRODUCTO · PRODUCCIÓN DE CAMPAÑAS',
   heading:'La campaña es el resultado de Creative Studio.',
   lede:'Creative Studio reúne la estrategia de marketing, los mensajes de campaña, las fotografías del producto, referencias reales de la aplicación y el robot de BOTIA. Organiza materiales publicitarios y de presentación del producto para diferentes idiomas y formatos.',
   stats:['piezas de campaña','idiomas','formatos de producción','guion de vídeo'],
   side:'Materiales originales de campaña integrados en un sistema de producción multilingüe.',
   storyKicker:'LA CAMPAÑA / SU HISTORIA',storyTitle:'Explora las nueve piezas.',
   storyDesc:'Sigue la narrativa de marketing desde el envase hasta la documentación. Elige una pieza, cambia de idioma y adapta el formato sin reconstruir la campaña.',
   language:'Idioma de la campaña',format:'Formato de producción',help:'Están disponibles las traducciones originales de los 14 idiomas. Las capturas de Android son originales en español, incluso cuando cambias el idioma de la campaña.',
   preview:'COMPOSICIÓN DEL PORTFOLIO / PIEZA SELECCIONADA',previewNote:'Composición realizada para el portfolio con fotografías, pantallas, robot y mensajes reales de BOTIA. No es una exportación idéntica a la del Studio privado.',
   prev:'← Anterior',next:'Siguiente →',sequenceTitle:'La narrativa de marketing en 25 segundos',
   sequenceText:'Siete escenas con tiempos del guion original del Studio: etiqueta, cámara, análisis, resultados, capas, explicaciones y fuentes. Esta reproducción es simplificada; no es un vídeo MP4 exportado.',
   play:'▶ Reproducir secuencia',stop:'■ Detener',running:'Reproduciendo el guion',finished:'Secuencia terminada',stopped:'',
   sceneLabel:'CAMPAÑA / PIEZA',labels:['Presentación del producto','Mirar la etiqueta','Frontal del envase','Ingredientes del reverso','Elegir lo que importa','Fotografiar','Ver los resultados','Explorar las capas','Abrir la documentación'],
   descriptions:[
    'Presentar el producto, mostrar fotografías originales del frente y el reverso, y relacionarlo con la aplicación y el personaje BOTIA.',
    'Introducir el uso de la cámara y dejar claro que el punto de partida es la etiqueta.',
    'Enseñar el frontal de un producto real antes de pasar a sus ingredientes.',
    'Mostrar la lista de ingredientes y la dificultad de leer la letra pequeña.',
    'Explicar que distintas personas buscan información diferente en una misma etiqueta.',
    'Conectar la etiqueta física con la toma de la fotografía.',
    'Enseñar la pantalla real de resultados y la información que sigue al escaneo.',
    'Mostrar las capas de información y la consulta de datos nutricionales.',
    'Cerrar con documentación, criterios verificables y la posibilidad de consultar fuentes.'
   ],
   capture:'Captura original de la app (ES)',brandSmall:'INTELIGENCIA DE ETIQUETAS ALIMENTARIAS',photoFront:'Frontal del producto',photoBack:'Lista de ingredientes',
   materialKicker:'LOS MATERIALES',materialTitle:'Material auténtico, producción reproducible.',
   materialDesc:'Una selección de fuentes auténticas utilizadas por Creative Studio. Las fotografías no son de archivo y las capturas de la aplicación se identifican como originales en español.',
   materials:['Fotografía real del producto','Lista real de ingredientes','Captura original de la app (ES)','Captura original de resultados (ES)','Robot original de BOTIA'],
   architectureKicker:'LA TECNOLOGÍA DETRÁS DEL MARKETING',architectureTitle:'Una campaña, no nueve imágenes sueltas.',
   architectureDesc:'Creative Studio separa narrativa, recursos, traducciones y dimensiones para que un mismo sistema produzca versiones coherentes del marketing.',
   steps:[
    ['Narrativa y posicionamiento','Nueve piezas ordenadas con mensajes basados en la estrategia de comunicación.'],
    ['Recursos y datos reales','Reutilización de fotos originales, pantallas de la app y documentación.'],
    ['Internacionalización','Catorce diccionarios localizados, incluido árabe RTL, y ocho formatos definidos.'],
    ['Revisión y salida','Vista estática o animada, navegación de campaña, secuencia de vídeo y exportación PNG opcional por lotes.']
   ],
   validation:'El Studio documenta pruebas de 1.008 combinaciones (9 piezas × 14 idiomas × 8 formatos). Es una validación de configuraciones, no significa que todos los anuncios se hayan publicado o que se hayan obtenido resultados publicitarios.',
   visit:'Visitar BOTIA ↗',playLink:'Android en Google Play ↗',overview:'Ficha técnica del proyecto ↗',contact:'Hablar sobre un proyecto ↗'
  }
 };
 const titles={ar:'العربية',de:'Deutsch',en:'English',es:'Español',fr:'Français',id:'Bahasa Indonesia',it:'Italiano',nl:'Nederlands',pl:'Polski',pt:'Português',ro:'Română',ru:'Русский',tr:'Türkçe',zh:'中文'};
 const media={
  "00":['front.jpeg','ingredients.jpeg','app-results-es.jpeg','robot-magnifier.png'],
  "01":['robot-greeting.png','app-home-es.jpeg'],
  "02":['front.jpeg','robot-pointing.png'],
  "03":['ingredients.jpeg','app-results-es.jpeg','robot-pointing.png'],
  "04":['ingredients.jpeg','app-home-es.jpeg'],
  "05":['robot-magnifier.png','app-home-es.jpeg'],
  "06":['app-results-es.jpeg','robot-up.png'],
  "07":['app-results-es.jpeg','nutrition.jpeg'],
  "08":['app-results-es.jpeg','robot-pointing.png']
 };
 const thumbs={
  "00":"front.jpeg","01":"robot-greeting.png","02":"front.jpeg","03":"ingredients.jpeg","04":"app-home-es.jpeg",
  "05":"robot-magnifier.png","06":"app-results-es.jpeg","07":"nutrition.jpeg","08":"robot-pointing.png"
 };
 const video=[
  {scene:'01',ms:2800},{scene:'05',ms:3200},{scene:'05',ms:2400},
  {scene:'06',ms:4200},{scene:'07',ms:3800},{scene:'08',ms:4500},{scene:'08',ms:4100}
 ];
 const totalDuration=video.reduce((sum,x)=>sum+x.ms,0);
 if(totalDuration!==25000)throw Error('Storyboard must total 25 seconds');
 let data=null;
 let uiLanguage=UI[p.get('lang')]?p.get('lang'):'en';
 let campaignLanguage=titles[p.get('creativeLang')]?p.get('creativeLang'):uiLanguage;
 let piece=/^0[0-8]$/.test(p.get('piece')||'')?p.get('piece'):'00';
 let format=p.get('format')||'feature';
 let timer=null,playStarted=0;
 const node=(tag,cls,value)=>{
  const e=document.createElement(tag);
  if(cls)e.className=cls;
  if(value!==undefined)e.textContent=value;
  return e;
 };
 const current=()=>UI[uiLanguage];
 const creativeData=()=>data.languages[campaignLanguage];
 const currentFormat=()=>data.formats.find(x=>x.id===format)||data.formats[0];
 const stop=(showMessage=false)=>{
  if(timer!==null){clearInterval(timer);timer=null}
  playStarted=0;
  if(showMessage)$('sequence-state').textContent=current().stopped||'';
  $('sequence-progress').style.width='0%';
  $('sequence-time').textContent='00:00 / 00:25';
 };
 function persist(){
  const q=new URL(location.href);q.searchParams.set('lang',uiLanguage);
  q.searchParams.set('creativeLang',campaignLanguage);
  q.searchParams.set('piece',piece);q.searchParams.set('format',format);
  history.replaceState(null,'',q.href);
 }
 function image(src,cssClass,alt){
  const img=document.createElement('img');img.src='./marketing-assets/'+src;
  img.alt=alt;img.className=cssClass||'';img.loading='lazy';return img;
 }
 function makeMedia(id){
  const box=node('div','art-media');
  const assets=media[id]||media['00'];
  const appNames=['app-home-es.jpeg','app-results-es.jpeg'];
  const robotNames=['robot-greeting.png','robot-magnifier.png','robot-pointing.png','robot-up.png'];
  const photoNames=['front.jpeg','ingredients.jpeg','nutrition.jpeg'];
  const toElement=name=>{
   const isApp=appNames.includes(name),isRobot=robotNames.includes(name);
   return image(name,isApp?'art-app-screen':isRobot?'art-robot':photoNames.includes(name)?'art-photo':'',
     isApp?current().capture:isRobot?'BOTIA':name.replace(/\.[a-z]+$/,''));
  };
  if(id==='00'){
   const pair=node('div','art-photo-pair');
   pair.append(toElement('front.jpeg'),toElement('ingredients.jpeg'));
   box.append(pair);return box;
  }
  const stack=node('div','art-stack');
  for(const src of assets.slice(0,2))stack.append(toElement(src));
  box.append(stack);
  return box;
 }
 function campaignCopy(id){
  const c=creativeData();
  if(id==='00'){
   return {headline:c.feature00.frontBackLine1+' '+c.feature00.frontBackLine2,short:c.feature00.helpLine};
  }
  return c.pieces[id];
 }
 function renderArt(){
  const ui=current(),c=creativeData(),fmt=currentFormat(),art=$('creative-art');
  const dark=['05','06','07'].includes(piece);
  art.classList.toggle('dark',dark);
  art.dataset.scene=piece;art.dataset.layout=fmt.layout;art.dataset.format=fmt.id;
  art.style.aspectRatio=fmt.width+' / '+fmt.height;
  const heroCopy=campaignCopy(piece);
  const top=node('div','art-top');
  top.append(node('span','',"BOTIA"),node('span','',piece+' / '+fmt.id.toUpperCase()));
  const core=node('div','art-core');
  const textBox=node('div','art-copy');textBox.lang=campaignLanguage;
  textBox.dir=c.dir==='rtl'?'rtl':'ltr';
  const bubble=node('div','art-bubble');
  bubble.append(node('h3','',heroCopy.headline));
  if(heroCopy.short)bubble.append(node('p','',heroCopy.short));
  textBox.append(bubble);
  const med=makeMedia(piece);
  core.append(textBox,med);
  const footer=node('div','art-footer');
  footer.append(node('span','',c.brand.name),node('span','',fmt.width+' × '+fmt.height));
  art.replaceChildren(top,core,footer);
  art.setAttribute('aria-label',ui.labels[Number(piece)]+' / '+titles[campaignLanguage]);
  $('format-dimensions').textContent=fmt.width+' × '+fmt.height;
 }
 function renderGallery(){
  const gallery=$('campaign-gallery'),ui=current(),c=creativeData();
  gallery.replaceChildren();
  for(const id of data.campaign.pages){
   const selected=id===piece;
   const b=node('button','');b.type='button';b.setAttribute('aria-pressed',String(selected));
   b.setAttribute('aria-label',id+' — '+ui.labels[Number(id)]);
   const figure=node('div','thumb-media'+(['05','06','07'].includes(id)?' dark':''));
   const thumb=thumbs[id];
   figure.append(image(thumb,['front.jpeg','ingredients.jpeg','nutrition.jpeg'].includes(thumb)?'photo':'',ui.labels[Number(id)]));
   const text=node('div','thumb-text');
   text.append(node('strong','',id),node('span','',ui.labels[Number(id)]));
   b.append(figure,text);
   b.addEventListener('click',()=>{stop();piece=id;persist();render()});
   gallery.append(b);
  }
 }
 function renderScene(){
  const ui=current(),copy=campaignCopy(piece);
  $('scene-role').textContent=ui.sceneLabel+' '+piece;
  $('scene-counter').textContent=piece+' / 08';
  $('scene-title').textContent=ui.labels[Number(piece)];
  const quote=$('scene-copy');quote.replaceChildren(node('span','',copy.headline));
  if(copy.short)quote.append(node('small','',copy.short));
  quote.lang=campaignLanguage;quote.dir=creativeData().dir==='rtl'?'rtl':'ltr';
  $('scene-description').textContent=ui.descriptions[Number(piece)];
  renderArt();
  renderGallery();
 }
 function translate(){
  const ui=current();
  document.documentElement.lang=uiLanguage;
  document.title=uiLanguage==='es'?'Creative Studio — Campaña de marketing de BOTIA | Portfolio':
     uiLanguage==='nl'?'Creative Studio — Marketingcampagne BOTIA | Portfolio':
     'Creative Studio — BOTIA Marketing Campaign | Portfolio';
  const labels={
   'skip-link':ui.skip,'return-text':ui.back,'brand-sub':ui.brand,'intro-kicker':ui.kicker,
   'intro-heading':ui.heading,'intro-description':ui.lede,'intro-side-caption':ui.side,
   'explore-kicker':ui.storyKicker,'campaign-heading':ui.storyTitle,'campaign-description':ui.storyDesc,
   'campaign-language-label':ui.language,'campaign-format-label':ui.format,'language-help':ui.help,
   'preview-label':ui.preview,'preview-explanation':ui.previewNote,
   'prev-label':ui.prev,'next-label':ui.next,'sequence-heading':ui.sequenceTitle,
   'sequence-description':ui.sequenceText,'play-label':ui.play,'stop-label':ui.stop,
   'evidence-kicker':ui.materialKicker,'evidence-title':ui.materialTitle,
   'evidence-description':ui.materialDesc,
   'architecture-kicker':ui.architectureKicker,'architecture-title':ui.architectureTitle,
   'architecture-description':ui.architectureDesc,'validation-note':ui.validation,
   'visit-botia':ui.visit,'play-botia':ui.playLink,'other-cases':ui.overview,'contact-link':ui.contact
  };
  Object.entries(labels).forEach(([id,val])=>{$(id).textContent=val});
  ['pieces','languages','formats','sequence'].forEach((k,i)=>$('stat-'+k).textContent=ui.stats[i]);
  ['front','label','app','result','robot'].forEach((k,i)=>$('material-'+k).textContent=ui.materials[i]);
  for(let i=0;i<4;i++){
   $('architecture-head-'+(i+1)).textContent=ui.steps[i][0];
   $('architecture-body-'+(i+1)).textContent=ui.steps[i][1];
  }
  $('return-link').href='./?lang='+uiLanguage+'#work';
  $('other-cases').href='./case-studies.html?project=creative&lang='+uiLanguage;
  $('page-language-switch').setAttribute('aria-label',ui.language);
  document.querySelectorAll('[data-page-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.pageLanguage===uiLanguage)));
  $('campaign-gallery').setAttribute('aria-label',ui.storyTitle);
 }
 function render(){
  if(!data)return;
  translate();
  const selects=[$('campaign-language'),$('campaign-format')];
  selects[0].replaceChildren(...Object.entries(titles).map(([code,name])=>{
   const opt=node('option','',name);opt.value=code;return opt;
  }));
  selects[0].value=campaignLanguage;
  selects[1].replaceChildren(...data.formats.map(o=>{
   const opt=node('option','',o.name+' · '+o.width+' × '+o.height);opt.value=o.id;return opt;
  }));
  selects[1].value=format;
  renderScene();
 }
 document.querySelectorAll('[data-page-language]').forEach(b=>{
  b.addEventListener('click',()=>{
   const oldUI=uiLanguage;uiLanguage=b.dataset.pageLanguage;
   if(campaignLanguage===oldUI)campaignLanguage=uiLanguage;
   stop();persist();render();
  });
 });
 $('campaign-language').addEventListener('change',e=>{stop();campaignLanguage=e.target.value;persist();render()});
 $('campaign-format').addEventListener('change',e=>{stop();format=e.target.value;persist();render()});
 function nextScene(delta){
  stop();const id=(Number(piece)+delta+9)%9;piece=String(id).padStart(2,'0');persist();render();
 }
 $('prev-scene').addEventListener('click',()=>nextScene(-1));
 $('next-scene').addEventListener('click',()=>nextScene(1));
 function updatePlayback(){
  const elapsed=Math.min(totalDuration,Date.now()-playStarted);
  let used=0,active=video[video.length-1].scene;
  for(const row of video){
   used+=row.ms;
   if(elapsed<used){active=row.scene;break}
  }
  if(piece!==active){piece=active;renderScene()}
  $('sequence-progress').style.width=(elapsed/totalDuration*100)+'%';
  const seconds=Math.floor(elapsed/1000);
  $('sequence-time').textContent='00:'+String(seconds).padStart(2,'0')+' / 00:25';
  if(elapsed===totalDuration){clearInterval(timer);timer=null;$('sequence-state').textContent=current().finished;persist()}
 }
 $('play-sequence').addEventListener('click',()=>{
  stop();playStarted=Date.now();$('sequence-state').textContent=current().running;
  updatePlayback();timer=setInterval(updatePlayback,170);
 });
 $('stop-sequence').addEventListener('click',()=>stop(true));
 window.addEventListener('beforeunload',()=>{if(timer!==null)clearInterval(timer)});
 fetch('./marketing-campaign-data.json',{cache:'no-store'})
 .then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()})
 .then(json=>{
   if(Object.keys(json.languages||{}).length!==14||json.formats?.length!==8||json.campaign?.pages?.length!==9)
     throw Error('Campaign data incomplete');
   data=json;
   if(!data.formats.some(x=>x.id===format))format='feature';
   render();
 })
 .catch(err=>{
   const alert=node('p','', 'Campaign data could not load: '+err.message);
   alert.setAttribute('role','alert');
   $('campaign-gallery').replaceChildren(alert);
 });
})();