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

/* Timer pro Phase: kein automatischer Neustart, stabil auch beim Tabwechsel. */
(function(){
  function display(seconds){const n=Math.max(0,Math.ceil(seconds));return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
  const instances=[];
  function refresh(t){
    t.clock.textContent=display(t.left);
    t.el.classList.toggle('is-over',t.left<=0);
    t.btn.textContent=t.running?'⏸ Pause':t.left<=0?'↻ Neu starten':'▶ Start';
    t.msg.textContent=t.left<=0?'Zeit abgelaufen. Der Timer steht bei 0:00. Mit „Neu starten“ beginnt ein neuer Durchgang.':t.running?'Zeit läuft.':'Bereit oder pausiert. Mit Start geht es weiter.';
  }
  function update(t){if(t.running){const now=performance.now();t.left=Math.max(0,t.left-(now-t.last)/1000);t.last=now;if(t.left<=0)t.running=false;}refresh(t)}
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('section.phase, section.teacher-check').forEach(section=>{
      const teacher=section.classList.contains('teacher-check');
      const secs=Math.max(1,Number(section.dataset.minutes)||5)*60;
      const minLabel=Math.round(secs/60);
      const headingText=teacher?'🗣 Gemeinsame Sicherung':'⏱ Schülerarbeit';
      const el=document.createElement('div');el.className='task-timer'+(teacher?' teacher-timer':'');
      el.setAttribute('role','group');el.setAttribute('aria-label',teacher?'Timer für gemeinsame Besprechung':'Timer für Schülerarbeit');
      el.innerHTML='<div><div class="timer-label">'+(headingText+' · '+minLabel+' Minuten')+'</div><div class="clock" aria-live="off">'+display(secs)+'</div></div><div class="timer-actions"><button type="button" class="timer-toggle">▶ Start</button></div><div class="timer-status" role="status">Bereit. Mit Start beginnt die Zeit.</div>';
      const heading=section.querySelector('h2');if(heading)heading.insertAdjacentElement('afterend',el);else section.prepend(el);
      const t={el,clock:el.querySelector('.clock'),btn:el.querySelector('.timer-toggle'),msg:el.querySelector('.timer-status'),left:secs,running:false,last:0};instances.push(t);
      t.btn.addEventListener('click',()=>{update(t);if(t.left<=0){t.left=secs;t.running=true;t.last=performance.now();}else if(t.running){t.running=false;}else{t.running=true;t.last=performance.now();}refresh(t)});
      refresh(t);
    });
    setInterval(()=>instances.forEach(update),200);
  });
})();
