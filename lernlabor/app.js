const root = document.body.dataset.unit || 'default';
const KEY = 'lernwasser-' + root + '-v2';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch {}
const persist = () => localStorage.setItem(KEY, JSON.stringify(saved));
const put = (k, v) => { saved[k] = v; persist(); };

function $(sel, base=document){ return base.querySelector(sel); }
function $$(sel, base=document){ return [...base.querySelectorAll(sel)]; }

function hydrateFields(){
  $$('[data-save]').forEach(el => {
    const k = el.dataset.save;
    if (saved[k] != null) el.value = saved[k];
    el.addEventListener('input', () => put(k, el.value));
    el.addEventListener('change', () => put(k, el.value));
  });

  $$('[data-tick]').forEach(el => {
    el.checked = !!saved[el.dataset.tick];
    el.addEventListener('change', () => { put(el.dataset.tick, el.checked); updateProgress(); });
  });
}

function initMCQ(){
  $$('[data-check]').forEach(box => {
    const id = box.dataset.check;
    const choices = $$('.choice', box);
    const feedback = $('.feedback', box);
    const savedIndex = saved['q-' + id];
    if (savedIndex !== undefined && choices[savedIndex]) {
      choices[savedIndex].classList.add('selected');
      const ok = Number(box.dataset.correct) === Number(savedIndex);
      feedback.className = 'feedback ' + (ok ? 'good' : 'bad');
      feedback.textContent = (ok ? '✓ Richtig! ' + box.dataset.why : '↻ Noch einmal überlegen. Prüfe die Wissensbox oder tausche dich mit deinem Team aus.');
      feedback.classList.remove('hidden');
    }
    choices.forEach((btn, i) => btn.addEventListener('click', () => {
      choices.forEach(c => c.classList.remove('selected'));
      btn.classList.add('selected');
      put('q-' + id, i);
      const ok = Number(box.dataset.correct) === i;
      feedback.className = 'feedback ' + (ok ? 'good' : 'bad');
      feedback.textContent = ok ? '✓ Richtig! ' + box.dataset.why : '↻ Noch einmal überlegen. Prüfe die Wissensbox oder tausche dich mit deinem Team aus.';
      feedback.classList.remove('hidden');
      updateProgress();
    }));
  });
}

function initPairs(){
  $$('[data-pair]').forEach(box => {
    const selects = $$('select', box);
    selects.forEach(sel => {
      const key = sel.dataset.pair;
      if (saved[key]) sel.value = saved[key];
      sel.addEventListener('change', () => put(key, sel.value));
    });
    const verifyBtn = $('.verify', box);
    if (!verifyBtn) return;
    verifyBtn.addEventListener('click', () => {
      let right = 0;
      selects.forEach(sel => {
        const ok = sel.value === sel.dataset.answer;
        sel.style.borderColor = ok ? '#23976a' : '#d8903b';
        if (ok) right++;
      });
      const feedback = $('.feedback', box);
      feedback.textContent = `${right} von ${selects.length} richtig. ${right === selects.length ? 'Ausgezeichnet!' : 'Verbessere die orange markierten Antworten.'}`;
      feedback.className = 'feedback ' + (right === selects.length ? 'good' : 'bad');
      feedback.classList.remove('hidden');
    });
  });
}

function normalize(str){
  return String(str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[ß]/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function initGapTasks(){
  $$('.fill-task').forEach(box => {
    const inputs = $$('.gap', box);
    inputs.forEach(inp => {
      const key = inp.dataset.gap;
      if (saved[key] != null) inp.value = saved[key];
      inp.addEventListener('input', () => put(key, inp.value));
    });
    const btn = $('.verify-gaps', box);
    if (!btn) return;
    btn.addEventListener('click', () => {
      let right = 0;
      inputs.forEach(inp => {
        const answers = inp.dataset.answer.split('|').map(normalize);
        const ok = answers.includes(normalize(inp.value));
        inp.classList.remove('ok','bad');
        inp.classList.add(ok ? 'ok' : 'bad');
        if (ok) right++;
      });
      const feedback = $('.feedback', box);
      feedback.textContent = `${right} von ${inputs.length} Lücken richtig. ${right === inputs.length ? 'Sehr gut!' : 'Prüfe die markierten Lücken noch einmal.'}`;
      feedback.className = 'feedback ' + (right === inputs.length ? 'good' : 'bad');
      feedback.classList.remove('hidden');
    });
  });
}

function initHotspots(){
  $$('.hotspot-toggle').forEach(btn => btn.addEventListener('click', () => {
    const target = btn.dataset.hotspot;
    $$('.hotspot-box').forEach(box => box.classList.add('hidden'));
    const found = document.querySelector(`[data-hotspot-box="${target}"]`);
    if (found) found.classList.remove('hidden');
  }));
}

const IS_FILTER = root.startsWith('filter');
const PHASE_ORDER = IS_FILTER ? ['fehler','arten','aufbau','wartung','entscheidung','transfer','sicherung'] : ['ziele','anforderungen','wasserqualitaet','verfahren','desinfektion','beispiele','lernergebnisse'];
let activePhase = saved.activePhase || null;
let activePhaseLabel = saved.activePhaseLabel || 'Noch keine Phase gewählt';
let activePhaseMin = Number(saved.activePhaseMin || 0);
// Each phase has its own persisted countdown. Browsing other phases cannot reset an elapsed timer.
let phaseTimers = saved.phaseTimers && typeof saved.phaseTimers === 'object' ? saved.phaseTimers : {};
let runningPhase = null;
let run = false;
let interval = null;
let lastTick = Date.now();
function fmt(s){return `${String(Math.floor(Math.max(0,s)/60)).padStart(2,'0')}:${String(Math.max(0,s)%60).padStart(2,'0')}`;}
function phaseKey(name){return String(name || '');}
function currentSeconds(){return Number(phaseTimers[phaseKey(activePhase)] ?? activePhaseMin*60);}
function saveTimer(){put('phaseTimers', phaseTimers);}
function drawTimer(){const el=$('#timer');if(el)el.textContent=fmt(currentSeconds());const lab=$('#currentPhaseLabel');if(lab)lab.textContent=activePhaseLabel;}
function loadPhase(name,label,minutes){
 if(run && runningPhase!==name){pauseTimer();}
 activePhase=name;activePhaseLabel=label;activePhaseMin=Number(minutes||0);
 put('activePhase',name);put('activePhaseLabel',label);put('activePhaseMin',activePhaseMin);
 if(phaseTimers[name]===undefined){phaseTimers[name]=activePhaseMin*60;saveTimer();}
 drawTimer();highlightNav(name);
}
function highlightNav(name){$$('.timeline-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.navTarget===name));}
function openPanel(name){$$('.content-panel').forEach(p=>p.classList.add('hidden'));const hero=$('.hero-card');if(hero)hero.classList.add('hidden');const back=$('#backToWayfinder');if(back)back.classList.remove('hidden');const panel=document.getElementById('panel-'+name);if(panel){panel.classList.remove('hidden');panel.scrollIntoView({behavior:'smooth',block:'start'});}}
function handleNavClick(btn){loadPhase(btn.dataset.navTarget,btn.dataset.phaseName||btn.dataset.navTarget,btn.dataset.phaseMin||0);openPanel(btn.dataset.navTarget);}
function initImageMap(){const img=$('.wegweiser-map img[usemap]');if(!img)return;const areas=$$('#wegweiser-clickmap area');const scale=()=>{const sx=img.clientWidth/1672,sy=img.clientHeight/941;if(!sx||!sy)return;areas.forEach(area=>{const original=(area.dataset.originalCoords||area.coords).split(',').map(Number);area.coords=original.map((n,i)=>Math.round(n*(i%2?sy:sx))).join(',');});};if(img.complete)scale();else img.addEventListener('load',scale);window.addEventListener('resize',scale);}
function initNav(){$$('[data-nav-target]').forEach(btn=>btn.addEventListener('click',e=>{if(btn.tagName==='AREA')e.preventDefault();handleNavClick(btn)}));$$('.content-panel').forEach(p=>p.classList.add('hidden'));const back=$('#backToWayfinder');if(back)back.addEventListener('click',()=>{$$('.content-panel').forEach(p=>p.classList.add('hidden'));$('.hero-card')?.classList.remove('hidden');back.classList.add('hidden');window.scrollTo({top:0,behavior:'smooth'});});initImageMap();}
function tick(){
 if(!run||!runningPhase)return;
 const now=Date.now();const elapsed=Math.floor((now-lastTick)/1000);if(elapsed<1)return;lastTick+=elapsed*1000;
 phaseTimers[runningPhase]=Math.max(0,Number(phaseTimers[runningPhase]||0)-elapsed);saveTimer();drawTimer();
 if(phaseTimers[runningPhase]===0){run=false;clearInterval(interval);runningPhase=null;alert('Arbeitszeit beendet. Bitte Ergebnisse sichern und zur nächsten Phase wechseln.');}
}
function startTimer(){
 if(!activePhase){alert('Bitte zuerst eine Phase wählen.');return;}
 if(currentSeconds()<=0){alert('Die Zeit dieser Phase ist bereits abgelaufen. Wechsel zur nächsten Sequenz.');return;}
 run=true;runningPhase=activePhase;lastTick=Date.now();clearInterval(interval);interval=setInterval(tick,250);drawTimer();
}
function pauseTimer(){if(run)tick();run=false;runningPhase=null;clearInterval(interval);drawTimer();}
function loadNextPhase(){pauseTimer();const idx=PHASE_ORDER.indexOf(activePhase);const next=PHASE_ORDER[Math.min(idx+1,PHASE_ORDER.length-1)];const btn=document.querySelector(`.timeline-item[data-nav-target="${next}"]`);if(btn)handleNavClick(btn);}
function updateProgress(){
  const all = $$('[data-tick]');
  const done = all.filter(x => x.checked).length;
  const prog = $('#prog');
  const txt = $('#progText');
  if (prog) prog.style.width = (all.length ? done / all.length * 100 : 0) + '%';
  if (txt) txt.textContent = `${done}/${all.length} Phasen abgeschlossen`;
}

function initExports(){
  const exportBtn = $('#export');
  if(exportBtn){
    exportBtn.addEventListener('click', () => {
      let text = `LERNPROTOKOLL – ${document.title}\nDatum: ${new Date().toLocaleDateString('de-DE')}\n\n`;
      $$('[data-save]').forEach(t => {
        const lab = t.closest('.task')?.querySelector('h3')?.textContent || t.getAttribute('aria-label') || 'Notiz';
        text += lab + '\n' + (t.value || '(leer)') + '\n\n';
      });
      $$('[data-gap]').forEach(g => {
        text += `Lücke ${g.dataset.gap}: ${g.value || '(leer)'}\n`;
      });
      text += '\n';
      $$('[data-check]').forEach(q => {
        const selected = saved['q-' + q.dataset.check];
        text += (q.querySelector('h3')?.textContent || 'Frage') + ' – ' + (selected !== undefined ? q.querySelectorAll('.choice')[selected].textContent : 'noch offen') + '\n';
      });
      const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = root + '-lernprotokoll.txt';
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  const printBtn = $('#print');
  if (printBtn) printBtn.onclick = () => window.print();
}

function initButtons(){
  const start = $('#start'); if(start) start.onclick = startTimer;
  const pause = $('#pause'); if(pause) pause.onclick = pauseTimer;
  const next = $('#nextPhase'); if(next) next.onclick = loadNextPhase;
}

hydrateFields();
initMCQ();
initPairs();
initGapTasks();
initHotspots();
initNav();
initButtons();
// Der Countdown beginnt beim Aufruf der Trinkwasserbehandlung automatisch.
// Bestehende Restzeiten werden respektiert; die Startseite bleibt der Wegweiser.
if (root === 'trinkwasser') {
  if (!activePhase) loadPhase('ziele', '1 · Ziele', 8);
  if (currentSeconds() > 0) startTimer();
}
initExports();
updateProgress();
drawTimer();

const doseCheck=$('#dosecheck');if(doseCheck)doseCheck.addEventListener('click',()=>{const inp=$('#doseanswer');const result=$('#dosefeedback');const val=Number(inp.value);const ok=inp.value.trim()!==''&&Number.isFinite(val)&&Math.abs(val-36)<.001;result.className='feedback '+(ok?'good':'bad');result.textContent=ok?'✓ Richtig: 12 × 3 = 36 g/h.':'Noch nicht richtig. 1 m³ enthält 1000 Liter; das Ergebnis wird hier in g/h angegeben.';});
