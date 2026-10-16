/* BOTIA regulatory case study · dated, public-safe extract. Does not call private systems. */
(()=>{
'use strict';
const $=id=>document.getElementById(id);
const locales={en:'en-GB',nl:'nl-NL',es:'es-ES'};
const pick=new URLSearchParams(location.search).get('lang');
let lang=Object.hasOwn(locales,pick)?pick:'en',filter='all',status='SIN_CAMBIOS',snapshot=null;
const text={
en:{
brand:'TECHNICAL CASE STUDIES',back:'Back to portfolio',skip:'Skip to the system',
heroKicker:'03 / KNOWLEDGE BASE · DOCUMENTARY INTELLIGENCE',
heroTitle:'A knowledge base that can track its sources.',
heroDesc:'BOTIA separates official documentary evidence from internal criteria and monitors changes in regulations and institutional sources. Detections remain traceable and subject to editorial review.',
explore:'Explore the system ↘',regulatory:'Public BOTIA Regulatory ↗',asof:'Verified report snapshot · 16 October 2026',
stages:['OFFICIAL SOURCES','VERSION / CONTENT CHECK','SAVED OBSERVATION','HUMAN EDITORIAL REVIEW'],
foot:'Detection ≠ automatic incorporation',metrics:['active checks','EU legal acts','pending detections','documented exclusions'],
sys:['WORKING SYSTEM · VERIFIED RUNS','What the monitoring actually does.','Sources are catalogued before checks begin. The watcher compares trusted identifiers, versions and fingerprints while preserving the separation between observation and editorial approval.'],
caps:[
['Source governance','Documents from institutions, peer-reviewed studies, internal criteria and unclassified materials remain distinct. Provenance, versions, licensing and SHA-256 fingerprints are recorded.'],
['Repeatable checks','Python adapters query EUR-Lex, EFSA, FDA/eCFR, Codex and WHO/JECFA/IARC primary sources when accessible and supported.'],
['Three explicit results','SIN_CAMBIOS, VERSION_NUEVA and CONSULTA_FALLIDA are independent outcomes. Failed requests are never treated as unchanged sources.'],
['Editorial safeguards','Events remain DETECTADO until separately reviewed. Catalogue and index files are protected against automated modifications.']],
dash:['VERIFIED REPORT · FROZEN SNAPSHOT','Three days of real monitoring.','Selected outcomes from the private runs of 14–16 October 2026. No live connection or automatic update is claimed.'],
history:['Daily outcomes','Three successful GitHub Actions runs','VERIFIED RUNS'],
coverage:['Source coverage','231 checks across five source groups','MONITORED SOURCES'],
legend:['Unchanged','New / changed','Failed'],
histNote:'An updated EFSA RSS feed counts as one source result even when it contains several new publications.',
coverNote:'114 references were excluded with documented reasons. Not all 452 catalogue records are continuously monitored.',
events:['AUDIT TRAIL · DETECTION LOG','Changes can be inspected before acceptance.','Browse the sixteen detections and open the public institutional source. All records remain pending editorial review.'],
filters:['All','EU consolidations','EFSA publications','eCFR revisions'],
types:{EU_CONSOLIDATION:'EU CONSOLIDATION',EFSA_PUBLICATION:'EFSA PUBLICATION',ECFR_REVISION:'eCFR REVISION'},
count:n=>n+' recorded detections',open:'Official source ↗',
example:['REAL REGULATORY EXAMPLE','Regulation (EU) 2023/915.','The watcher observed a consolidation from 19 August 2026 while the catalogue still recorded 8 October 2025. It logged the difference, without silently changing the catalogue.'],
old:'Catalogued version',observed:'Observed consolidation',editorial:'Editorial status: DETECTADO · review pending',official:'Open original EUR-Lex source ↗',
states:{
SIN_CAMBIOS:['No later observation for the configured source','The monitored version or content matches the stored baseline. This does not certify all legislation or evidence is covered.'],
VERSION_NUEVA:['A change has been detected','A newer verified consolidation, content fingerprint or new publication is recorded for editorial review, not incorporated automatically.'],
CONSULTA_FALLIDA:['The source could not be verified','Blocked access, invalid data or a failed request remain visible as errors and do not advance the last valid observation.']},
stateTitle:'Three different technical results',stateCaveat:'These interactive controls explain the validated rules; they do not run production queries.',
transfer:['TECHNICAL SKILLS / BUSINESS APPLICATIONS','Systems designed for decisions.','The same traceability and version-monitoring methods could be applied in other document-intensive business domains.'],
skills:[['Source provenance','Track whether a statement comes from an official publication, study or internal interpretation.'],['Scheduled monitoring','Compare selected sources repeatedly and keep a dated observation history, including failed access.'],['Protected editorial records','Prevent duplicate detections, retain evidence and keep approval separate from automatic discovery.']],
privacy:'This is a dated public-safe portfolio extract. The complete repository, document files, full watcher configuration and original source code remain private. It is not a regulatory compliance certification.',
links:['Public BOTIA Regulatory ↗','Illustrative comparison script ↗','Email me ↗','Back to portfolio ↑']
},
nl:{
brand:'TECHNISCHE CASESTUDIES',back:'Terug naar portfolio',skip:'Naar het systeem',
heroKicker:'03 / KNOWLEDGE BASE · DOCUMENTATIE EN REGELGEVING',heroTitle:'Een kennisbank die haar bronnen volgt.',
heroDesc:'BOTIA houdt officiële documenten gescheiden van eigen criteria en volgt wijzigingen in regelgeving en institutionele bronnen. Iedere detectie blijft controleerbaar en wacht op redactionele beoordeling.',
explore:'Bekijk het systeem ↘',regulatory:'Openbaar BOTIA Regulatory ↗',asof:'Geverifieerde momentopname · 16 oktober 2026',
stages:['OFFICIËLE BRONNEN','VERSIE / INHOUDSCONTROLE','OPGESLAGEN WAARNEMING','MENSELIJKE BEOORDELING'],
foot:'Detectie ≠ automatische opname',metrics:['actieve controles','EU-wetgevingsakten','openstaande detecties','gedocumenteerde uitsluitingen'],
sys:['WERKEND SYSTEEM · GEVERIFIEERDE RUNS','Wat het monitoringsysteem werkelijk doet.','Bronnen worden eerst gecatalogiseerd. De watcher vergelijkt identificaties, versies en controlewaarden; vaststellen en goedkeuren blijven aparte stappen.'],
caps:[['Bronnenbeheer','Officiële bronnen, wetenschappelijke studies, eigen criteria en niet-geclassificeerde documenten blijven herkenbaar. Herkomst, versies, rechten en SHA-256-waarden worden vastgelegd.'],['Herhaalbare controles','Python-adapters controleren EUR-Lex, EFSA, FDA/eCFR, Codex en WHO/JECFA/IARC waar toegang en verificatie mogelijk zijn.'],['Drie expliciete uitkomsten','SIN_CAMBIOS, VERSION_NUEVA en CONSULTA_FALLIDA zijn verschillende uitkomsten. Een fout wordt niet als ongewijzigd geregistreerd.'],['Redactionele bescherming','Detecties blijven DETECTADO tot een afzonderlijke beoordeling. Catalogus en index zijn beschermd tegen automatische wijzigingen.']],
dash:['GEVERIFIEERD RAPPORT · MOMENTOPNAME','Drie dagen echte monitoring.','Uitkomsten van de besloten runs van 14–16 oktober 2026. Geen live verbinding of automatische vernieuwing.'],
history:['Dagelijkse uitkomsten','Drie geslaagde GitHub Actions-runs','GEVERIFIEERD'],
coverage:['Dekking van de bronnen','231 controles in vijf brongroepen','BRONGROEPEN'],
legend:['Onveranderd','Nieuw / gewijzigd','Mislukt'],
histNote:'Een gewijzigd EFSA-RSS-feed telt als één bronresultaat, ook wanneer meerdere publicaties werden toegevoegd.',
coverNote:'114 verwijzingen zijn onderbouwd uitgesloten. Niet alle 452 catalogusrecords worden doorlopend gecontroleerd.',
events:['CONTROLELOG · DETECTIES','Wijzigingen zijn zichtbaar vóór acceptatie.','Bekijk zestien detecties met links naar de institutionele bronnen. Alle wachten op redactionele beoordeling.'],
filters:['Alle','EU-consolidaties','EFSA-publicaties','eCFR-revisies'],
types:{EU_CONSOLIDATION:'EU-CONSOLIDATIE',EFSA_PUBLICATION:'EFSA-PUBLICATIE',ECFR_REVISION:'eCFR-REVISIE'},
count:n=>n+' geregistreerde detecties',open:'Officiële bron ↗',
example:['ECHT REGELGEVINGSVOORBEELD','Verordening (EU) 2023/915.','De watcher vond een consolidatie van 19 augustus 2026, terwijl de catalogus nog 8 oktober 2025 vermeldde. De wijziging werd vastgelegd zonder de catalogus te veranderen.'],
old:'Gecatalogiseerde versie',observed:'Waargenomen consolidatie',editorial:'Redactionele status: DETECTADO · beoordeling open',official:'Open originele EUR-Lex-bron ↗',
states:{SIN_CAMBIOS:['Geen nieuwere bronwaarneming','De gecontroleerde versie komt overeen met de vastgelegde referentie. Dit betekent geen volledige wettelijke dekking.'],VERSION_NUEVA:['Wijziging vastgesteld','Een nieuwere consolidatie, bronwaarde of publicatie wordt geregistreerd voor redactionele beoordeling; niet automatisch opgenomen.'],CONSULTA_FALLIDA:['Bron niet verifieerbaar','Geblokkeerde of foutieve verzoeken blijven herkenbaar als fouten. De vorige geldige versie blijft behouden.']},
stateTitle:'Drie verschillende resultaten',stateCaveat:'Deze knoppen leggen de gevalideerde logica uit; ze voeren geen live controle uit.',
transfer:['TECHNISCHE VAARDIGHEDEN / BEDRIJFSTOEPASSINGEN','Ontworpen voor beslissingen.','Dezelfde technieken zijn bruikbaar voor herkomst en versiebeheer in andere documentintensieve sectoren.'],
skills:[['Herkomst van bronnen','Onderscheid officiële publicaties, onderzoeken en eigen interpretaties.'],['Geplande monitoring','Vergelijk geselecteerde bronnen herhaaldelijk en bewaar observaties en fouten.'],['Beschermd redactioneel register','Voorkom dubbele detecties en houd opname gescheiden van automatische vondsten.']],
privacy:'Dit is een gedateerd openbaar fragment. De volledige privérepository, documenten, watcher-configuratie en originele broncode blijven privé. Er wordt geen wettelijke conformiteit gecertificeerd.',
links:['Openbaar BOTIA Regulatory ↗','Illustratieve vergelijkingscode ↗','Stuur me een e-mail ↗','Terug naar portfolio ↑']
},
es:{
brand:'CASOS TÉCNICOS',back:'Volver al portfolio',skip:'Ir al sistema',
heroKicker:'03 / KNOWLEDGE BASE · INTELIGENCIA DOCUMENTAL',
heroTitle:'Una base de conocimiento que vigila sus fuentes.',
heroDesc:'La Knowledge Base de BOTIA separa la evidencia oficial de los criterios propios y vigila cambios en normas y fuentes institucionales. Cada detección conserva trazabilidad y queda pendiente de revisión editorial.',
explore:'Explorar el sistema ↘',regulatory:'Regulatory público de BOTIA ↗',asof:'Informe comprobado · 16 de octubre de 2026',
stages:['FUENTES OFICIALES','VERSIÓN / COMPROBACIÓN','OBSERVACIÓN REGISTRADA','REVISIÓN EDITORIAL HUMANA'],
foot:'Detectar ≠ incorporar automáticamente',metrics:['comprobaciones activas','actos legislativos UE','detecciones pendientes','exclusiones justificadas'],
sys:['SISTEMA REAL · EJECUCIONES COMPROBADAS','Qué hace realmente el monitor.','Primero se catalogan las fuentes. Después el watcher compara identificadores, versiones y huellas, registra los resultados y separa la detección de la aprobación editorial.'],
caps:[['Gobernanza de fuentes','Separa documentos oficiales, estudios científicos, criterios de BOTIA y material sin clasificar. Conserva procedencia, versiones, licencias y huellas SHA-256.'],['Consultas reproducibles','Adaptadores Python revisan EUR-Lex, EFSA, FDA/eCFR, Codex y OMS/JECFA/IARC cuando es posible acceder y verificar la fuente.'],['Tres resultados explícitos','SIN_CAMBIOS, VERSION_NUEVA y CONSULTA_FALLIDA son resultados distintos. Una consulta fallida nunca se trata como ausencia de cambios.'],['Protección editorial','Las detecciones quedan en DETECTADO hasta su revisión. El catálogo y el índice están protegidos frente a modificaciones automáticas.']],
dash:['INFORME VERIFICADO · CAPTURA HISTÓRICA','Tres días de vigilancia real.','Resultados de los informes privados del 14 al 16 de octubre de 2026. No es una conexión en directo con el watcher.'],
history:['Resultados por día','Tres ejecuciones correctas de GitHub Actions','EJECUCIONES REALES'],
coverage:['Cobertura de fuentes','231 comprobaciones en cinco grupos','FUENTES'],
legend:['Sin cambios','Nuevo / modificado','Fallida'],
histNote:'Un cambio en el RSS de EFSA cuenta como una comprobación, aunque incorpore varias publicaciones nuevas.',
coverNote:'114 referencias excluidas con motivos documentados. No se afirma vigilar todos los 452 registros del catálogo.',
events:['REGISTRO AUDITABLE · DETECCIONES','Los cambios son visibles antes de aprobarse.','Explora las dieciséis detecciones y consulta sus fuentes institucionales. Todas siguen pendientes de revisión editorial.'],
filters:['Todas','Consolidaciones UE','Publicaciones EFSA','Revisiones eCFR'],
types:{EU_CONSOLIDATION:'CONSOLIDACIÓN UE',EFSA_PUBLICATION:'PUBLICACIÓN EFSA',ECFR_REVISION:'REVISIÓN eCFR'},
count:n=>n+' detecciones registradas',open:'Fuente oficial ↗',
example:['EJEMPLO NORMATIVO REAL','Reglamento (UE) 2023/915.','El watcher observó una consolidación del 19 de agosto de 2026 frente al 8 de octubre de 2025 que figuraba en el catálogo. Registró la diferencia sin modificar el documento catalogado.'],
old:'Versión catalogada',observed:'Consolidación observada',editorial:'Estado editorial: DETECTADO · pendiente de revisión',official:'Abrir fuente EUR-Lex original ↗',
states:{SIN_CAMBIOS:['Sin versión posterior observada','La fuente coincide con la referencia registrada. No significa que esté cubierta toda la legislación.'],VERSION_NUEVA:['Cambio detectado','Una consolidación posterior, huella nueva o publicación queda registrada para revisión editorial, sin incorporación automática.'],CONSULTA_FALLIDA:['Consulta sin verificar','Los bloqueos, fallos de red y respuestas inválidas se registran como errores; la última observación válida se conserva.']},
stateTitle:'Tres resultados técnicos diferentes',stateCaveat:'Estos botones explican la lógica comprobada; no ejecutan consultas de producción.',
transfer:['COMPETENCIAS TÉCNICAS / APLICACIÓN EMPRESARIAL','Sistemas diseñados para tomar decisiones.','Estos mismos métodos pueden aplicarse a otros sectores que necesitan trazabilidad documental y vigilancia de versiones.'],
skills:[['Procedencia documental','Distinguir fuentes oficiales, estudios y criterios propios y conservar el origen de cada afirmación.'],['Vigilancia programada','Consultar fuentes seleccionadas, conservar observaciones fechadas y registrar fallos.'],['Registro editorial protegido','Evitar detecciones duplicadas y separar incorporación de descubrimiento automático.']],
privacy:'Esta presentación es un extracto público fechado. El repositorio privado, documentos, configuración completa y código original del watcher no se publican. No constituye una certificación de cumplimiento normativo.',
links:['Explorador Regulatory público ↗','Script ilustrativo de comparación ↗','Escríbeme por correo ↗','Volver al portfolio ↑']
}
};
function el(tag,cls,value){const a=document.createElement(tag);if(cls)a.className=cls;if(value!==undefined)a.textContent=value;return a}
const ui=()=>text[lang];
const formatted=date=>{const d=new Date(date);return Number.isNaN(d.getTime())?date:new Intl.DateTimeFormat(locales[lang],{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(d)};
function renderHistory(){
 $('history').replaceChildren();
 for(const r of snapshot.daily_results){
 const container=el('div','history-row'),header=el('div','history-head'),bar=el('div','history-bar'),sum=r.unchanged+r.new+r.failed;
 header.append(el('span','',formatted(r.date)),el('span','',r.unchanged+' / '+r.new+' / '+r.failed));
 for(const [key,cls] of [['unchanged','seg-same'],['new','seg-new'],['failed','seg-failed']])if(r[key]){
 const seg=el('span',cls);seg.style.width=r[key]/sum*100+'%';bar.append(seg)}
 container.append(header,bar);$('history').append(container);
 }
 ui().legend.forEach((v,i)=>$(["legend-same","legend-new","legend-failed"][i]).textContent=v);
}
function renderCoverage(){
 $('coverage').replaceChildren();
 for(const r of snapshot.active_coverage){
 const row=el('div','coverage-row'),head=el('div','coverage-top'),bar=el('div','coverage-bar'),fill=el('span');
 head.append(el('span','',r[lang]),el('strong','',String(r.count)));
 fill.style.width=r.count/snapshot.total_monitored*100+'%';bar.append(fill);row.append(head,bar);$('coverage').append(row);
 }
}
function renderEvents(){
 const arr=snapshot.events.filter(e=>filter==='all'||e.type===filter).sort((a,b)=>b.detected_on.localeCompare(a.detected_on));
 $('event-count').textContent=ui().count(arr.length);$('event-list').replaceChildren();
 for(const r of arr){
 const row=el('div','event-row'),copy=el('div','event-content');
 copy.append(el('strong','',r.title),el('span','',(ui().types[r.type]||r.type)+' · '+r.editorial_status));
 const link=el('a','',ui().open);link.href=r.official_url;link.target='_blank';link.rel='noopener noreferrer';
 row.append(el('div','event-date',formatted(r.detected_on)),copy,link);$('event-list').append(row);
 }
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
}
function renderState(){
 const d=ui().states[status];
 $('state-heading').textContent=d[0];$('state-description').textContent=d[1];
 document.querySelectorAll('[data-status]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.status===status)));
}
function translate(){
 const t=ui();document.documentElement.lang=lang;document.title=t.heroTitle+' | Paloma García Muley';
 const set=(id,value)=>$(id).textContent=value;
 const pairs={
 'skip':t.skip,'back-text':t.back,'wordmark-sub':t.brand,
 'hero-kicker':t.heroKicker,'hero-title':t.heroTitle,'hero-description':t.heroDesc,
 'explore-button':t.explore,'regulatory-button':t.regulatory,'hero-asof':t.asof,
 'vis-foot':t.foot,'system-eyebrow':t.sys[0],'system-title':t.sys[1],'system-lede':t.sys[2],
 'dashboard-eyebrow':t.dash[0],'dashboard-title':t.dash[1],'dashboard-description':t.dash[2],
 'history-title':t.history[0],'history-subtitle':t.history[1],'history-tag':t.history[2],
 'coverage-title':t.coverage[0],'coverage-subtitle':t.coverage[1],'coverage-tag':t.coverage[2],
 'history-note':t.histNote,'coverage-note':t.coverNote,
 'events-eyebrow':t.events[0],'events-title':t.events[1],'events-description':t.events[2],
 'example-eyebrow':t.example[0],'example-title':t.example[1],'example-description':t.example[2],
 'old-label':t.old,'new-label':t.observed,'editorial-label':t.editorial,'official-example-link':t.official,
 'state-title':t.stateTitle,'state-caveat':t.stateCaveat,
 'transfer-eyebrow':t.transfer[0],'transfer-title':t.transfer[1],'transfer-description':t.transfer[2],
 'privacy-description':t.privacy
 };
 for(const [id,value] of Object.entries(pairs))set(id,value);
 for(let i=0;i<4;i++){
 set(['vis-source','vis-check','vis-result','vis-review'][i],t.stages[i]);
 set(['metric-active-label','metric-law-label','metric-events-label','metric-excluded-label'][i],t.metrics[i]);
 set('cap-h'+(i+1),t.caps[i][0]);set('cap-p'+(i+1),t.caps[i][1]);
 }
 for(let i=0;i<3;i++){set('transfer-h'+(i+1),t.skills[i][0]);set('transfer-p'+(i+1),t.skills[i][1]);}
 ['filter-all','filter-eu','filter-efsa','filter-ecfr'].forEach((x,i)=>set(x,t.filters[i]));
 ['footer-regulatory','footer-code','footer-contact','footer-return'].forEach((x,i)=>set(x,t.links[i]));
 $('footer-contact').setAttribute('title','palomagarciamuley@gmail.com');
 $('back').href='./?lang='+lang+'#work';
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 if(snapshot){
 set('metric-active',String(snapshot.total_monitored));
 set('metric-law',String(snapshot.active_coverage[0].count));
 set('metric-events',String(snapshot.editorial_events));
 set('metric-excluded',String(snapshot.exclusions));
 renderHistory();renderCoverage();renderEvents();
 }
 renderState();
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{
 lang=b.dataset.lang;const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url.href);translate();
}));
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;if(snapshot)renderEvents()}));
document.querySelectorAll('[data-status]').forEach(b=>b.addEventListener('click',()=>{status=b.dataset.status;renderState()}));
translate();
fetch('./knowledge-monitor-snapshot.json',{cache:'no-store'})
.then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()})
.then(d=>{if(d.total_monitored!==231||d.events.length!==d.editorial_events||d.daily_results.length!==3||d.active_coverage.reduce((n,x)=>n+x.count,0)!==231)throw Error('Invalid report snapshot');snapshot=d;translate()})
.catch(e=>{const msg=lang==='es'?'No se ha podido cargar el informe: ':lang==='nl'?'Kan rapport niet laden: ':'Unable to load monitoring report: ';const p=el('p','',msg+e.message);p.setAttribute('role','alert');$('event-list').replaceChildren(p)});
})();
