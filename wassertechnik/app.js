'use strict';
function $(id){return document.getElementById(id)}
function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
function note(id,html,ok){let el=$(id);el.hidden=false;el.className='feedback '+(ok?'good':'bad');el.innerHTML=html}
function checkChoice(name,correct,feedbackId,correctExplanation,incorrectExplanation){const chosen=document.querySelector(`input[name="${name}"]:checked`);if(!chosen){note(feedbackId,'Wähle zuerst eine Antwort.',false);return false}const ok=chosen.value===String(correct);note(feedbackId,(ok?'✓ ':'↻ ')+(ok?correctExplanation:incorrectExplanation),ok);return ok}
function checkMulti(name,correct,feedbackId,explanation){let vals=[...document.querySelectorAll(`input[name="${name}"]:checked`)].map(e=>e.value).sort();let ok=JSON.stringify(vals)===JSON.stringify([...correct].sort());note(feedbackId,(ok?'✓ ':'↻ ')+explanation,ok);return ok}
function markDone(id){document.querySelector(`[data-done="${id}"]`)?.classList.add('good');const k='tw-modules-'+location.pathname;let done=JSON.parse(localStorage.getItem(k)||'[]');if(!done.includes(id))done.push(id);localStorage.setItem(k,JSON.stringify(done));let all=document.querySelectorAll('[data-done]');let count=[...all].filter(x=>done.includes(x.dataset.done)).length;$('prog').style.width=Math.round(count/all.length*100)+'%';$('progressText').textContent=`${count} von ${all.length} Abschnitten erledigt`}
function initProgress(){try{let done=JSON.parse(localStorage.getItem('tw-modules-'+location.pathname)||'[]');let all=document.querySelectorAll('[data-done]');let n=0;all.forEach(x=>{if(done.includes(x.dataset.done)){x.classList.add('good');n++}});$('prog').style.width=Math.round(n/all.length*100)+'%';$('progressText').textContent=`${n} von ${all.length} Abschnitten erledigt`}catch(e){}}
function saveText(id){try{localStorage.setItem('tw-note-'+location.pathname+'-'+id,$(id).value);note('saved-'+id,'Notiz auf diesem Gerät gespeichert. Kein Versand an die Lehrkraft.',true)}catch(e){note('saved-'+id,'Speichern ist im privaten Browsermodus eventuell nicht möglich.',false)}}
function restoreTexts(){document.querySelectorAll('textarea[data-restore]').forEach(e=>{try{e.value=localStorage.getItem('tw-note-'+location.pathname+'-'+e.id)||''}catch(_){}})}
function setupQuiz(items){let selected={};let answered={};let root=$('quiz');function render(){root.innerHTML='';items.forEach((q,i)=>{const div=document.createElement('div');div.className='card';const h=document.createElement('h3');h.textContent=`${i+1}. ${q.question}`;div.appendChild(h);q.options.forEach((op,j)=>{let label=document.createElement('label');label.className='choice';let input=document.createElement('input');input.type='radio';input.name='final-'+i;input.value=j;input.checked=selected[i]===j;input.addEventListener('change',()=>selected[i]=j);label.append(input,document.createTextNode(' '+op));div.appendChild(label)});if(answered[i]!==undefined){let f=document.createElement('div');f.className='feedback '+(answered[i]?'good':'bad');f.textContent=(answered[i]?'✓ Richtig. ':'Noch nicht richtig. ')+q.why;div.appendChild(f)}root.appendChild(div)});let btn=document.createElement('button');btn.textContent='Selbsttest auswerten';btn.onclick=()=>{items.forEach((q,i)=>{if(selected[i]!==undefined)answered[i]=selected[i]===q.correct});render();let n=Object.values(answered).filter(Boolean).length;$('result').textContent=`${n} von ${items.length} richtig. ${n===items.length?'Alle Aufgaben gelöst!':'Lies die Rückmeldungen und wiederhole die schwierigen Inhalte.'}`;if(Object.keys(answered).length===items.length)markDone('test')};root.appendChild(btn)}render()}
window.addEventListener('DOMContentLoaded',()=>{initProgress();restoreTexts()});

/* Virtuelle, unabhängige Timer pro Aufgabenphase. Keine Datenerfassung. */
(function(){
  const timers = new Map();
  const clockFormat = s => { const n=Math.max(0,Math.ceil(s));return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0'); };
  function paint(t){
    t.clock.textContent=clockFormat(t.remaining);
    t.wrap.classList.toggle('is-over',t.remaining<=0);
    t.toggle.textContent=t.running?'⏸ Pause':t.remaining<=0?'↻ Noch einmal':'▶ Start';
    t.status.textContent=t.remaining<=0?'Zeit abgelaufen – Aufgabe abschließen und bei Bedarf mit der Lehrkraft besprechen.':t.running?'Timer läuft. Du kannst ihn jederzeit pausieren.':'Timer bereit / pausiert. Die Aufgabe bleibt jederzeit zugänglich.';
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('section.phase').forEach((section,i)=>{
      const phase=section.querySelector('.tag')?.textContent||section.textContent.slice(0,70);
      const match=phase.match(/(\d+)\s*Minuten/);
      const secs=Number(match?.[1]||5)*60;
      const wrap=document.createElement('div');wrap.className='task-timer';wrap.setAttribute('role','group');wrap.setAttribute('aria-label','Aufgaben-Timer');
      wrap.innerHTML='<div><div class="timer-label">⏱ Zeitfenster für diese Aufgabe · '+Math.round(secs/60)+' Min.</div><div class="clock" aria-live="off">'+clockFormat(secs)+'</div></div><div class="timer-actions"><button type="button" class="timer-toggle">▶ Start</button><button type="button" class="timer-reset">↻ Zurücksetzen</button></div><div class="timer-status" role="status">Timer bereit. Starte ihn zu Beginn dieser Aufgabe.</div>';
      const h=section.querySelector('h2'); h?.insertAdjacentElement('afterend',wrap);if(!h)section.prepend(wrap);
      const t={wrap,clock:wrap.querySelector('.clock'),toggle:wrap.querySelector('.timer-toggle'),status:wrap.querySelector('.timer-status'),remaining:secs,total:secs,running:false,last:0};timers.set(i,t);
      t.toggle.addEventListener('click',()=>{if(t.remaining<=0)t.remaining=t.total;t.running=!t.running;t.last=performance.now();paint(t)});
      wrap.querySelector('.timer-reset').addEventListener('click',()=>{t.running=false;t.remaining=t.total;paint(t)});paint(t);
    });
    setInterval(()=>{if(document.hidden)return;const now=performance.now();timers.forEach(t=>{if(!t.running)return;t.remaining=Math.max(0,t.remaining-(now-t.last)/1000);t.last=now;if(t.remaining<=0){t.running=false;}paint(t)})},200);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden){const now=performance.now();timers.forEach(t=>t.last=now)}});
  });
})();
