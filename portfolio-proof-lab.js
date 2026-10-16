/* Interactive, intentionally illustrative walkthroughs. No external calls or private data. */
(()=>{
 'use strict';
 const section=document.getElementById('explore');
 if(!section) return;
 const names={botia:'BOTIA',creative:'Creative Studio',knowledge:'Knowledge Base',reintegration:'MyReintegration'};
 const order=Object.keys(names);
 const t={
  en:{
   kicker:'EXPLORE / TECHNICAL PROOF',heading:'Look inside the work.',lede:'Choose a project to inspect a technical decision, a representative workflow and the public evidence available. The interactive examples are illustrations, not live services.',tabAria:'Choose a project',stageAria:'Inspect a technical step',preview:'ILLUSTRATIVE WALKTHROUGH',caption:'Illustrative view — no production systems or private data accessed.',privateNote:'The source or documents are private. Detailed examples can be discussed directly without publishing restricted material.',
   projects:{
    botia:{status:'PUBLISHED PRODUCT · PUBLIC EVIDENCE',title:'From label image to documented explanation',intro:'BOTIA brings together AI-assisted text extraction, explicit decision rules and evidence-linked information. Select a stage to see the separation of responsibilities.',steps:[
     ['Image','Food label','A photograph of a food label provides the input. This illustration does not upload a picture.'],
     ['OCR','Text extraction','The product uses Gemini in a Google Cloud workflow to extract usable text from label images.'],
     ['Rules','Explicit criteria','A Python decision engine processes extracted ingredient information with defined rules rather than treating an LLM response as the product decision.'],
     ['Sources','Documented evidence','Structured ingredient information links explanations with scientific and regulatory source material, including limits and uncertainty.'],
     ['Result','Useful explanation','The Android and multilingual website present relevant information in separate layers.']
    ],links:[['Visit BOTIA','https://www.botia-safefood.com/'],['Try public interface','https://www.botia-safefood.com/try.html'],['Android on Google Play','https://play.google.com/store/apps/details?id=com.botia.safefood'],['Public web code','https://github.com/servicehubbotia-glitch/Botia-web']]},
    creative:{"status":"BOTIA MARKETING CAMPAIGN · ORIGINAL ASSETS","title":"A marketing campaign produced through Creative Studio.","intro":"The Studio organizes nine marketing pieces using genuine BOTIA photography, app captures and campaign copy. Explore three moments of that story, then open the complete fourteen-language campaign.","steps":[["The campaign","Real product, real label","The campaign introduces BOTIA using photographs of a product's front and its actual ingredient label, accompanied by the original robot artwork."],["Take the photo","From packaging to product use","The marketing explains the core action: photograph the ingredients. The composition incorporates an original Spanish application capture."],["The evidence","Documentation closes the story","The story ends with BOTIA's evidence-linked explanations and the ability to consult the sources. The result screenshot is an original Spanish capture."]],"links":[],"private":true},
    knowledge:{status:'DOCUMENT GOVERNANCE · PRIVATE REPOSITORY',title:'Evidence that can be traced',intro:'The knowledge base separates source authority, integrity, licensing and version awareness. Select a control to explore the documented method.',steps:[
     ['Sources','Classify the source','Official institutional documents, scholarly literature and internally developed criteria are stored as separate classes.'],
     ['Integrity','Preserve integrity','Document records include provenance and SHA-256 hashes where the source file can be verified.'],
     ['Licences','Respect reuse rights','The catalogue distinguishes materials that can be redistributed from sources that must remain linked or restricted.'],
     ['Watchlist','Monitor change','A twelve-entry EUR-Lex watchlist records regulatory identifiers and known consolidation dates. The interface shown here is a schematic, not proof that an alert was dispatched.']
    ],links:[['Public BOTIA documentation','https://www.botia-safefood.com/']],private:true},
    reintegration:{status:'WORKING APPLICATION · PUBLIC CODE / PRIVATE DATA',title:'From someone’s Excel sheet to a personal web tool',intro:'An individual was entering activities into an Excel sheet. The recording workflow was extended into a private web app with more fields and reports. This demonstration only uses invented values.',steps:[
     ['Excel starting point','A record sheet used by one person','The starting point was an Excel sheet for entering activities. The requirement was to extend it with more detail.'],
     ['Extended entry','More fields, private access','The web application supports expanded records while Google OAuth and revision checks protect editing.'],
     ['Reports','Export useful reports','The application provides week-based PDF, Excel, CSV and draft-email outputs for operational reporting.']
    ],links:[['Inspect public GitHub code','https://github.com/servicehubbotia-glitch/My-Reintegration'],['Open app (sign-in required)','https://servicehubbotia-glitch.github.io/My-Reintegration/']]}
   }
  },
  nl:{
   kicker:'ONTDEK / TECHNISCHE BEWIJZEN',heading:'Bekijk hoe de projecten werken.',lede:'Kies een project en ontdek een technische keuze, een voorbeeldproces en het beschikbare openbare bewijsmateriaal. De interactieve voorbeelden zijn illustraties, geen live diensten.',tabAria:'Kies een project',stageAria:'Bekijk een technische stap',preview:'SCHEMATISCHE DEMONSTRATIE',caption:'Schematische weergave — zonder toegang tot productiesystemen of privégegevens.',privateNote:'De broncode of documenten zijn privé. Nadere voorbeelden kunnen afzonderlijk worden besproken, zonder beperkt materiaal te publiceren.',
   projects:{
    botia:{status:'GEPUBLICEERD PRODUCT · OPENBAAR BEWIJS',title:'Van etiketfoto naar onderbouwde uitleg',intro:'BOTIA verbindt AI-ondersteunde tekstextractie, expliciete beslisregels en onderbouwde informatie. Kies een stap om de taakverdeling te zien.',steps:[
     ['Afbeelding','Etiketfoto','Een foto van een voedingsetiket vormt de invoer. In deze demonstratie wordt geen afbeelding geüpload.'],
     ['OCR','Tekstextractie','Gemini ondersteunt de tekstherkenning binnen een Google Cloud-verwerkingsproces.'],
     ['Regels','Expliciete criteria','Een Python-regelengine verwerkt herkende ingrediënten volgens vastgelegde regels. Een LLM-antwoord bepaalt niet zelfstandig de uitkomst.'],
     ['Bronnen','Onderbouwde informatie','Gestructureerde ingrediënteninformatie koppelt uitleg aan wetenschappelijke en wettelijke bronnen, met aandacht voor grenzen en onzekerheid.'],
     ['Resultaat','Begrijpelijke uitleg','De Android-app en meertalige website tonen relevante informatie in afzonderlijke lagen.']
    ],links:[['Bezoek BOTIA','https://www.botia-safefood.com/'],['Probeer de openbare interface','https://www.botia-safefood.com/try.html'],['Android op Google Play','https://play.google.com/store/apps/details?id=com.botia.safefood'],['Openbare webcode','https://github.com/servicehubbotia-glitch/Botia-web']]},
    creative:{"status":"BOTIA-MARKETINGCAMPAGNE · ORIGINELE MATERIALEN","title":"Een marketingcampagne geproduceerd met Creative Studio.","intro":"De Studio organiseert negen marketingonderdelen met echte BOTIA-foto’s, app-schermafbeeldingen en campagneteksten. Bekijk drie momenten en open daarna de volledige campagne in veertien talen.","steps":[["De campagne","Echt product, echt etiket","De campagne introduceert BOTIA met originele foto’s van de voorkant en de ingrediëntenlijst van een product, aangevuld met het echte robotontwerp."],["Maak de foto","Van verpakking naar gebruik","De marketing legt de hoofdhandeling uit: fotografeer de ingrediënten. De compositie bevat een originele Spaanse app-schermafbeelding."],["De bronnen","Documentatie sluit het verhaal af","Het verhaal eindigt bij BOTIA's onderbouwde uitleg en raadpleegbare bronnen. De resultaatweergave komt uit een originele Spaanse schermafbeelding."]],"links":[],"private":true},
    knowledge:{status:'DOCUMENTBEHEER · PRIVÉREPOSITORY',title:'Traceerbare onderbouwing',intro:'De kennisbank scheidt bronstatus, integriteit, licenties en versiebeheer. Kies een onderdeel om de documentatiemethode te verkennen.',steps:[
     ['Bronnen','Bronnen classificeren','Officiële documenten, wetenschappelijke publicaties en eigen criteria worden in verschillende categorieën bewaard.'],
     ['Integriteit','Integriteit vastleggen','Documentrecords bevatten herkomstgegevens en waar mogelijk SHA-256-controlewaarden.'],
     ['Licenties','Hergebruik respecteren','De catalogus onderscheidt herpubliceerbaar materiaal van bronnen die alleen mogen worden gelinkt of beperkt toegankelijk blijven.'],
     ['Volglijst','Wijzigingen volgen','Een lijst van twaalf EUR-Lex-verordeningen bevat identificaties en bekende consolidatiedata. De illustratie toont geen bewijs dat meldingen zijn verzonden.']
    ],links:[['Openbare BOTIA-documentatie','https://www.botia-safefood.com/']],private:true},
    reintegration:{status:'WERKENDE WEBAPP · OPENBARE CODE / PRIVÉDATA',title:'Van iemands Excel-blad naar een persoonlijke webapp',intro:'Iemand registreerde activiteiten in Excel. De invoer werd uitgebreid tot een privéwebapp met meer velden en rapporten. Dit voorbeeld bevat alleen fictieve gegevens.',steps:[
     ['Excel-begin','Een blad voor de registratie van één persoon','Het begon met een Excel-overzicht. De bedoeling was de invoer uit te breiden en makkelijker te maken.'],
     ['Uitgebreide invoer','Meer velden en privétoegang','De webapp ondersteunt uitgebreidere registraties en gebruikt OAuth en revisiecontrole voor veilig bewerken.'],
     ['Rapporten','Rapporten exporteren','De toepassing ondersteunt PDF-, Excel-, CSV- en concept-e-mailrapporten per week.']
    ],links:[['Bekijk openbare GitHub-code','https://github.com/servicehubbotia-glitch/My-Reintegration'],['Open app (aanmelding vereist)','https://servicehubbotia-glitch.github.io/My-Reintegration/']]}
   }
  },
  es:{
   kicker:'EXPLORAR / EVIDENCIAS TÉCNICAS',heading:'Descubre cómo funcionan los proyectos.',lede:'Elige un proyecto para explorar una decisión técnica, un proceso representativo y las pruebas públicas disponibles. Las demostraciones interactivas son ilustraciones, no servicios en vivo.',tabAria:'Elegir un proyecto',stageAria:'Explorar una etapa técnica',preview:'DEMOSTRACIÓN ILUSTRATIVA',caption:'Representación ilustrativa — sin acceso a sistemas de producción ni a datos privados.',privateNote:'El código o los documentos son privados. Podemos mostrar ejemplos seleccionados sin publicar material restringido.',
   projects:{
    botia:{status:'PRODUCTO PUBLICADO · EVIDENCIAS PÚBLICAS',title:'De la etiqueta a una explicación documentada',intro:'BOTIA combina extracción de texto asistida por IA, reglas de decisión explícitas e información vinculada a fuentes. Selecciona una fase para ver cómo se separan las responsabilidades.',steps:[
     ['Imagen','Fotografía de una etiqueta','La entrada es una imagen de una etiqueta alimentaria. Esta demostración no sube fotografías.'],
     ['OCR','Extracción de texto','Gemini asiste el reconocimiento del texto en un flujo de procesamiento de Google Cloud.'],
     ['Reglas','Criterios programados','Un motor de reglas en Python procesa los ingredientes extraídos siguiendo criterios definidos; la decisión no depende directamente de una respuesta libre del LLM.'],
     ['Fuentes','Evidencia documentada','La información estructurada enlaza explicaciones con fuentes científicas y regulatorias, incluyendo sus límites e incertidumbres.'],
     ['Resultado','Explicaciones útiles','La aplicación Android y la web multilingüe presentan información relevante en distintas capas.']
    ],links:[['Visitar BOTIA','https://www.botia-safefood.com/'],['Probar la interfaz pública','https://www.botia-safefood.com/try.html'],['Android en Google Play','https://play.google.com/store/apps/details?id=com.botia.safefood'],['Código web público','https://github.com/servicehubbotia-glitch/Botia-web']]},
    creative:{"status":"CAMPAÑA DE MARKETING BOTIA · MATERIALES ORIGINALES","title":"La campaña de marketing producida con Creative Studio.","intro":"El Studio organiza nueve piezas de marketing con fotografías auténticas de BOTIA, capturas de la aplicación y textos reales de campaña. Explora tres momentos y después abre la campaña completa en catorce idiomas.","steps":[["La campaña","Producto y etiqueta reales","La presentación de BOTIA parte de fotografías auténticas del frente del producto y su lista de ingredientes, acompañadas del robot original."],["Haz la foto","Del envase al uso de BOTIA","La comunicación muestra la acción principal: fotografiar los ingredientes. La composición incluye una captura original de la aplicación en español."],["La evidencia","La documentación completa la historia","La campaña termina explicando que BOTIA ofrece información documentada y fuentes consultables. La pantalla de resultados es una captura real en español."]],"links":[],"private":true},
    knowledge:{status:'GOBERNANZA DOCUMENTAL · REPOSITORIO PRIVADO',title:'Evidencia que puede rastrearse',intro:'La base documental diferencia autoridad de las fuentes, integridad, licencias y versiones. Selecciona una opción para explorar el método.',steps:[
     ['Fuentes','Clasificación de fuentes','Los documentos oficiales, la literatura científica y los criterios internos se conservan en categorías diferenciadas.'],
     ['Integridad','Integridad documental','Los registros conservan procedencia y huellas SHA-256 cuando es posible verificar el archivo original.'],
     ['Licencias','Derechos de reutilización','El catálogo distingue material redistribuible, fuentes que solo pueden enlazarse y contenido restringido.'],
     ['Vigilancia','Seguimiento de cambios','Una lista de doce normas de EUR-Lex recoge identificadores y fechas de consolidación conocidas. Esta ilustración no demuestra que se haya enviado una alerta.']
    ],links:[['Documentación pública de BOTIA','https://www.botia-safefood.com/']],private:true},
    reintegration:{status:'APLICACIÓN OPERATIVA · CÓDIGO PÚBLICO / DATOS PRIVADOS',title:'De la hoja Excel de una persona a una aplicación útil',intro:'Una persona registraba actividades en Excel. Amplié la entrada de datos y desarrollé una aplicación web privada con informes. Esta demostración utiliza únicamente datos inventados.',steps:[
     ['Inicio en Excel','Una hoja de registro para una persona','El punto de partida era una hoja Excel donde se introducían actividades. El objetivo era ampliar la información disponible.'],
     ['Entrada ampliada','Más campos y acceso protegido','La aplicación web permite registrar más información y emplea OAuth y control de revisiones para proteger la edición.'],
     ['Informes','Exportación de informes','La aplicación ofrece PDF, Excel, CSV y borradores de correo para informes semanales.']
    ],links:[['Consultar código público en GitHub','https://github.com/servicehubbotia-glitch/My-Reintegration'],['Abrir aplicación (requiere acceso)','https://servicehubbotia-glitch.github.io/My-Reintegration/']]}
   }
  }
 };
 const visualText={
  en:{ids:['BOTIA','CAMPAIGN','SOURCES','JOURNAL'],studio:'STUDIO / SAMPLE',formats:'14 languages · 8 format presets · RTL support',ledger:'DOCUMENT / SCHEMA EXAMPLE',rows:[['SOURCE TYPE','OFFICIAL / STUDY / INTERNAL'],['CHECKSUM','SHA-256'],['RIGHTS','REVIEWED'],['CONSOLIDATION','TRACKED']],week:'WEEK / SAMPLE',privateData:'NO PERSONAL DATA',example:'Example records only'},
  nl:{ids:['BOTIA','CAMPAGNE','BRONNEN','DAGBOEK'],studio:'STUDIO / VOORBEELD',formats:'14 talen · 8 formaatinstellingen · RTL-ondersteuning',ledger:'DOCUMENT / SCHEMA VOORBEELD',rows:[['BRONTYPE','OFFICIEEL / STUDIE / INTERN'],['CONTROLEWAARDE','SHA-256'],['RECHTEN','GECONTROLEERD'],['CONSOLIDATIE','GEVOLGD']],week:'WEEK / VOORBEELD',privateData:'GEEN PERSOONSGEGEVENS',example:'Alleen fictieve gegevens'},
  es:{ids:['BOTIA','CAMPAÑA','FUENTES','REGISTRO'],studio:'ESTUDIO / EJEMPLO',formats:'14 idiomas · 8 formatos · soporte RTL',ledger:'DOCUMENTO / ESQUEMA ILUSTRATIVO',rows:[['TIPO DE FUENTE','OFICIAL / ESTUDIO / INTERNO'],['HUELLA DIGITAL','SHA-256'],['DERECHOS','REVISADOS'],['CONSOLIDACIÓN','SEGUIMIENTO']],week:'SEMANA / EJEMPLO',privateData:'SIN DATOS PERSONALES',example:'Registros ficticios'}
 };
 const campaignSourceText={"en":{"status":"BOTIA MARKETING CAMPAIGN · ORIGINAL ASSETS","title":"A marketing campaign produced through Creative Studio.","intro":"The Studio organizes nine marketing pieces using genuine BOTIA photography, app captures and campaign copy. Explore three moments of that story, then open the complete fourteen-language campaign.","steps":[["The campaign","Real product, real label","The campaign introduces BOTIA using photographs of a product's front and its actual ingredient label, accompanied by the original robot artwork."],["Take the photo","From packaging to product use","The marketing explains the core action: photograph the ingredients. The composition incorporates an original Spanish application capture."],["The evidence","Documentation closes the story","The story ends with BOTIA's evidence-linked explanations and the ability to consult the sources. The result screenshot is an original Spanish capture."]],"copy":[["The front tells you a story.","The ingredients are on the back.","Photograph the label and BOTIA helps you read it."],["Take the photo.","BOTIA takes it from there.",""],["It's not magic. It's documented.","And you can check it yourself.",""]],"sceneNote":"Original BOTIA assets · portfolio composition, not an exact Studio export.","note":"The original editor stays private. The photos, robot artwork and Spanish app captures shown here come from the real campaign. View all nine pieces and languages in the public gallery.","preview":"REAL CAMPAIGN MATERIALS / SELECTED MOMENT","caption":"Original photographs, app screenshots (ES) and robot artwork, assembled for the portfolio.","imageLabel":"ORIGINAL APP CAPTURE · ES","heading":"MARKETING /","stageIds":["00","05","08"],"originalLabel":"ORIGINAL BOTIA MATERIAL"},"nl":{"status":"BOTIA-MARKETINGCAMPAGNE · ORIGINELE MATERIALEN","title":"Een marketingcampagne geproduceerd met Creative Studio.","intro":"De Studio organiseert negen marketingonderdelen met echte BOTIA-foto’s, app-schermafbeeldingen en campagneteksten. Bekijk drie momenten en open daarna de volledige campagne in veertien talen.","steps":[["De campagne","Echt product, echt etiket","De campagne introduceert BOTIA met originele foto’s van de voorkant en de ingrediëntenlijst van een product, aangevuld met het echte robotontwerp."],["Maak de foto","Van verpakking naar gebruik","De marketing legt de hoofdhandeling uit: fotografeer de ingrediënten. De compositie bevat een originele Spaanse app-schermafbeelding."],["De bronnen","Documentatie sluit het verhaal af","Het verhaal eindigt bij BOTIA's onderbouwde uitleg en raadpleegbare bronnen. De resultaatweergave komt uit een originele Spaanse schermafbeelding."]],"copy":[["Op de voorkant vertellen ze een verhaal.","Op de achterkant staan de ingrediënten.","Fotografeer het etiket en BOTIA helpt je het te lezen."],["Maak de foto.","BOTIA doet de rest.",""],["Geen magie. Wel documentatie.","En die kun je zelf controleren.",""]],"sceneNote":"Originele BOTIA-materialen · portfoliocompositie, geen exacte Studio-export.","note":"De originele editor blijft privé. De foto's, robot en Spaanse app-schermafbeeldingen zijn afkomstig uit de echte campagne. Alle negen onderdelen zijn in de openbare galerij te bekijken.","preview":"ECHT CAMPAGNEMATERIAAL / SELECTIE","caption":"Originele productfoto’s, app-schermafbeeldingen (ES) en robotmateriaal, samengebracht voor het portfolio.","imageLabel":"ORIGINELE APP-SCHERMAFBEELDING · ES","heading":"CAMPAGNE /","stageIds":["00","05","08"],"originalLabel":"ORIGINELE BOTIA-BESTANDEN"},"es":{"status":"CAMPAÑA DE MARKETING BOTIA · MATERIALES ORIGINALES","title":"La campaña de marketing producida con Creative Studio.","intro":"El Studio organiza nueve piezas de marketing con fotografías auténticas de BOTIA, capturas de la aplicación y textos reales de campaña. Explora tres momentos y después abre la campaña completa en catorce idiomas.","steps":[["La campaña","Producto y etiqueta reales","La presentación de BOTIA parte de fotografías auténticas del frente del producto y su lista de ingredientes, acompañadas del robot original."],["Haz la foto","Del envase al uso de BOTIA","La comunicación muestra la acción principal: fotografiar los ingredientes. La composición incluye una captura original de la aplicación en español."],["La evidencia","La documentación completa la historia","La campaña termina explicando que BOTIA ofrece información documentada y fuentes consultables. La pantalla de resultados es una captura real en español."]],"copy":[["Por delante te cuentan una historia.","Por detrás están los ingredientes.","Fotografía la etiqueta y BOTIA te ayuda a leerla."],["Haz la foto.","Del resto se encarga BOTIA.",""],["No es magia. Está documentado.","Y tú puedes comprobarlo.",""]],"sceneNote":"Material original de BOTIA · composición para el portfolio, no una exportación idéntica del Studio.","note":"El editor original sigue privado. Las fotos, los robots y las capturas de la aplicación en español proceden de la campaña auténtica. Puedes explorar las nueve piezas y los idiomas en la galería completa.","preview":"MATERIALES REALES / MOMENTOS DE CAMPAÑA","caption":"Fotografías originales, capturas de la app (ES) y robot auténtico, reunidos para el portfolio.","imageLabel":"CAPTURA ORIGINAL DE LA APP · ES","heading":"CAMPAÑA /","stageIds":["00","05","08"],"originalLabel":"MATERIAL ORIGINAL DE BOTIA"}};
 const visualLocale=()=>visualText[window.portfolioLanguage]||visualText.en;
 const $=id=>document.getElementById(id);
 const tabs=[...section.querySelectorAll('[data-lab-project]')];
 let active='botia';
 let selected=0;
 const deepLink=location.hash.match(/^#explore-(botia|creative|knowledge|reintegration)$/);
 if(deepLink) active=deepLink[1];
 const lang=()=>t[window.portfolioLanguage]||t.en;
 const titlebar=$('lab-preview-label'), preview=$('lab-preview'), controls=$('lab-controls'), explain=$('lab-explanation'), links=$('lab-links');
 const node=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el};
 function pipeline(data){
  const root=node('div','proof-pipeline');
  const symbols=['▧','⌁','{ }','≡','▣'];
  data.steps.forEach(([label],i)=>{
   if(i){root.append(node('span','proof-pipeline-arrow','→'))}
   const item=node('div','proof-pipeline-node'+(selected===i?' active':''));
   item.append(node('div','proof-pipeline-box',symbols[i]||'•'),node('small','',label));root.append(item);
  });return root;
 }
 function creative(data){
  // A marketing overview using source materials already published in marketing-assets/.
  // The compositions are created for the portfolio, not passed off as Studio exports.
  const langCode=window.portfolioLanguage||'en';
  const info=campaignSourceText[langCode]||campaignSourceText.en;
  const piece=info.stageIds[selected];
  const root=node('figure','proof-campaign-card');
  root.dataset.piece=piece;
  const meta=node('div','proof-campaign-meta');
  meta.append(node('span','',"BOTIA / "+piece),node('span','',info.originalLabel));
  root.append(meta);
  const message=node('div','proof-campaign-message');
  message.append(node('strong','',info.copy[selected][0]),node('span','',info.copy[selected][1]));
  if(info.copy[selected][2])message.append(node('small','',info.copy[selected][2]));
  root.append(message);
  const visuals=node('div','proof-campaign-images');
  const addImg=(filename,kind,alt)=>{
    const im=node('img','proof-campaign-image '+kind);
    im.src='./marketing-assets/'+filename;im.alt=alt;im.loading='lazy';
    im.decoding='async';visuals.append(im);return im;
  };
  if(selected===0){
    addImg('front.jpeg','product','Product front');
    addImg('ingredients.jpeg','product','Ingredient label');
    addImg('robot-magnifier.png','robot','Original BOTIA robot');
  }else if(selected===1){
    addImg('ingredients.jpeg','product','Ingredient label');
    addImg('app-home-es.jpeg','screen','Original app screenshot (ES)');
    addImg('robot-pointing.png','robot','Original BOTIA robot');
  }else{
    addImg('app-results-es.jpeg','screen','Original results screenshot (ES)');
    addImg('robot-pointing.png','robot','Original BOTIA robot');
  }
  root.append(visuals);
  if(selected!==0)root.append(node('div','proof-campaign-capture-note',info.imageLabel));
  const legend=node('figcaption','proof-campaign-legend',info.sceneNote);
  root.append(legend);
  return root;
 } function knowledge(data){
  const root=node('div','proof-doc-table');
  const isWatch=selected===3;
  root.append(node('div','proof-doc-head',isWatch?'EUR-LEX / WATCHLIST':'DOCUMENT / SOURCE GOVERNANCE'));
  const rows=isWatch?
    [['CELEX','02008R1333'],['KNOWN VERSION','2026-02-18'],['PRIORITY','CRITICA'],['MODE','CONFIGURATION']]:
    visualLocale().rows;
  rows.forEach(([label,value],i)=>{
    const row=node('div','proof-doc-row');if((isWatch&&i===1)||(!isWatch&&i===selected))row.style.background='#E6F2FF';
    row.append(node('span','',label),node('strong','',value));root.append(row);
  });
  return root;
 }
 function reintegration(data){
  const locale=window.portfolioLanguage||'en';
  const words={
    en:{excel:'EXCEL / ORIGINAL ENTRY',form:'WEB / EXPANDED FORM',report:'WEEK / EXAMPLE REPORT',date:'Date',activity:'Activity',time:'Minutes',category:'Category',status:'Status',example:'FICTITIOUS DATA',total:'1 h 15 m'},
    nl:{excel:'EXCEL / EERSTE INVOER',form:'WEB / UITGEBREID FORMULIER',report:'WEEK / VOORBEELDRAPPORT',date:'Datum',activity:'Activiteit',time:'Minuten',category:'Categorie',status:'Status',example:'FICTIEVE GEGEVENS',total:'1 u 15 m'},
    es:{excel:'EXCEL / ENTRADA INICIAL',form:'WEB / FORMULARIO AMPLIADO',report:'SEMANA / INFORME ILUSTRATIVO',date:'Fecha',activity:'Actividad',time:'Minutos',category:'Categoría',status:'Estado',example:'DATOS FICTICIOS',total:'1 h 15 min'}
  }[locale]||{
    excel:'EXCEL / ORIGINAL ENTRY',form:'WEB / EXPANDED FORM',report:'WEEK / EXAMPLE REPORT',date:'Date',activity:'Activity',time:'Minutes',category:'Category',status:'Status',example:'FICTITIOUS DATA',total:'1 h 15 m'
  };
  const root=node('div','proof-journey');
  root.append(node('div','proof-journey-head',[words.excel,words.form,words.report][selected]));
  if(selected===2){
    root.append(node('div','proof-journey-total',words.total));
    root.append(node('div','proof-journey-summary','PDF  ·  Excel  ·  CSV  ·  Email'));
  }else{
    const table=node('div','proof-journey-table');
    const headers=selected===0?[words.date,words.activity,words.time]:
      [words.date,words.activity,words.category,words.status,words.time];
    headers.forEach(x=>table.append(node('span','proof-journey-cell is-heading',x)));
    const vals=selected===0?['02-03','Example', '45']:
      ['02-03','Example','Research','Yes','45'];
    vals.forEach(x=>table.append(node('span','proof-journey-cell',x)));
    table.style.gridTemplateColumns='repeat('+headers.length+',minmax(0,1fr))';
    root.append(table);
  }
  root.append(node('div','proof-journey-note',words.example));
  return root;
 }
 function display(){
  const locale=lang(), project=locale.projects[active];
  $('explore-kicker').textContent=locale.kicker;
  $('explore-title').textContent=locale.heading;
  $('explore-lede').textContent=locale.lede;
  $('lab-tabs').setAttribute('aria-label',locale.tabAria);
  tabs.forEach(tab=>{
   const on=tab.dataset.labProject===active;
   tab.setAttribute('aria-selected',String(on));tab.tabIndex=on?0:-1;
   if(on)$('explore-panel').setAttribute('aria-labelledby',tab.id);
  });
  $('lab-project-status').textContent=project.status;
  $('lab-project-title').textContent=project.title;
  $('lab-project-intro').textContent=project.intro;
  titlebar.textContent=active==='creative'?campaignSourceText[window.portfolioLanguage||'en'].preview:locale.preview;
  $('lab-preview-code').textContent=String(order.indexOf(active)+1).padStart(2,'0')+' / '+visualLocale().ids[order.indexOf(active)];
  $('lab-caption').textContent=active==='creative'?campaignSourceText[window.portfolioLanguage||'en'].caption:locale.caption;
  $('lab-controls').setAttribute('aria-label',locale.stageAria);
  controls.replaceChildren(...project.steps.map(([name],i)=>{
   const b=node('button','',name);b.type='button';b.setAttribute('aria-pressed',String(i===selected));b.addEventListener('click',()=>{selected=i;display()});return b;
  }));
  const [label,heading,description]=project.steps[selected];
  explain.replaceChildren(node('strong','',heading),node('span','',description));
  let visual;
  if(active==='creative')visual=creative(project);
  else if(active==='knowledge')visual=knowledge(project);
  else if(active==='reintegration')visual=reintegration(project);
  else visual=pipeline(project);
  preview.replaceChildren(visual);preview.classList.toggle('proof-campaign-preview',active==='creative');
  links.replaceChildren(...project.links.map(([name,url])=>{
   const a=node('a','',name+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;
  }));
  if(active!=='botia'){
    const label=({en:'See the detailed case ↗',nl:'Bekijk de uitgebreide casestudy ↗',es:'Ver el caso completo ↗'})[window.portfolioLanguage]||'See the detailed case ↗';
    const a=node('a','',active==='creative'?({en:'Explore BOTIA campaign ↗',nl:'Bekijk de BOTIA-campagne ↗',es:'Explorar la campaña de BOTIA ↗'})[window.portfolioLanguage||'en']:label);a.href=active==='creative'?'./marketing-campaign.html?lang='+(window.portfolioLanguage||'en'):'./case-studies.html?project='+active+'&lang='+(window.portfolioLanguage||'en');
    links.prepend(a);
  }
  const note=$('lab-private-note');note.hidden=!project.private;note.textContent=project.private?(active==='creative'?campaignSourceText[window.portfolioLanguage||'en'].note:locale.privateNote):'';
  document.querySelectorAll('[data-open-lab]').forEach(a=>{
    a.textContent=({'en':'Interactive walkthrough ↗','nl':'Interactieve demonstratie ↗','es':'Demostración interactiva ↗'})[window.portfolioLanguage]||'Interactive walkthrough ↗';
  });
 }
 function selectProject(id,scroll=false,persistHash=false){
  if(!names[id])return;
  active=id;selected=0;display();
  if(persistHash){try{const url=new URL(location.href);url.hash='explore-'+id;history.replaceState(null,'',url.href)}catch{}}
  if(scroll)section.scrollIntoView({behavior:'smooth',block:'start'});
 }
 tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectProject(tab.dataset.labProject,false,true));
  tab.addEventListener('keydown',e=>{
   let target=null;
   if(e.key==='ArrowRight'||e.key==='ArrowDown')target=(index+1)%tabs.length;
   else if(e.key==='ArrowLeft'||e.key==='ArrowUp')target=(index+tabs.length-1)%tabs.length;
   else if(e.key==='Home')target=0;
   else if(e.key==='End')target=tabs.length-1;
   if(target===null)return;e.preventDefault();tabs[target].focus();selectProject(tabs[target].dataset.labProject,false,true);
  });
 });
 document.querySelectorAll('[data-open-lab]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();selectProject(a.dataset.openLab,true,true)}));
 document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>display()));
 display();
 if(deepLink)requestAnimationFrame(()=>section.scrollIntoView({block:'start'}));
})();