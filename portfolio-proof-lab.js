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
    creative:{status:'CONFIGURABLE DESIGN SYSTEM · PRIVATE SOURCE',title:'Real campaign copy, multiple formats',intro:'Creative Studio composes nine real campaign pieces in fourteen languages and eight documented formats. Change the format, then open the full case to see authentic campaign text.',steps:[
     ['Portrait','Portrait composition','A tall arrangement adapts spacing and hierarchy for story-oriented placements. The preview uses invented sample content.'],
     ['Square','Square composition','A square preset reflows the same conceptual components to a balanced format without duplicating the campaign source.'],
     ['Landscape','Wide composition','A landscape preset changes the presentation shape while keeping the campaign structure consistent.']
    ],links:[],private:true},
    knowledge:{status:'DOCUMENT GOVERNANCE · PRIVATE REPOSITORY',title:'Evidence that can be traced',intro:'The knowledge base separates source authority, integrity, licensing and version awareness. Select a control to explore the documented method.',steps:[
     ['Sources','Classify the source','Official institutional documents, scholarly literature and internally developed criteria are stored as separate classes.'],
     ['Integrity','Preserve integrity','Document records include provenance and SHA-256 hashes where the source file can be verified.'],
     ['Licences','Respect reuse rights','The catalogue distinguishes materials that can be redistributed from sources that must remain linked or restricted.'],
     ['Watchlist','Monitor change','A twelve-entry EUR-Lex watchlist records regulatory identifiers and known consolidation dates. The interface shown here is a schematic, not proof that an alert was dispatched.']
    ],links:[['Public BOTIA documentation','https://www.botia-safefood.com/']],private:true},
    reintegration:{status:'WORKING APPLICATION · PUBLIC CODE / PRIVATE DATA',title:'From someone’s Excel sheet to a personal web tool',intro:'An individual was entering activities into an Excel sheet. The recording workflow was extended into a private web app with more fields and reports. This demonstration only uses invented values.',steps:[
     ['Activities','Capture structured records','Records include dates, activity descriptions, status and time spent; a weekly view aggregates them.'],
     ['Access','Protect editing','Google OAuth, service-side role checks and revision controls distinguish the account owner from readers and help manage concurrent changes.'],
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
    creative:{status:'CONFIGUREERBAAR ONTWERPSYSTEEM · PRIVÉBRONCODE',title:'Echte campagneteksten in meerdere formaten',intro:'Creative Studio combineert negen echte campagneonderdelen, veertien talen en acht gedocumenteerde formaten. Bekijk daarna de volledige casestudy met echte teksten.',steps:[
     ['Staand','Staande compositie','Een langwerpige indeling past witruimte en hiërarchie aan voor een story-formaat. De voorbeeldinhoud is fictief.'],
     ['Vierkant','Vierkante compositie','Een vierkante indeling herschikt dezelfde onderdelen zonder de campagnebron te dupliceren.'],
     ['Liggend','Brede compositie','Een horizontale indeling past het formaat aan en houdt de campagnestructuur consistent.']
    ],links:[],private:true},
    knowledge:{status:'DOCUMENTBEHEER · PRIVÉREPOSITORY',title:'Traceerbare onderbouwing',intro:'De kennisbank scheidt bronstatus, integriteit, licenties en versiebeheer. Kies een onderdeel om de documentatiemethode te verkennen.',steps:[
     ['Bronnen','Bronnen classificeren','Officiële documenten, wetenschappelijke publicaties en eigen criteria worden in verschillende categorieën bewaard.'],
     ['Integriteit','Integriteit vastleggen','Documentrecords bevatten herkomstgegevens en waar mogelijk SHA-256-controlewaarden.'],
     ['Licenties','Hergebruik respecteren','De catalogus onderscheidt herpubliceerbaar materiaal van bronnen die alleen mogen worden gelinkt of beperkt toegankelijk blijven.'],
     ['Volglijst','Wijzigingen volgen','Een lijst van twaalf EUR-Lex-verordeningen bevat identificaties en bekende consolidatiedata. De illustratie toont geen bewijs dat meldingen zijn verzonden.']
    ],links:[['Openbare BOTIA-documentatie','https://www.botia-safefood.com/']],private:true},
    reintegration:{status:'WERKENDE WEBAPP · OPENBARE CODE / PRIVÉDATA',title:'Van iemands Excel-blad naar een persoonlijke webapp',intro:'Iemand registreerde activiteiten in Excel. De invoer werd uitgebreid tot een privéwebapp met meer velden en rapporten. Dit voorbeeld bevat alleen fictieve gegevens.',steps:[
     ['Activiteiten','Gestructureerd registreren','Activiteiten bevatten datum, beschrijving, status en bestede tijd; een weekoverzicht telt de waarden op.'],
     ['Toegang','Bewerken beveiligen','Google OAuth, rollencontrole op de server en revisiebeheer scheiden eigenaarsrechten van leestoegang en beperken conflicten bij gelijktijdig bewerken.'],
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
    creative:{status:'SISTEMA VISUAL CONFIGURABLE · CÓDIGO PRIVADO',title:'Textos de campaña reales en varios formatos',intro:'Creative Studio combina nueve piezas reales, catorce idiomas y ocho formatos documentados. Explora los formatos y abre el caso completo para ver textos auténticos.',steps:[
     ['Vertical','Composición vertical','El formato vertical adapta espacios y jerarquía para piezas de tipo story. El contenido de la muestra es ficticio.'],
     ['Cuadrado','Composición cuadrada','El formato cuadrado reorganiza los mismos componentes sin duplicar la fuente de la campaña.'],
     ['Horizontal','Composición panorámica','La composición horizontal cambia la disposición sin perder coherencia entre las piezas.']
    ],links:[],private:true},
    knowledge:{status:'GOBERNANZA DOCUMENTAL · REPOSITORIO PRIVADO',title:'Evidencia que puede rastrearse',intro:'La base documental diferencia autoridad de las fuentes, integridad, licencias y versiones. Selecciona una opción para explorar el método.',steps:[
     ['Fuentes','Clasificación de fuentes','Los documentos oficiales, la literatura científica y los criterios internos se conservan en categorías diferenciadas.'],
     ['Integridad','Integridad documental','Los registros conservan procedencia y huellas SHA-256 cuando es posible verificar el archivo original.'],
     ['Licencias','Derechos de reutilización','El catálogo distingue material redistribuible, fuentes que solo pueden enlazarse y contenido restringido.'],
     ['Vigilancia','Seguimiento de cambios','Una lista de doce normas de EUR-Lex recoge identificadores y fechas de consolidación conocidas. Esta ilustración no demuestra que se haya enviado una alerta.']
    ],links:[['Documentación pública de BOTIA','https://www.botia-safefood.com/']],private:true},
    reintegration:{status:'APLICACIÓN OPERATIVA · CÓDIGO PÚBLICO / DATOS PRIVADOS',title:'De la hoja Excel de una persona a una aplicación útil',intro:'Una persona registraba actividades en Excel. Amplié la entrada de datos y desarrollé una aplicación web privada con informes. Esta demostración utiliza únicamente datos inventados.',steps:[
     ['Actividades','Registros estructurados','Cada actividad tiene fecha, descripción, estado y tiempo; la vista semanal agrega la información.'],
     ['Acceso','Edición protegida','Google OAuth, comprobaciones de permisos en el servidor y control de revisiones separan la cuenta propietaria de los lectores y gestionan cambios simultáneos.'],
     ['Informes','Exportación de informes','La aplicación ofrece PDF, Excel, CSV y borradores de correo para informes semanales.']
    ],links:[['Consultar código público en GitHub','https://github.com/servicehubbotia-glitch/My-Reintegration'],['Abrir aplicación (requiere acceso)','https://servicehubbotia-glitch.github.io/My-Reintegration/']]}
   }
  }
 };
 const visualText={
  en:{ids:['BOTIA','DESIGN','SOURCES','JOURNAL'],studio:'STUDIO / SAMPLE',formats:'14 languages · 8 format presets · RTL support',ledger:'DOCUMENT / SCHEMA EXAMPLE',rows:[['SOURCE TYPE','OFFICIAL / STUDY / INTERNAL'],['CHECKSUM','SHA-256'],['RIGHTS','REVIEWED'],['CONSOLIDATION','TRACKED']],week:'WEEK / SAMPLE',privateData:'NO PERSONAL DATA',example:'Example records only'},
  nl:{ids:['BOTIA','ONTWERP','BRONNEN','DAGBOEK'],studio:'STUDIO / VOORBEELD',formats:'14 talen · 8 formaatinstellingen · RTL-ondersteuning',ledger:'DOCUMENT / SCHEMA VOORBEELD',rows:[['BRONTYPE','OFFICIEEL / STUDIE / INTERN'],['CONTROLEWAARDE','SHA-256'],['RECHTEN','GECONTROLEERD'],['CONSOLIDATIE','GEVOLGD']],week:'WEEK / VOORBEELD',privateData:'GEEN PERSOONSGEGEVENS',example:'Alleen fictieve gegevens'},
  es:{ids:['BOTIA','DISEÑO','FUENTES','REGISTRO'],studio:'ESTUDIO / EJEMPLO',formats:'14 idiomas · 8 formatos · soporte RTL',ledger:'DOCUMENTO / ESQUEMA ILUSTRATIVO',rows:[['TIPO DE FUENTE','OFICIAL / ESTUDIO / INTERNO'],['HUELLA DIGITAL','SHA-256'],['DERECHOS','REVISADOS'],['CONSOLIDACIÓN','SEGUIMIENTO']],week:'SEMANA / EJEMPLO',privateData:'SIN DATOS PERSONALES',example:'Registros ficticios'}
 };
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
  /* Portfolio reconstruction from real Creative Studio piece 05 (not a private-editor screenshot). */
  const textByLanguage={
    en:['Take the photo.','BOTIA takes it from there.'],
    nl:['Maak de foto.','BOTIA doet de rest.'],
    es:['Haz la foto.','Del resto se encarga BOTIA.']
  };
  const copy=textByLanguage[window.portfolioLanguage]||textByLanguage.en;
  const dims=['1080 × 1920','1080 × 1080','1024 × 500'];
  const root=node('div','proof-mock-card');root.dataset.layout=['portrait','square','landscape'][selected];
  const h=node('div','proof-mock-top');h.append(node('span','','BOTIA / 05'),node('span','',dims[selected]));
  root.append(h,node('div','proof-mock-main',copy[0]),node('div','proof-mock-sub',copy[1]));
  const illustration=node('div','proof-real-creative');
  const image=node('img');image.src='https://www.botia-safefood.com/botia_jar_512.png';image.alt='BOTIA';image.loading='lazy';
  image.addEventListener('error',()=>{image.hidden=true});
  illustration.append(image,node('strong','','BOTIA'));root.append(illustration);
  return root;
 }
 function knowledge(data){
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
  titlebar.textContent=locale.preview;
  $('lab-preview-code').textContent=String(order.indexOf(active)+1).padStart(2,'0')+' / '+visualLocale().ids[order.indexOf(active)];
  $('lab-caption').textContent=locale.caption;
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
  preview.replaceChildren(visual);
  links.replaceChildren(...project.links.map(([name,url])=>{
   const a=node('a','',name+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;
  }));
  if(active!=='botia'){
    const label=({en:'See the detailed case ↗',nl:'Bekijk de uitgebreide casestudy ↗',es:'Ver el caso completo ↗'})[window.portfolioLanguage]||'See the detailed case ↗';
    const a=node('a','',label);a.href='./case-studies.html?project='+active+'&lang='+(window.portfolioLanguage||'en');
    links.prepend(a);
  }
  const note=$('lab-private-note');note.hidden=!project.private;note.textContent=project.private?locale.privateNote:'';
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