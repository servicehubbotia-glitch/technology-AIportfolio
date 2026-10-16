/* Selected technical case studies. Public examples; no production API calls or private user data. */
(()=>{
  'use strict';
  const $=id=>document.getElementById(id);
  const langs=['en','nl','es'], projectIds=['creative','knowledge','reintegration'];
  const initialParams=new URLSearchParams(location.search);
  let language=langs.includes(initialParams.get('lang'))?initialParams.get('lang'):'en';
  let active=projectIds.includes(initialParams.get('project'))?initialParams.get('project'):'creative';
  let format='play',piece='05',watch=0,scenario=0,recordStage=0;
  const formats=[
    {id:'play',name:'Google Play',width:1080,height:1920,layout:'portrait'},
    {id:'instagram',name:'Instagram',width:1080,height:1080,layout:'square'},
    {id:'feature',name:'Feature graphic',width:1024,height:500,layout:'landscape'}
  ];
  /* Selected, non-sensitive EUR-Lex identifiers and dates from the documented watchlist. */
  const regulations=[
    {celex:'02008R1333',known:'2026-08-18',priority:'CRITICA',en:'Food additives',nl:'Voedingsadditieven',es:'Aditivos alimentarios'},
    {celex:'02008R1334',known:'2026-02-16',priority:'CRITICA',en:'Flavourings',nl:'Aromastoffen',es:'Aromas'},
    {celex:'02011R1169',known:'2025-04-01',priority:'ALTA',en:'Food information',nl:'Voedselinformatie',es:'Información alimentaria'}
  ];
  const content={
    en:{
      nav:'Back to portfolio',eyebrow:'SELECTED ENGINEERING WORK / CASE STUDIES',
      title:'What I built, and why.',subtitle:'Three different problems: multilingual creative production, verifiable regulatory information and more usable record-keeping for an individual.',
      caseTag:'CASE STUDY · SELECTED PROOF',demoLabel:'EXPLORE A CONCRETE EXAMPLE',controls:'Explore the example',
      evidence:'PUBLIC EVIDENCE',facts:'What this demonstrates',source:'Configuration / logic',sourceStatus:'DOCUMENTED EXCERPT',
      footer:'The previews use documented configuration, public material or fictitious example records. Private repositories and personal data remain protected.',contact:'Contact ↗',
      creative:{
        category:'CREATIVE MARKETING ENGINEERING',title:'A marketing campaign built as a production system.',
        lede:'BOTIA Creative Studio was developed as a configurable composition system: nine campaign pieces, fourteen languages, eight format presets and right-to-left support for Arabic. Here is a compact portfolio rendering of its actual campaign texts and selected dimensions.',
        caution:'The wording and format dimensions come from Creative Studio. This view is a separate HTML reconstruction, not a screenshot or live session of the private editor.',
        pieces:'Campaign piece',formats:'Display format',
        pieceNames:{'05':'05 · Camera','08':'08 · Evidence'},
        copy:{'05':{headline:'Take the photo.',sub:'BOTIA takes it from there.'},'08':{headline:"It's not magic. It's documented.",sub:'And you can check it yourself.'}},
        explanationTitle:'Composition driven by data',explanation:'The text belongs to a campaign piece; the dimensions and layout come from a separate format preset. The same campaign does not need to be recreated manually for each output.',
        brand:'FOOD LABEL INTELLIGENCE', preview:'CAMPAIGN / PREVIEW', facts:[['9 pieces','One campaign composition system'],['14 languages','Localized copy with Arabic RTL'],['8 presets','Dimensions and layout controlled through JSON']],
        sourceCaption:'Adapted, limited extract from Creative Studio configuration. The full editor and its asset collection remain private.',
        links:[['Explore the complete marketing campaign','./marketing-campaign.html?lang=en'],['Public BOTIA website','https://www.botia-safefood.com/'],['Android application','https://play.google.com/store/apps/details?id=com.botia.safefood']]
      },
      knowledge:{
        category:'REGULATORY INTELLIGENCE',title:'A regulatory watchlist you can inspect.',
        lede:'The private knowledge base maintains provenance, document status, usage rights and SHA-256 checksums. The working watcher now makes 231 active source checks, including 35 EU acts. This historical teaching example shows three selected CELEX records; the verified run history is available in the full technical case.',
        caution:'The identifiers and stored consolidation dates come from the documented configuration. The comparison below uses hypothetical observations: it does not call EUR-Lex or prove a live alert was sent.',
        select:'Watchlist entry', scenario:'Comparison scenario', scenarioNames:['Known version','Hypothetical newer version'],
        known:'KNOWN CONSOLIDATION',observed:'COMPARED VALUE',priority:'PRIORITY',stable:'No later date in this sample',changed:'Potential newer consolidation · simulated',
        explanationTitle:'Version-aware review',explanation:'A regulation is identified by CELEX. A monitoring process can compare its stored consolidation date to a newly observed version, then flag records that need a human review of the official source.',
        facts:[['231 active checks','Including 35 EU acts and cross-agency sources'],['Source separation','Official, scholarly and internal criteria'],['Traceable records','Licences, status, provenance and integrity']],
        sourceCaption:'Public teaching example derived from non-sensitive watchlist fields. Neither the private repository nor the live watcher executable is published here.',
        links:[['Verified watcher case','./knowledge-monitor.html?lang=en'],['Public BOTIA regulatory register','https://www.botia-safefood.com/regulatory/'],['Public regulatory page source','https://github.com/servicehubbotia-glitch/Botia-web/blob/main/regulatory/regulatory.js'],['Watchlist sample (JSON)','./examples/regulatory-watch.sample.json'],['Comparison logic (JS)','./examples/compare-consolidations.example.js']]
      },
      reintegration:{
        category:'PERSON-CENTRED SOFTWARE',title:'From an Excel log to a useful personal workflow.',
        lede:'An individual already used an Excel sheet to enter activity information. I adapted and expanded that data-entry workflow to handle more detail and built a browser-based application for easier record keeping and reporting. It was designed around a person’s practical needs, not an enterprise procurement process.',
        caution:'The example rows below are entirely fictitious. They are not copied from a person’s Excel file, Google spreadsheet or activity history.',
        stages:'Workflow stage',stageNames:['Original sheet','Expanded entry','Weekly report'],
        explanationTitles:['The starting point','More structured information','Useful outputs'],
        explanationBodies:[
          'The original entry method was a spreadsheet. The need was to make it practical to add and manage more information.',
          'The expanded workflow can record dates, activity descriptions, category, status, duration and notes through a web interface.',
          'The tool prepares a weekly overview and exports in PDF, spreadsheet, CSV or a draft email. Authorized access protects the records.'
        ],
        tableTitle:['EXCEL / ORIGINAL IDEA','WEB / STRUCTURED ENTRY','WEEK / EXAMPLE REPORT'],
        noData:'EXAMPLE DATA — NOT A REAL PERSON',
        facts:[['Individual need','Improve a real person’s recording process'],['Structured web form','More fields with consistent entries'],['Private data','Google OAuth, revision-aware edits and reports']],
        sourceCaption:'Simplified description of the public app’s data fields. No real entries, account identifiers or private sheet data are included.',
        links:[['Interactive Excel-to-web example','./excel-to-app.html?lang=en'],['Public application code','https://github.com/servicehubbotia-glitch/My-Reintegration'],['Web application (authorized access)','https://servicehubbotia-glitch.github.io/My-Reintegration/']]
      }
    },
    nl:{
      nav:'Terug naar portfolio',eyebrow:'GESELECTEERD TECHNISCH WERK / CASESTUDIES',
      title:'Wat ik heb gebouwd. En waarom.',subtitle:'Drie verschillende uitdagingen: meertalige visuele productie, controleerbare regelgeving en betere gegevensregistratie voor één persoon.',
      caseTag:'CASESTUDY · GESELECTEERD BEWIJS',demoLabel:'BEKIJK EEN CONCREET VOORBEELD',controls:'Verken het voorbeeld',
      evidence:'OPENBAAR BEWIJSMATERIAAL',facts:'Wat dit aantoont',source:'Configuratie / logica',sourceStatus:'GEDOCUMENTEERD FRAGMENT',
      footer:'De previews gebruiken gedocumenteerde instellingen, openbaar materiaal of fictieve voorbeeldgegevens. Privérepositories en persoonsgegevens blijven beschermd.',contact:'Contact ↗',
      creative:{
        category:'TECHNOLOGIE VOOR MARKETING',title:'Een marketingcampagne als productiesysteem.',
        lede:'BOTIA Creative Studio is opgebouwd als een configureerbaar compositiesysteem: negen campagneonderdelen, veertien talen, acht formaatinstellingen en rechts-naar-links ondersteuning voor Arabisch. Deze portfolioweergave gebruikt echte campagneteksten en gedocumenteerde afmetingen.',
        caution:'De teksten en afmetingen komen uit Creative Studio. Deze afzonderlijke HTML-weergave is geen screenshot of live sessie van de privé-editor.',
        pieces:'Campagneonderdeel',formats:'Weergaveformaat',pieceNames:{'05':'05 · Camera','08':'08 · Bronnen'},
        copy:{'05':{headline:'Maak de foto.',sub:'BOTIA doet de rest.'},'08':{headline:'Geen magie. Wel documentatie.',sub:'En die kun je zelf controleren.'}},
        explanationTitle:'Compositie op basis van gegevens',explanation:'De tekst is gekoppeld aan een campagneonderdeel; formaat en indeling komen uit een aparte configuratie. De campagne hoeft niet handmatig opnieuw gemaakt te worden voor ieder formaat.',
        brand:'VOEDSELETIKET-INTELLIGENTIE',preview:'CAMPAGNE / VOORBEELD',
        facts:[['9 onderdelen','Eén systeem voor campagnecompositie'],['14 talen','Gelokaliseerde teksten inclusief Arabisch RTL'],['8 formaten','Afmetingen en indeling uit JSON']],
        sourceCaption:'Beperkt, aangepast fragment uit de configuratie. De volledige editor en materialen zijn privé.',
        links:[['Bekijk de volledige marketingcampagne','./marketing-campaign.html?lang=nl'],['Openbare BOTIA-website','https://www.botia-safefood.com/'],['Android-app','https://play.google.com/store/apps/details?id=com.botia.safefood']]
      },
      knowledge:{
        category:'REGELGEVINGSINFORMATIE',title:'Een inzichtelijke lijst voor regelgeving.',
        lede:'De besloten kennisbank bewaart herkomst, documentstatus, gebruiksrechten en SHA-256-controlewaarden. De werkende watcher controleert 231 bronnen, waaronder 35 EU-akten. Dit beperkte uitlegvoorbeeld toont drie CELEX-vermeldingen; de echte uitvoeringen staan in de volledige casestudy.',
        caution:'De identificaties en opgeslagen data komen uit de vastgelegde configuratie. De vergelijking gebruikt hypothetische waarden: er wordt geen live EUR-Lex-verzoek gedaan en geen verzonden melding aangetoond.',
        select:'Volglijstitem',scenario:'Vergelijkingsscenario',scenarioNames:['Bekende versie','Hypothetisch nieuwere versie'],
        known:'BEKENDE CONSOLIDATIE',observed:'VERGELEKEN WAARDE',priority:'PRIORITEIT',stable:'Geen latere datum in dit voorbeeld',changed:'Mogelijk nieuwere consolidatie · simulatie',
        explanationTitle:'Versiebeheer voor beoordeling',explanation:'Een verordening wordt aangeduid met CELEX. Een volgsysteem kan de opgeslagen consolidatiedatum vergelijken met een recent waargenomen versie en wijzigingen markeren voor menselijke controle bij de officiële bron.',
        facts:[['231 actieve controles','Waaronder 35 EU-akten en andere institutionele bronnen'],['Scheiden van bronnen','Officieel, wetenschappelijk en eigen criteria'],['Traceerbare records','Licenties, status, herkomst en integriteit']],
        sourceCaption:'Openbaar uitlegvoorbeeld op basis van niet-gevoelige velden. De privérepository en de uitvoerbare live watcher staan hier niet online.',
        links:[['Gecontroleerde monitoringscasestudy','./knowledge-monitor.html?lang=nl'],['Openbaar BOTIA-register','https://www.botia-safefood.com/regulatory/'],['Openbare broncode regelgeving','https://github.com/servicehubbotia-glitch/Botia-web/blob/main/regulatory/regulatory.js'],['Voorbeeldvolglijst (JSON)','./examples/regulatory-watch.sample.json'],['Vergelijkingslogica (JS)','./examples/compare-consolidations.example.js']]
      },
      reintegration:{
        category:'SOFTWARE VOOR EEN PERSOON',title:'Van Excel-overzicht naar een bruikbare persoonlijke werkwijze.',
        lede:'Iemand hield activiteiten bij via invoer in een Excel-blad. Ik heb die gegevensstructuur aangepast en uitgebreid zodat meer informatie kon worden vastgelegd, en een webapp gemaakt voor eenvoudiger registreren en rapporteren. Het vertrekpunt was de praktische behoefte van één persoon, niet een bedrijfsopdracht.',
        caution:'Alle voorbeeldrijen hieronder zijn fictief. Ze komen niet uit een persoonlijk Excel-bestand, Google-spreadsheet of activiteitenoverzicht.',
        stages:'Processtap',stageNames:['Oorspronkelijk blad','Uitgebreide invoer','Weekrapport'],
        explanationTitles:['Het begin','Meer gestructureerde velden','Bruikbare uitkomsten'],
        explanationBodies:[
          'De oorspronkelijke manier van invoeren was een spreadsheet. De bedoeling was extra gegevens makkelijker te kunnen registreren en beheren.',
          'De uitgebreidere werkwijze bevat datum, activiteit, categorie, status, duur en toelichting in een webformulier.',
          'De app biedt een weekoverzicht en exports naar PDF, spreadsheet, CSV en e-mailconcept. Toegangsrechten beschermen de gegevens.'
        ],
        tableTitle:['EXCEL / UITGANGSPUNT','WEB / GESTRUCTUREERDE INVOER','WEEK / VOORBEELDRAPPORT'],
        noData:'FICTIEVE GEGEVENS — GEEN PERSOONLIJKE DATA',
        facts:[['Persoonlijke behoefte','Een bestaand registratieproces verbeteren'],['Webformulier','Meer velden en consistente invoer'],['Privégegevens','Google OAuth, revisiecontrole en rapporten']],
        sourceCaption:'Vereenvoudigde velden van de openbare app. Geen werkelijke invoer, accountgegevens of privé-spreadsheet.',
        links:[['Interactief Excel-naar-webapp-voorbeeld','./excel-to-app.html?lang=nl'],['Openbare app-code','https://github.com/servicehubbotia-glitch/My-Reintegration'],['Webapp (toegang vereist)','https://servicehubbotia-glitch.github.io/My-Reintegration/']]
      }
    },
    es:{
      nav:'Volver al portfolio',eyebrow:'PROYECTOS TÉCNICOS / CASOS PRÁCTICOS',
      title:'Qué he construido y para qué.',subtitle:'Tres necesidades distintas: producción visual multilingüe, seguimiento documental de normativa y un registro de actividades más útil para una persona.',
      caseTag:'CASO PRÁCTICO · PRUEBA SELECCIONADA',demoLabel:'EXPLORA UN EJEMPLO CONCRETO',controls:'Explorar el ejemplo',
      evidence:'EVIDENCIA PÚBLICA',facts:'Qué demuestra',source:'Configuración / lógica',sourceStatus:'EXTRACTO DOCUMENTADO',
      footer:'Las vistas usan configuraciones documentadas, material público o registros ficticios. Los repositorios privados y los datos personales siguen protegidos.',contact:'Contacto ↗',
      creative:{
        category:'INGENIERÍA APLICADA AL MARKETING',title:'Una campaña de marketing construida como sistema.',
        lede:'BOTIA Creative Studio es un sistema configurable de composición: nueve piezas de campaña, catorce idiomas, ocho formatos y soporte de escritura árabe de derecha a izquierda. Esta muestra utiliza los textos reales de dos piezas y dimensiones documentadas.',
        caution:'Los textos y las dimensiones proceden de Creative Studio. Esta composición HTML es una recreación para el portfolio, no una captura ni una sesión del editor privado.',
        pieces:'Pieza de campaña',formats:'Formato de salida',pieceNames:{'05':'05 · Cámara','08':'08 · Evidencia'},
        copy:{'05':{headline:'Haz la foto.',sub:'Del resto se encarga BOTIA.'},'08':{headline:'No es magia. Está documentado.',sub:'Y tú puedes comprobarlo.'}},
        explanationTitle:'Composición gobernada por datos',explanation:'El texto pertenece a una pieza de campaña; las dimensiones y la disposición proceden de otra configuración. No hay que reconstruir la creatividad a mano para cada formato.',
        brand:'INTELIGENCIA DE ETIQUETAS ALIMENTARIAS',preview:'CAMPAÑA / MUESTRA',
        facts:[['9 piezas','Un solo sistema de composición'],['14 idiomas','Textos localizados, incluido árabe RTL'],['8 formatos','Dimensiones y disposición desde JSON']],
        sourceCaption:'Extracto reducido y adaptado de la configuración de Creative Studio. El editor y sus materiales completos son privados.',
        links:[['Explorar la campaña de marketing completa','./marketing-campaign.html?lang=es'],['Web pública de BOTIA','https://www.botia-safefood.com/'],['Aplicación Android','https://play.google.com/store/apps/details?id=com.botia.safefood']]
      },
      knowledge:{
        category:'INTELIGENCIA REGULATORIA',title:'Un seguimiento normativo que se puede examinar.',
        lede:'La base privada conserva procedencia, estado documental, derechos de uso y huellas SHA-256. El watcher operativo comprueba 231 fuentes, incluidos 35 actos europeos. Esta demostración didáctica muestra tres registros CELEX; las ejecuciones reales figuran en la ficha técnica completa.',
        caution:'Los identificadores y fechas guardadas provienen de la configuración documentada. La comparación utiliza fechas hipotéticas: no consulta EUR-Lex en directo ni acredita el envío de alertas.',
        select:'Norma vigilada',scenario:'Escenario de comparación',scenarioNames:['Versión conocida','Supuesto de nueva versión'],
        known:'CONSOLIDACIÓN CONOCIDA',observed:'FECHA COMPARADA',priority:'PRIORIDAD',stable:'Sin fecha posterior en este ejemplo',changed:'Posible nueva consolidación · simulación',
        explanationTitle:'Revisión consciente de versiones',explanation:'Cada norma se identifica mediante CELEX. Un monitor puede comparar la fecha de consolidación registrada con la de una versión observada y señalar qué documentos necesitan revisión humana de la fuente oficial.',
        facts:[['231 comprobaciones activas','Incluye 35 normas UE y fuentes de distintos organismos'],['Separación de fuentes','Oficiales, literatura y criterios propios'],['Registros trazables','Licencias, estado, origen e integridad']],
        sourceCaption:'Ejemplo público a partir de campos documentados y no sensibles. Ni el repositorio privado ni el ejecutable del watcher se publican aquí.',
        links:[['Caso real de vigilancia documental','./knowledge-monitor.html?lang=es'],['Registro Regulatory de BOTIA','https://www.botia-safefood.com/regulatory/'],['Código público de Regulatory','https://github.com/servicehubbotia-glitch/Botia-web/blob/main/regulatory/regulatory.js'],['Ejemplo de configuración (JSON)','./examples/regulatory-watch.sample.json'],['Ejemplo de comparación (JS)','./examples/compare-consolidations.example.js']]
      },
      reintegration:{
        category:'SOFTWARE PARA UNA PERSONA',title:'De una hoja Excel a un proceso personal más útil.',
        lede:'Una persona utilizaba una hoja Excel para introducir información de sus actividades. Adapté y amplié aquella estructura de entrada para incorporar más datos y desarrollé una aplicación web que facilitara los registros y los informes. El punto de partida era una necesidad práctica individual, no un encargo empresarial.',
        caution:'Todos los registros de este ejemplo son ficticios. No proceden de ninguna hoja Excel, hoja de Google ni historial personal real.',
        stages:'Etapa del proceso',stageNames:['Hoja inicial','Entrada ampliada','Informe semanal'],
        explanationTitles:['El punto de partida','Más información estructurada','Resultados útiles'],
        explanationBodies:[
          'El registro original se realizaba mediante una hoja de cálculo. Había que facilitar la ampliación y gestión de la información.',
          'El proceso ampliado permite guardar fecha, actividad, categoría, estado, duración y observaciones mediante una interfaz web.',
          'La aplicación prepara resúmenes semanales y exportaciones PDF, Excel, CSV o borradores de correo. Los permisos protegen los registros.'
        ],
        tableTitle:['EXCEL / PUNTO DE PARTIDA','WEB / ENTRADA ESTRUCTURADA','SEMANA / INFORME DE EJEMPLO'],
        noData:'DATOS FICTICIOS — SIN REGISTROS PERSONALES',
        facts:[['Necesidad individual','Mejorar un proceso ya utilizado por una persona'],['Formulario web','Más campos y entradas consistentes'],['Datos privados','Google OAuth, control de revisiones e informes']],
        sourceCaption:'Descripción simplificada de los campos de la aplicación pública. No contiene registros reales, cuentas ni hojas privadas.',
        links:[['Ejemplo interactivo Excel a aplicación','./excel-to-app.html?lang=es'],['Código público de la aplicación','https://github.com/servicehubbotia-glitch/My-Reintegration'],['Aplicación web (acceso autorizado)','https://servicehubbotia-glitch.github.io/My-Reintegration/']]
      }
    }
  };
  const node=(tag,cls,text)=>{
    const el=document.createElement(tag);if(cls)el.className=cls;
    if(text!==undefined)el.textContent=text;return el;
  };
  const localized=()=>content[language];
  const current=()=>localized()[active];
  function updatedUrl(){
    const url=new URL(location.href);url.searchParams.set('project',active);url.searchParams.set('lang',language);history.replaceState(null,'',url.href);
  }
  function addButtons(container,label,options,onChange,selectedValue){
    const box=node('div','control-group'),heading=node('p','',label),group=node('div','controls');
    group.setAttribute('role','group');group.setAttribute('aria-label',label);
    options.forEach(([value,title])=>{
      const b=node('button','',title);b.type='button';b.setAttribute('aria-pressed',String(value===selectedValue));
      b.addEventListener('click',()=>{onChange(value);render()});group.append(b);
    });box.append(heading,group);container.append(box);
  }
  function creativeUI(){
    const c=current(),fmt=formats.find(x=>x.id===format);
    addButtons($('case-controls'),c.pieces,[['05',c.pieceNames['05']],['08',c.pieceNames['08']]],v=>piece=v,piece);
    addButtons($('case-controls'),c.formats,formats.map(x=>[x.id,x.name]),v=>format=v,format);
    const frame=node('div','creative-frame');frame.dataset.format=format;
    const top=node('div','c-top');top.append(node('span','',"BOTIA"),node('span','',fmt.width+' × '+fmt.height));
    const copy=c.copy[piece];
    const mid=node('div','');
    mid.append(node('h3','',copy.headline),node('p','c-phrase',copy.sub));
    const bottom=node('div','c-bottom'),brand=node('strong','',c.brand),jar=node('img','');
    jar.src='https://www.botia-safefood.com/botia_jar_512.png';jar.alt='BOTIA';jar.loading='lazy';
    jar.addEventListener('error',()=>{jar.style.display='none'});
    bottom.append(brand,jar);
    frame.append(top,mid,bottom,node('div','c-footer','PIECE '+piece+' · '+fmt.layout.toUpperCase()));
    $('demo-output').replaceChildren(frame);
    $('explain-title').textContent=c.explanationTitle;
    $('explain-body').textContent=c.explanation;
    $('code-example').textContent=JSON.stringify({
      piece:piece,
      copy:{headline:copy.headline,short:copy.sub},
      format:{id:fmt.id,width:fmt.width,height:fmt.height,layout:fmt.layout}
    },null,2);
    $('code-caption').textContent=c.sourceCaption;
  }
  function knowledgeUI(){
    const c=current(),reg=regulations[watch],hypo='2026-10-01';
    const compared=scenario===0?reg.known:hypo,changed=compared>reg.known;
    addButtons($('case-controls'),c.select,regulations.map((x,i)=>[String(i),x.celex]),v=>watch=Number(v),String(watch));
    addButtons($('case-controls'),c.scenario,[[0,c.scenarioNames[0]],[1,c.scenarioNames[1]]],v=>scenario=v,scenario);
    const frame=node('div','watch-frame');
    const header=node('div','w-head');header.append(node('span','','EUR-LEX / WATCHLIST'),node('span','',String(watch+1).padStart(2,'0')+' / 12'));
    frame.append(header,node('div','w-id',reg.celex),node('div','',reg[language]));
    [[c.known,reg.known],[c.observed,compared],[c.priority,reg.priority]].forEach(([name,value])=>{
      const row=node('div','w-detail');row.append(node('span','',name),node('strong','',value));frame.append(row);
    });
    const state=node('div','w-state'+(changed?' change':''),changed?c.changed:c.stable);
    frame.append(state);$('demo-output').replaceChildren(frame);
    $('explain-title').textContent=c.explanationTitle;$('explain-body').textContent=c.explanation;
    $('code-example').textContent=JSON.stringify({id:'reg-'+reg.celex,celex:reg.celex,known_consolidation:reg.known,priority:reg.priority},null,2)+'\n\n'+
      '// Explanatory comparison — no live EUR-Lex fetch:\n'+
      'if (observedDate > known_consolidation) {\n'+
      '  markForHumanReview(celex);\n'+
      '}';
    $('code-caption').textContent=c.sourceCaption;
  }
  function reintegrationUI(){
    const c=current();
    addButtons($('case-controls'),c.stages,c.stageNames.map((x,i)=>[i,x]),v=>recordStage=v,recordStage);
    const root=node('div','sheet-demo');
    root.append(node('div','s-top',c.tableTitle[recordStage]));
    if(recordStage<2){
      const wrap=node('div','s-table'),table=node('table'),thead=node('thead'),tr=node('tr');
      const headers=recordStage===0?['Date','Activity','Minutes']:['Date','Activity','Category','Status','Minutes'];
      headers.forEach(h=>tr.append(node('th','',h)));thead.append(tr);table.append(thead);
      const body=node('tbody');const vals=recordStage===0?['2026-03-02','Sample task','45']:['2026-03-02','Sample task','Research','Done','45'];
      const row=node('tr');vals.forEach(v=>row.append(node('td','',v)));body.append(row);table.append(body);
      wrap.append(table);root.append(wrap);
    }else {
      root.append(node('div','s-total','1 h 15 m'));
      root.lastChild.append(node('small','',"SAMPLE WEEK / TWO ENTRIES"));
    }
    root.append(node('div','s-note',c.noData));$('demo-output').replaceChildren(root);
    $('explain-title').textContent=c.explanationTitles[recordStage];
    $('explain-body').textContent=c.explanationBodies[recordStage];
    $('code-example').textContent="activities: {\n  date: 'YYYY-MM-DD',\n  activity: '...',\n  category: '...',\n  outcome: '...',\n  completed: 'Yes | No',\n  minutes: 45\n}\n\n"+(recordStage===2?
      "// Weekly reports: Excel / CSV / PDF / draft email":"// Private Google Sheet + browser-based entry");
    $('code-caption').textContent=c.sourceCaption;
  }
  function render(){
    const l=localized(),c=current();
    document.documentElement.lang=language;
    document.title=c.title+' — Paloma García Muley';
    $('back-label').textContent=l.nav;
    $('back').href='./?lang='+language+'#work';
    $('eyebrow').textContent=l.eyebrow;
    $('page-title').textContent=l.title;
    $('page-subtitle').textContent=l.subtitle;
    $('case-category').textContent=c.category;
    $('case-title').textContent=c.title;
    $('case-tag').textContent=l.caseTag;
    $('case-lede').textContent=c.lede;
    $('demo-label').textContent=l.demoLabel;
    $('demo-meta').textContent=['creative','knowledge','reintegration'].indexOf(active)+2+' / '+active.toUpperCase();
    $('controls-title').textContent=l.controls;
    $('evidence-heading').textContent=l.evidence;
    $('facts-heading').textContent=l.facts;
    $('source-heading').textContent=l.source;
    $('source-status').textContent=l.sourceStatus;
    $('demo-caution').textContent=c.caution;
    $('footer-note').textContent=l.footer;
    $('contact').textContent=l.contact;
    $('case-controls').replaceChildren();
    $('fact-list').replaceChildren(...c.facts.map(([name,detail])=>{
      const row=node('div','fact');row.append(node('strong','',name),node('span','',detail));return row;
    }));
    $('evidence-links').replaceChildren(...c.links.map(([label,url])=>{
      const a=node('a','',label+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;
    }));
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
    document.querySelectorAll('[data-project]').forEach(b=>{
      const selected=b.dataset.project===active;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;
    });
    $('project-panel').setAttribute('aria-labelledby','tab-'+active);
    if(active==='creative')creativeUI();
    else if(active==='knowledge')knowledgeUI();
    else reintegrationUI();
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{
    language=b.dataset.lang;updatedUrl();render();
  }));
  const tabs=[...document.querySelectorAll('[data-project]')];
  tabs.forEach((b,i)=>{
    b.addEventListener('click',()=>{active=b.dataset.project;updatedUrl();render()});
    b.addEventListener('keydown',e=>{
      let k=null;
      if(e.key==='ArrowRight'||e.key==='ArrowDown')k=(i+1)%tabs.length;
      if(e.key==='ArrowLeft'||e.key==='ArrowUp')k=(i+tabs.length-1)%tabs.length;
      if(e.key==='Home')k=0;if(e.key==='End')k=tabs.length-1;
      if(k!==null){e.preventDefault();tabs[k].focus();active=tabs[k].dataset.project;updatedUrl();render()}
    });
  });
  render();
})();