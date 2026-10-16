// Ergänzungen aus der zentralen Lehrkraftdatei in der Mission anzeigen.
(function(){
 const data=window.LEHRKRAFT?.MISSIONEN||{};
 const host=document.getElementById('game');
 if(!host)return;
 const panel=document.createElement('section');panel.id='lehrkraft-mission';panel.className='panel';
 panel.style.marginTop='16px';host.appendChild(panel);
 function refresh(){
  const room=(typeof current !== "undefined" ? current?.room : null);
  const info=data[room]||{};
  panel.replaceChildren();
  if(!room||(!info.kommentar&&!info.hinweis&&!info.link)){panel.hidden=true;return;}
  panel.hidden=false;
  const h=document.createElement('h3');h.textContent='📎 Ergänzung der Lehrkraft';panel.appendChild(h);
  for(const key of ['kommentar','hinweis'])if(info[key]){const para=document.createElement('p');para.textContent=info[key];panel.appendChild(para);}
  if(info.link && /^https?:\/\//i.test(info.link)){
   const a=document.createElement('a');a.href=info.link;a.target='_blank';a.rel='noopener noreferrer';a.textContent=info.linktext||'Zusatzmaterial öffnen';panel.appendChild(a);
  }
 }
 const obs=new MutationObserver(refresh);obs.observe(host,{attributes:true,attributeFilter:['class']});
 const original=window.start;
 if(typeof original==='function')window.start=function(...args){const out=original.apply(this,args);refresh();return out;};
 refresh();
})();
