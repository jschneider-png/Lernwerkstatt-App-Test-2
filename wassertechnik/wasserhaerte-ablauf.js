/* Geführter Lernweg Wasserhärte: jeweils nur eine aktive Uhr. */
(() => {
  'use strict';
  const phases = [
    {label:'1 · Digitaler Einstieg',seconds:180},
    {label:'2 · Gemeinsame Sicherung',seconds:120},
    {label:'3 · Lernpostkarten',seconds:600},
    {label:'4 · Kartenauswertung',seconds:360},
    {label:'5 · Praxisfall',seconds:180},
    {label:'6 · Kompetenzcheck',seconds:240},
    {label:'7 · Abschluss',seconds:120}
  ];
  const $id = id => document.getElementById(id);
  document.addEventListener('DOMContentLoaded', () => {
    let active = -1, left = 180, running = false, deadline = 0;
    const widget = $id('floatingTimer'), time = $id('floatTime'), phaseLabel=$id('floatPhase'), status=$id('floatStatus');
    const toggle=$id('floatToggle'), restart=$id('floatRestart');
    const format = s => { const n=Math.max(0,Math.ceil(s)); return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0'); };
    function tick(){if(!running)return;left=Math.max(0,(deadline-performance.now())/1000);if(left<=0){running=false;left=0;}render();}
    function render(){
      time.textContent=format(left);
      phaseLabel.textContent=active>=0?phases[active].label:'Phase auswählen';
      widget.classList.toggle('time-up',active>=0&&left===0);
      toggle.disabled=active<0;restart.disabled=active<0;
      toggle.textContent=running?'⏸ Pause':left===0?'↻ Neu starten':'▶ '+(active<0?'Start':left===phases[active].seconds?'Start':'Fortsetzen');
      status.textContent=active<0?'Wähle eine Lernphase.':running?'Zeit läuft.':left===0?'Zeit abgelaufen – gestoppt. Neustart nur per Klick.':'Bereit oder pausiert.';
      document.querySelectorAll('.flow-start').forEach((b,i)=>{b.classList.toggle('is-active',i===active);b.setAttribute('aria-pressed',String(i===active));});
    }
    function start(i){
      if(i<0||i>=phases.length)return;
      active=i;left=phases[i].seconds;running=true;deadline=performance.now()+left*1000;
      render();$id('lernphase-'+(i+1))?.scrollIntoView({behavior:'smooth',block:'start'});
    }
    document.querySelectorAll('[data-target-step]').forEach(btn=>btn.addEventListener('click',()=>start(Number(btn.dataset.targetStep))));
    toggle.addEventListener('click',()=>{
      if(active<0)return;
      tick();
      if(running){running=false;}else{if(left<=0)left=phases[active].seconds;running=true;deadline=performance.now()+left*1000;}
      render();
    });
    restart.addEventListener('click',()=>{if(active<0)return;left=phases[active].seconds;running=true;deadline=performance.now()+left*1000;render();});
    $id('floatOverview').addEventListener('click',()=> $id('ablaufplan').scrollIntoView({behavior:'smooth',block:'start'}));
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});
    setInterval(tick,250);
    render();
  });
})();
