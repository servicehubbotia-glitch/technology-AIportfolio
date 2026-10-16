/* Excel-to-web portfolio demo. All records are invented and remain in this page's memory only. */
(()=>{
'use strict';
const $=id=>document.getElementById(id);
const url=new URLSearchParams(location.search);
let lang=['en','nl','es'].includes(url.get('lang'))?url.get('lang'):'en';
let view='excel',query='',category='all',status='all',selected=1,editing=false;
const cats=['admin','finance','review','operations'];
const states=['pending','progress','done'];
let records=[
{id:1,date:'2026-10-12',key:'invoice',category:'finance',status:'done',minutes:35},
{id:2,date:'2026-10-13',key:'contract',category:'operations',status:'progress',minutes:75},
{id:3,date:'2026-10-14',key:'archive',category:'admin',status:'done',minutes:25},
{id:4,date:'2026-10-15',key:'reference',category:'review',status:'pending',minutes:50},
{id:5,date:'2026-10-15',key:'followup',category:'operations',status:'done',minutes:20},
{id:6,date:'2026-10-16',key:'monthly',category:'admin',status:'progress',minutes:45}
];
const t={
en:{
title:'From Excel to an interactive application',desc:'A personal Excel-recording problem became a private web application. This fictional office example shows how the same engineering pattern can improve access to structured information.',
skip:'Skip to demonstration',back:'Back to portfolio',brand:'SELECTED TECHNICAL WORK',
heroEye:'04 / PERSON-CENTRED SOFTWARE · TRANSFERABLE WORKFLOW',
heroTitle:'From an Excel log to an interactive application.',
heroDesc:'One person used a spreadsheet to record activities. I developed a more practical web-based workflow with structured entry, protected data and reports. The underlying engineering pattern is also relevant to offices.',
heroCta:'Try the office example ↘',heroCode:'Inspect public app code ↗',
facts:[['Real starting problem','An individual’s spreadsheet-based records'],['Implemented application','Google OAuth · Apps Script · private Google Sheet'],['Useful outputs','Clear entries · weekly summaries · exports']],
context:['THE PROBLEM AND THE OPPORTUNITY','A spreadsheet can store data without being the best interface.','Excel is valuable for structured records. When people need to find entries quickly, understand details and prepare summaries, a dedicated interface can make that information much easier to work with.'],
problem:[
['Before: spreadsheet entry','Information is typed into rows and columns. A person must keep fields consistent and interpret the sheet to find what matters.'],
['Engineering transformation','Records are structured with clear fields, forms, validation, access controls and separate reporting.'],
['After: usable information','People can filter entries, inspect details, review totals and generate reports through a purpose-built interface.']
],
demo:['INTERACTIVE / FICTIONAL OFFICE EXAMPLE','See the transformation.','These invented office records demonstrate how tabular information can become a usable web interface. The demonstration does not open real Excel files, access private records or connect to production.'],
tabs:['Original spreadsheet','Interactive application','Summary & report'],
stages:['SOURCE / TABULAR RECORDS','APPLICATION / INTERACTIVE VIEW','REPORT / SELECTED RECORDS'],
example:'FICTIONAL SAMPLE · NO PERSONAL RECORDS',
sheetIntro:'The same six fictional office entries represented as a spreadsheet.',
appIntro:'Search, filter and inspect the sample entries. You can also create a temporary fictional record.',
reportIntro:'A structured overview calculated from the example records; you can export a CSV sample.',
column:['Date','Activity','Category','Status','Minutes'],
cats:{all:'All categories',admin:'Administration',finance:'Finance',review:'Review',operations:'Operations'},
statuses:{all:'All statuses',pending:'Pending',progress:'In progress',done:'Completed'},
activities:{invoice:'Review incoming invoice',contract:'Update supplier contract entry',archive:'Archive service request',reference:'Check a regulatory reference',followup:'Follow up on request',monthly:'Prepare monthly activity summary'},
detail:'Selected record',hint:'Select a record to see its structured details',duration:'Duration',minute:'min',count:'records',search:'Search records',searchPlaceholder:'Type an activity...',filterCat:'Category',filterStatus:'Status',noResults:'No records match the selected filters.',add:'+ Add example entry',cancel:'Cancel',create:'Add fictional record',formTitle:'New sample record',newName:'Description',newDate:'Date',newCategory:'Category',newStatus:'Status',newDuration:'Minutes',required:'Enter a description, a valid date and a duration of 0–1440 minutes.',created:'Fictional entry added. This change is not saved.',
reportMetrics:['Entries','Completed','Recorded time'],perCategory:'Time by category',exportCsv:'Export sample CSV ↓',downloaded:'A fictional CSV sample has been prepared.',reset:'Reset example',resetDone:'Sample records restored.',tableCaption:'This representation is a sample — not the original workbook.',
explainer:[
['Starting with rows and columns','A spreadsheet holds the data, but navigation still revolves around individual cells and rows.'],
['Finding what matters','A structured interface can add search, filtering, an accessible detail view and guided entry to the same kind of record.'],
['Turning records into a usable overview','Totals and filtered summaries can be generated from the structured information without manually reassembling rows.']
],
disclaimer:'No real people, imported files, backend calls or persistent data in this demonstration.',
engineering:['THE ACTUAL SOFTWARE ENGINEERING','What MyReintegration really implements.','The published application is a private activity and application journal built for an individual. It is not a generic office document-management product. It demonstrates methods that can be adapted.'],
tech:[
['Structured entry','Responsive forms capture activities, dates, outcomes, completion states and duration. An authorized user can edit and review entries.'],
['Private data connection','Google OAuth and an Apps Script service connect to a private Google Sheet, with permissions and revision checks.'],
['Reporting and export','Week views and reports can produce Excel, PDF, CSV, JSON and editable email drafts.'],
['Recovery and consistency','Local drafts, backups, guarded retries and conflict handling support interrupted work.']
],
limits:'The office workflow above is hypothetical; the real app was built around one person’s activity logging. Adapting it to office records requires the actual data model, permissions, document types and retention rules. This demo does not automatically import Excel workbooks or manage uploaded documents.',
links:['Public source code ↗','Published application (authorized access) ↗','Email me about a similar project ↗'],footer:'Back to portfolio ↑',
timeUnit:'min',locale:'en-GB'
},
nl:{
title:'Van Excel naar een interactieve applicatie',desc:'Van iemands Excel-registratie naar een privéwebapp. Dit fictieve kantoorvoorbeeld laat zien hoe dezelfde techniek kan helpen om informatie duidelijker te gebruiken.',
skip:'Naar demonstratie',back:'Terug naar portfolio',brand:'GESELECTEERD TECHNISCH WERK',
heroEye:'04 / SOFTWARE VOOR EEN PERSOON · HERBRUIKBARE WERKWIJZE',
heroTitle:'Van Excel-registratie naar een interactieve webapp.',
heroDesc:'Iemand gebruikte een spreadsheet om activiteiten bij te houden. Ik ontwikkelde een praktischer webproces met gestructureerde invoer, beschermde gegevens en rapportages. Dezelfde technische aanpak kan ook een kantoor helpen.',
heroCta:'Probeer het kantoorvoorbeeld ↘',heroCode:'Bekijk openbare broncode ↗',
facts:[['Echte uitgangssituatie','De Excel-registratie van één persoon'],['Gerealiseerde toepassing','Google OAuth · Apps Script · privé-Google Sheet'],['Bruikbare uitkomsten','Heldere invoer · weekoverzicht · exports']],
context:['PROBLEEM EN MOGELIJKHEID','Een spreadsheet is waardevol, maar niet altijd de beste interface.','Excel is nuttig voor gegevens in tabellen. Als mensen snel iets moeten vinden, details willen begrijpen of overzichten maken, helpt een gerichte interface de informatie toegankelijk te maken.'],
problem:[
['Vooraf: invoer in Excel','Informatie staat in rijen en kolommen. De gebruiker moet de structuur behouden en de juiste regels terugvinden.'],
['Technische omvorming','Records krijgen duidelijke velden, formulieren, validatie, toegangsbewaking en een aparte rapportage.'],
['Daarna: bruikbare informatie','Gebruikers kunnen filteren, details bekijken, totalen zien en rapporten maken in een gerichte toepassing.']
],
demo:['INTERACTIEF / FICTIEF KANTOORVOORBEELD','Bekijk het verschil.','Deze verzonnen kantoorregistraties laten zien hoe tabelgegevens bruikbaar worden in een webinterface. Er worden geen echte Excel-bestanden geopend of privégegevens verwerkt.'],
tabs:['Oorspronkelijke tabel','Interactieve webapp','Overzicht en rapport'],
stages:['BRON / TABELGEGEVENS','APPLICATIE / INTERACTIEVE WEERGAVE','RAPPORT / VOORBEELD'],
example:'FICTIEF VOORBEELD · GEEN PRIVÉGEGEVENS',
sheetIntro:'Dezelfde zes fictieve kantooractiviteiten als spreadsheet.',
appIntro:'Zoek, filter en bekijk de details. Je kunt ook tijdelijk een fictieve registratie toevoegen.',
reportIntro:'Een berekend overzicht van de voorbeeldgegevens, met CSV-export.',
column:['Datum','Activiteit','Categorie','Status','Minuten'],
cats:{all:'Alle categorieën',admin:'Administratie',finance:'Financiën',review:'Controle',operations:'Werkprocessen'},
statuses:{all:'Alle statussen',pending:'Open',progress:'In uitvoering',done:'Afgerond'},
activities:{invoice:'Ingekomen factuur controleren',contract:'Leverancierscontract bijwerken',archive:'Serviceverzoek archiveren',reference:'Regelgevingsverwijzing controleren',followup:'Verzoek opvolgen',monthly:'Maandrapport activiteiten voorbereiden'},
detail:'Geselecteerd record',hint:'Kies een record om de gegevens te bekijken',duration:'Duur',minute:'min',count:'records',search:'Records zoeken',searchPlaceholder:'Zoek een activiteit...',filterCat:'Categorie',filterStatus:'Status',noResults:'Geen records passen bij de filters.',add:'+ Fictief record toevoegen',cancel:'Annuleren',create:'Record toevoegen',formTitle:'Nieuw voorbeeldrecord',newName:'Beschrijving',newDate:'Datum',newCategory:'Categorie',newStatus:'Status',newDuration:'Minuten',required:'Geef een beschrijving, geldige datum en een duur van 0–1440 minuten op.',created:'Fictief record toegevoegd. Dit wordt niet opgeslagen.',
reportMetrics:['Records','Afgerond','Geregistreerde tijd'],perCategory:'Tijd per categorie',exportCsv:'Download voorbeeld-CSV ↓',downloaded:'Een fictief CSV-bestand is voorbereid.',reset:'Voorbeeld herstellen',resetDone:'Voorbeeldrecords hersteld.',tableCaption:'Dit is een voorbeeld, niet het oorspronkelijke Excel-bestand.',
explainer:[
['Beginnen met rijen en kolommen','Een spreadsheet bevat de gegevens, maar werken ermee vereist navigeren tussen cellen en rijen.'],
['Relevante informatie vinden','Een gestructureerde interface voegt zoeken, filteren, details en begeleide invoer toe.'],
['Records samenvatten','Totalen en overzichten volgen automatisch uit gestructureerde gegevens, zonder handmatige verzameling.']
],
disclaimer:'Geen echte personen, ingelezen bestanden, backend-verzoeken of opgeslagen gegevens in deze demo.',
engineering:['DE TECHNIEK VAN DE ECHTE APP','Wat MyReintegration werkelijk bevat.','De gepubliceerde toepassing is een privéactiviteiten- en sollicitatielogboek voor één persoon, geen algemeen documentbeheerpakket voor bedrijven. De gebruikte technieken zijn herbruikbaar.'],
tech:[
['Gestructureerde invoer','Formulieren verzamelen activiteiten, data, resultaten, afvinkstatus en duur. Een geautoriseerde gebruiker kan records bekijken en aanpassen.'],
['Privégegevens koppelen','Google OAuth en Apps Script verbinden met een privé-Google Sheet, inclusief rechten en revisiecontrole.'],
['Rapporten en export','Weekoverzichten en rapporten naar Excel, PDF, CSV, JSON en bewerkbare e-mailconcepten.'],
['Herstel en consistentie','Concepten, back-ups, veilige herhalingen en conflictbehandeling helpen bij onderbroken werk.']
],
limits:'Dit kantoorvoorbeeld is hypothetisch; de echte applicatie ontstond uit één persoonlijke activiteitenregistratie. Een kantoorversie zou aangepaste velden, rechten, documenttypen en bewaartermijnen nodig hebben. De demo importeert geen Excel-bestanden en beheert geen geüploade documenten.',
links:['Openbare broncode ↗','Gepubliceerde toepassing (toegang vereist) ↗','Stuur me een e-mail over een vergelijkbaar project ↗'],footer:'Terug naar portfolio ↑',
timeUnit:'min',locale:'nl-NL'
},
es:{
title:'De Excel a una aplicación interactiva',desc:'De una necesidad individual de registro en Excel a una aplicación web privada. Un ejemplo ficticio de oficina muestra cómo el mismo método facilita consultar información.',
skip:'Ir a la demostración',back:'Volver al portfolio',brand:'TRABAJOS TÉCNICOS SELECCIONADOS',
heroEye:'04 / SOFTWARE CENTRADO EN PERSONAS · PROCESO REUTILIZABLE',
heroTitle:'De un registro en Excel a una aplicación interactiva.',
heroDesc:'Una persona utilizaba una hoja de cálculo para anotar actividades. Desarrollé una solución web más cómoda, con entradas estructuradas, información privada e informes. La misma ingeniería puede aplicarse a los registros de una oficina.',
heroCta:'Probar el ejemplo de oficina ↘',heroCode:'Consultar código público ↗',
facts:[['Problema de partida real','El registro de actividades de una persona en Excel'],['Aplicación desarrollada','Google OAuth · Apps Script · Google Sheet privada'],['Resultado práctico','Entradas claras · resúmenes semanales · exportaciones']],
context:['EL PROBLEMA Y LA OPORTUNIDAD','Excel guarda la información, pero no siempre es la mejor interfaz.','Excel sirve muy bien para datos tabulares. Cuando hay que encontrar registros, comprender detalles o elaborar informes, una interfaz diseñada para ese trabajo puede convertir las filas en información mucho más fácil de manejar.'],
problem:[
['Antes: registro en una hoja','Los datos se introducen en filas y columnas. La persona debe mantener la estructura e interpretar la tabla.'],
['Transformación técnica','Se organizan los campos en registros, formularios, validaciones, permisos e informes independientes de la hoja.'],
['Después: información accesible','La persona puede filtrar, consultar detalles, revisar totales y generar informes mediante una aplicación.']
],
demo:['INTERACTIVO / EJEMPLO FICTICIO DE OFICINA','Comprueba la diferencia.','Estos registros inventados de una oficina ilustran cómo los datos de una tabla pueden convertirse en una aplicación útil. La demostración no importa archivos Excel ni accede a datos privados.'],
tabs:['Hoja original','Aplicación interactiva','Resumen e informe'],
stages:['ORIGEN / TABLA DE REGISTROS','APLICACIÓN / VISTA INTERACTIVA','INFORME / DATOS DE EJEMPLO'],
example:'EJEMPLO FICTICIO · SIN DATOS PERSONALES',
sheetIntro:'Los mismos seis registros ficticios de una oficina, vistos como una hoja Excel.',
appIntro:'Busca, filtra y consulta los registros. También puedes añadir una entrada ficticia temporal.',
reportIntro:'Resumen calculado a partir de los registros del ejemplo, con exportación CSV.',
column:['Fecha','Actividad','Categoría','Estado','Minutos'],
cats:{all:'Todas las categorías',admin:'Administración',finance:'Finanzas',review:'Revisión',operations:'Operaciones'},
statuses:{all:'Todos los estados',pending:'Pendiente',progress:'En curso',done:'Completado'},
activities:{invoice:'Revisar factura recibida',contract:'Actualizar ficha de contrato',archive:'Archivar solicitud de servicio',reference:'Comprobar referencia normativa',followup:'Seguimiento de solicitud',monthly:'Preparar resumen mensual'},
detail:'Registro seleccionado',hint:'Selecciona una entrada para ver sus datos',duration:'Duración',minute:'min',count:'registros',search:'Buscar registros',searchPlaceholder:'Escribe una actividad...',filterCat:'Categoría',filterStatus:'Estado',noResults:'No hay registros para esos filtros.',add:'+ Añadir ejemplo',cancel:'Cancelar',create:'Añadir registro ficticio',formTitle:'Nuevo registro de muestra',newName:'Descripción',newDate:'Fecha',newCategory:'Categoría',newStatus:'Estado',newDuration:'Minutos',required:'Introduce una descripción, una fecha válida y una duración entre 0 y 1440 minutos.',created:'Registro ficticio añadido. Los cambios no se guardan.',
reportMetrics:['Registros','Completados','Tiempo registrado'],perCategory:'Tiempo por categoría',exportCsv:'Exportar CSV de muestra ↓',downloaded:'Se ha preparado un CSV con datos ficticios.',reset:'Restablecer ejemplo',resetDone:'Se han restaurado los registros de ejemplo.',tableCaption:'Esto es una representación, no el archivo Excel original.',
explainer:[
['Punto de partida: filas y columnas','Una hoja guarda los datos, pero para localizar y comprender información hay que recorrer sus filas.'],
['Encontrar lo que importa','La interfaz ofrece búsqueda, filtros, detalle de cada registro y entrada guiada de información.'],
['Convertir los datos en un resumen útil','Los totales y los informes se calculan desde los registros sin tener que recomponer manualmente las filas.']
],
disclaimer:'Esta demostración no contiene personas reales, archivos importados, conexiones externas ni datos persistentes.',
engineering:['INGENIERÍA DE LA APLICACIÓN REAL','Qué implementa realmente MyReintegration.','La aplicación publicada es un diario privado de actividades y candidaturas para una persona. No es un gestor documental genérico para empresas, aunque demuestra técnicas adaptables.'],
tech:[
['Entrada estructurada','Formularios para actividades, fechas, resultados, estado de finalización y duración. La persona autorizada puede consultar y modificar registros.'],
['Conexión privada de datos','Google OAuth y un servicio Apps Script conectan la interfaz con una hoja privada de Google, con permisos y control de revisiones.'],
['Informes y exportaciones','Vistas por semana y documentos Excel, PDF, CSV, JSON y borradores editables de correo electrónico.'],
['Recuperación y consistencia','Borradores, copias de respaldo, reintentos controlados y resolución de conflictos ante interrupciones.']
],
limits:'El ejemplo de oficina es hipotético; la aplicación real nació del registro de actividades de una persona. Adaptarlo a otra organización exigiría definir sus documentos, campos, permisos y conservación. Esta demostración no importa libros Excel automáticamente ni almacena documentos adjuntos.',
links:['Código público de la aplicación ↗','Aplicación publicada (acceso autorizado) ↗','Escríbeme sobre un proyecto similar ↗'],footer:'Volver al portfolio ↑',
timeUnit:'min',locale:'es-ES'
}
};
const current=()=>t[lang];
const create=(tag,cls,value)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(value!==undefined)x.textContent=value;return x};
const fmtDate=str=>{
 if(!str)return '';
 const d=new Date(str+'T12:00:00Z');
 return new Intl.DateTimeFormat(current().locale,{day:'2-digit',month:'short',year:'numeric',timeZone:'UTC'}).format(d);
};
const minutesFmt=n=>n>=60?Math.floor(n/60)+' h '+(n%60?String(n%60).padStart(2,'0')+' min':''):n+' min';
const displayTitle=r=>r.key?(current().activities[r.key]||r.key):r.custom||'';
const categoryName=r=>current().cats[r.category]||r.category;
const statusName=r=>current().statuses[r.status]||r.status;
const totalMinutes=rows=>rows.reduce((n,r)=>n+r.minutes,0);
const filtered=()=>{
 const q=query.toLocaleLowerCase(lang).trim();
 return records.filter(r=>(category==='all'||r.category===category)&&(status==='all'||r.status===status)&&(!q||(displayTitle(r)+' '+categoryName(r)+' '+statusName(r)).toLocaleLowerCase(lang).includes(q)));
};
const options=(values,labelMap)=>values.map(id=>{const opt=create('option','',labelMap[id]);opt.value=id;return opt});
const heading=(tag,title)=>create(tag,'',title);
const formLabel=(text,node)=>{
 const label=create('label','');
 label.append(create('span','',text),node);
 return label;
};
const makeSelect=(ids,dict,value)=>{
 const s=create('select');s.replaceChildren(...options(ids,dict));s.value=value;return s;
};
function excelView(){
 const u=current(),root=$('view-content');
 root.replaceChildren(create('p','view-intro',u.sheetIntro));
 const wrap=create('div','sheet-wrap'),table=create('table','sheet-grid'),thead=create('thead'),row=create('tr');
 u.column.forEach(s=>row.append(create('th','',s)));thead.append(row);table.append(thead);
 const body=create('tbody');
 records.forEach(r=>{
 const tr=create('tr');
 [fmtDate(r.date),displayTitle(r),categoryName(r),statusName(r),String(r.minutes)].forEach(v=>tr.append(create('td','',v)));
 body.append(tr);
 });
 table.append(body);wrap.append(table);root.append(wrap);
 const foot=create('div','sheet-footer');
 foot.append(create('span','',u.tableCaption),create('span','sheet-stamp','XLSX / EXAMPLE'));
 root.append(foot);
}
function recordDetails(rows){
 const detail=$('record-detail');if(!detail)return;
 let r=rows.find(x=>x.id===selected)||rows[0];
 if(!r){
 detail.replaceChildren(create('strong','detail-kicker',current().detail),create('p','',current().noResults));return;
 }
 selected=r.id;
 const u=current(),dl=create('dl');
 [[u.column[0],fmtDate(r.date)],[u.column[2],categoryName(r)],[u.column[3],statusName(r)],[u.duration,minutesFmt(r.minutes)]].forEach(([label,value])=>{
 const item=create('div'),dt=create('dt','',label),dd=create('dd','',value);item.append(dt,dd);dl.append(item);
 });
 detail.replaceChildren(create('strong','detail-kicker',u.detail),create('h3','',displayTitle(r)),dl);
}
function recordsList(){
 const u=current(),rows=filtered(),target=$('record-list');if(!target)return;
 target.replaceChildren();
 if(!rows.length){target.append(create('p','no-records',u.noResults));recordDetails(rows);return}
 for(const r of rows){
 const btn=create('button','record-button');btn.type='button';btn.setAttribute('aria-pressed',String(r.id===selected));
 const left=create('span');left.append(create('strong','',displayTitle(r)),create('small','',fmtDate(r.date)+' · '+categoryName(r)+' · '+r.minutes+' '+u.minute));
 const pill=create('span','status-pill '+(r.status==='done'?'done':r.status==='pending'?'pending':''),statusName(r));
 btn.append(left,pill);btn.addEventListener('click',()=>{selected=r.id;recordsList()});target.append(btn);
 }
 recordDetails(rows);
}
function newEntryForm(){
 const u=current(),panel=create('div','new-record');panel.id='new-record-panel';
 panel.append(create('h3','',u.formTitle));
 const form=create('form','new-form');form.id='sample-form';
 const title=create('input');title.maxLength=100;title.required=true;title.name='description';
 const date=create('input');date.type='date';date.value='2026-10-16';date.required=true;date.name='date';
 const cat=makeSelect(cats,u.cats,'admin');cat.name='category';
 const stat=makeSelect(states,u.statuses,'pending');stat.name='status';
 const mins=create('input');mins.type='number';mins.min='0';mins.max='1440';mins.value='30';mins.required=true;mins.name='minutes';
 form.append(formLabel(u.newName,title),formLabel(u.newDate,date),formLabel(u.newCategory,cat),formLabel(u.newStatus,stat),formLabel(u.newDuration,mins));
 const actions=create('div','form-actions'),submit=create('button','',u.create),cancel=create('button','secondary',u.cancel);
 submit.type='submit';cancel.type='button';cancel.addEventListener('click',()=>{editing=false;panel.remove()});
 actions.append(submit,cancel);form.append(actions);
 form.addEventListener('submit',e=>{
 e.preventDefault();
 const name=title.value.trim(),m=Number(mins.value);
 if(!name||!date.value||!Number.isInteger(m)||m<0||m>1440){alert(u.required);return}
 const id=records.reduce((a,x)=>Math.max(a,x.id),0)+1;
 records.push({id,date:date.value,custom:name,category:cat.value,status:stat.value,minutes:m});
 selected=id;editing=false;view='web';renderView();
 const feedback=create('span','form-feedback',u.created);
 const tools=$('app-tools');if(tools)tools.append(feedback);
 });
 panel.append(form);return panel;
}
function interactiveView(){
 const u=current(),root=$('view-content');
 root.replaceChildren(create('p','view-intro',u.appIntro));
 const grid=create('div','app-layout'),left=create('div','app-area');
 const head=create('div','app-head');head.append(create('strong','',u.tabs[1]),create('small','',records.length+' '+u.count));left.append(head);
 const filters=create('div','filters');
 const search=create('input');search.type='search';search.value=query;search.placeholder=u.searchPlaceholder;search.setAttribute('aria-label',u.search);
 search.addEventListener('input',()=>{query=search.value;recordsList()});
 const c=makeSelect(['all',...cats],u.cats,category);c.addEventListener('change',()=>{category=c.value;recordsList()});
 const st=makeSelect(['all',...states],u.statuses,status);st.addEventListener('change',()=>{status=st.value;recordsList()});
 filters.append(formLabel(u.search,search),formLabel(u.filterCat,c),formLabel(u.filterStatus,st));left.append(filters);
 const list=create('div','record-list');list.id='record-list';left.append(list);
 const tools=create('div','app-tools');tools.id='app-tools';const add=create('button','',u.add);add.type='button';
 add.addEventListener('click',()=>{editing=!editing;const old=$('new-record-panel');if(old)old.remove();if(editing){left.append(newEntryForm());const first=document.querySelector('#sample-form input');if(first)first.focus()}});
 const reset=create('button','secondary',u.reset);reset.type='button';reset.addEventListener('click',resetAll);
 tools.append(add,reset);left.append(tools);
 const detail=create('aside','record-detail');detail.id='record-detail';grid.append(left,detail);root.append(grid);
 if(editing)left.append(newEntryForm());
 recordsList();
}
function summaryView(){
 const u=current(),root=$('view-content');root.replaceChildren(create('p','view-intro',u.reportIntro));
 const all=records.length,done=records.filter(r=>r.status==='done').length,mins=totalMinutes(records);
 const cards=create('div','report-grid');
 [[String(all),u.reportMetrics[0]],[String(done),u.reportMetrics[1]],[minutesFmt(mins),u.reportMetrics[2]]].forEach(([value,label])=>{
 const item=create('div','report-stat');item.append(create('strong','',value),create('span','',label));cards.append(item)
 });root.append(cards);
 root.append(create('h3','',u.perCategory));
 const bars=create('div','report-bars'),labels=create('div','report-bar-labels');
 const totals=cats.map(cat=>records.filter(x=>x.category===cat).reduce((n,x)=>n+x.minutes,0));
 const max=Math.max(1,...totals);
 for(let i=0;i<cats.length;i++){
 const bar=create('div','report-bar'),column=create('span');
 column.style.height=(Math.max(3,totals[i]/max*135))+'px';bar.append(create('strong','',String(totals[i])),column);
 bars.append(bar);labels.append(create('span','',u.cats[cats[i]]));
 }
 root.append(bars,labels);
 const actions=create('div','report-tools'),download=create('button','',u.exportCsv);
 download.type='button';download.addEventListener('click',exportCSV);
 actions.append(download,create('p','',u.disclaimer));root.append(actions);
}
function exportCSV(){
 const u=current(),rows=[[...u.column]];
 records.forEach(r=>rows.push([r.date,displayTitle(r),categoryName(r),statusName(r),String(r.minutes)]));
 const csv='\uFEFF'+rows.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');
 const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),link=document.createElement('a');
 const objectUrl=URL.createObjectURL(blob);link.href=objectUrl;link.download='office-example-fictitious-'+lang+'.csv';link.click();
 setTimeout(()=>URL.revokeObjectURL(objectUrl),1000);
}
function resetAll(){
 records=records.filter(r=>r.id<=6);
 query='';category='all';status='all';selected=1;editing=false;renderView();
}
function renderView(){
 const u=current(),root=$('view-content');
 $('stage-title').textContent=u.stages[['excel','web','report'].indexOf(view)];
 $('demo-view').setAttribute('aria-labelledby','tab-'+view);
 document.querySelectorAll('[data-view]').forEach(b=>{
 const on=b.dataset.view===view;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;
 });
 const idx=['excel','web','report'].indexOf(view);
 $('explainer-title').textContent=u.explainer[idx][0];$('explainer-text').textContent=u.explainer[idx][1];
 editing=false;root.replaceChildren();
 if(view==='excel')excelView();else if(view==='web')interactiveView();else summaryView();
}
function translate(){
 const u=current();document.documentElement.lang=lang;document.title=u.title+' | Paloma García Muley';
 document.querySelector('meta[name="description"]').content=u.desc;
 const single={
 'skip-link':u.skip,'back-text':u.back,'brand-sub':u.brand,
 'hero-eyebrow':u.heroEye,'hero-title':u.heroTitle,'hero-desc':u.heroDesc,
 'hero-cta':u.heroCta,'hero-code':u.heroCode,
 'context-eyebrow':u.context[0],'context-title':u.context[1],'context-desc':u.context[2],
 'demo-eyebrow':u.demo[0],'demo-title':u.demo[1],'demo-desc':u.demo[2],
 'demo-label':u.example,'demo-disclaimer':u.disclaimer,
 'engineering-eyebrow':u.engineering[0],'engineering-title':u.engineering[1],'engineering-desc':u.engineering[2],
 'limits-text':u.limits,
 'link-source':u.links[0],'link-app':u.links[1],'link-contact':u.links[2],
 'footer-back':u.footer
 };
 for(const [id,value] of Object.entries(single))$(id).textContent=value;
 u.facts.forEach(([title,desc],i)=>{$('fact'+(i+1)+'-head').textContent=title;$('fact'+(i+1)+'-text').textContent=desc});
 u.problem.forEach(([title,desc],i)=>{$('problem'+(i+1)+'-title').textContent=title;$('problem'+(i+1)+'-desc').textContent=desc});
 u.tech.forEach(([title,desc],i)=>{$('tech'+(i+1)+'-title').textContent=title;$('tech'+(i+1)+'-desc').textContent=desc});
 ['excel','web','report'].forEach((k,i)=>$('tab-'+k+'-label').textContent=u.tabs[i]);
 $('back-link').href='./?lang='+lang+'#work';$('footer-back').href='./?lang='+lang+'#work';
 $('lang-switch').setAttribute('aria-label',lang==='es'?'Idioma':lang==='nl'?'Taal':'Language');
 $('demo-tabs').setAttribute('aria-label',lang==='es'?'Seleccionar vista':lang==='nl'?'Weergave kiezen':'Choose view');
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 renderView();
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{
 lang=b.dataset.lang;const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url.href);translate();
}));
const tabs=[...document.querySelectorAll('[data-view]')];
tabs.forEach((b,i)=>{
 b.addEventListener('click',()=>{view=b.dataset.view;renderView()});
 b.addEventListener('keydown',e=>{
 let target=null;
 if(e.key==='ArrowRight'||e.key==='ArrowDown')target=(i+1)%tabs.length;
 else if(e.key==='ArrowLeft'||e.key==='ArrowUp')target=(i+tabs.length-1)%tabs.length;
 else if(e.key==='Home')target=0;else if(e.key==='End')target=tabs.length-1;
 if(target===null)return;
 e.preventDefault();tabs[target].focus();view=tabs[target].dataset.view;renderView();
 });
});
translate();
})();
