/* ============================================================
   SANITÄRTECHNIK 11 – SAISON-LAYER DELUXE
   Ändere NUR diese eine Zeile:
   normal | halloween | weihnachten | fruehling | sommer
   ============================================================ */

const SAISON = 'halloween';

(function () {
  const html = document.documentElement;
  const modeMap = {
    normal: '',
    halloween: 'halloween',
    weihnachten: 'christmas',
    fruehling: 'spring',
    sommer: 'summer'
  };
  const theme = modeMap[SAISON] ?? '';
  if (theme) html.setAttribute('data-theme', theme);
  else html.removeAttribute('data-theme');

  // Asset-Pfade immer relativ zu saison.js, damit auch VK-BWxx-Unterseiten funktionieren.
  const script =
    document.currentScript ||
    [...document.scripts].find(s => (s.src || '').includes('saison.js'));
  const base = script && script.src ? new URL('./', script.src) : new URL('./', location.href);
  const asset = name => new URL('assets/saison/' + name, base).href;

  const css = document.createElement('style');
  css.id = 'sani11-season-layer-css';
  css.textContent = `
    :root{
      --season-glass:rgba(255,255,255,.92);
      --season-line:rgba(255,255,255,.45);
    }

    /* Die Saison liegt HINTER den Inhalten und blockiert keine Klicks. */
    #season-bg,#season-fx,#season-characters{
      position:fixed; inset:0; pointer-events:none;
    }
    #season-bg{z-index:-3; overflow:hidden}
    #season-fx{z-index:8990; overflow:hidden}
    #season-characters{z-index:8995; overflow:hidden}

    body{position:relative; isolation:isolate}
    body > *:not(#season-bg):not(#season-fx):not(#season-characters){
      position:relative;
    }

    /* ---------- NORMAL ---------- */
    html:not([data-theme]) body{
      background:#f4f7f6 !important;
    }

    /* ---------- GEMEINSAME LESBARKEIT ---------- */
    html[data-theme] .card,
    html[data-theme] .topic-card,
    html[data-theme] .panel,
    html[data-theme] .box,
    html[data-theme] .poster,
    html[data-theme] .material-panel,
    html[data-theme] .materials,
    html[data-theme] .progress,
    html[data-theme] .testbox,
    html[data-theme] .insight{
      backdrop-filter:saturate(1.05) blur(2px);
    }

    /* ---------- HALLOWEEN ---------- */
    html[data-theme="halloween"] body{
      background:#17121c !important;
      color:#f5eef4 !important;
    }
    html[data-theme="halloween"] #season-bg{
      background:
        radial-gradient(circle at 82% 15%, rgba(255,160,55,.30) 0 8%, transparent 18%),
        radial-gradient(circle at 14% 88%, rgba(255,91,0,.20), transparent 22%),
        linear-gradient(180deg,#140f1d 0%,#241429 50%,#1a1015 100%);
    }
    html[data-theme="halloween"] #season-bg:before{
      content:""; position:absolute; inset:0;
      background:
        radial-gradient(ellipse at 50% 110%,rgba(255,110,20,.24),transparent 38%),
        repeating-linear-gradient(115deg,rgba(255,255,255,.018) 0 1px,transparent 1px 9px);
      opacity:.9;
    }
    html[data-theme="halloween"] header,
    html[data-theme="halloween"] .hero,
    html[data-theme="halloween"] .sidebar{
      background:linear-gradient(135deg,rgba(28,13,36,.98),rgba(89,28,45,.96),rgba(129,54,15,.94))!important;
      color:white!important;
      box-shadow:0 10px 30px rgba(0,0,0,.25)!important;
    }
    html[data-theme="halloween"] .card,
    html[data-theme="halloween"] .topic-card,
    html[data-theme="halloween"] .panel,
    html[data-theme="halloween"] .box,
    html[data-theme="halloween"] .poster,
    html[data-theme="halloween"] .material-panel,
    html[data-theme="halloween"] .materials,
    html[data-theme="halloween"] .progress,
    html[data-theme="halloween"] .testbox,
    html[data-theme="halloween"] .insight{
      background:rgba(42,31,46,.93)!important;
      color:#f6eef4!important;
      border-color:#744b70!important;
      box-shadow:0 9px 26px rgba(0,0,0,.24),0 0 18px rgba(255,111,20,.05)!important;
    }
    .season-zombie{
      position:absolute; left:8px; bottom:-28px;
      width:min(270px,24vw); min-width:125px;
      filter:drop-shadow(0 18px 22px rgba(0,0,0,.42));
    }
    .season-pumpkin{
      position:absolute; bottom:4px; width:96px;
      filter:drop-shadow(0 10px 15px rgba(0,0,0,.35));
      animation:pumpkinHop 2.7s ease-in-out infinite;
    }
    .season-pumpkin.p1{left:25%;animation-delay:-.7s}
    .season-pumpkin.p2{right:8%;width:78px;animation-delay:-1.5s}
    .season-pumpkin.p3{right:34%;width:65px;animation-delay:-2.1s}
    .bat-shape{
      position:absolute;width:34px;height:14px;background:#08070a;border-radius:70% 70% 30% 30%;
      transform:rotate(8deg);opacity:.8;animation:batMove 11s linear infinite;
    }
    .bat-shape:before,.bat-shape:after{
      content:"";position:absolute;top:-2px;width:25px;height:15px;background:#08070a;
      border-radius:70% 10% 70% 10%;
    }
    .bat-shape:before{left:-18px;transform:rotate(-18deg)}
    .bat-shape:after{right:-18px;transform:scaleX(-1) rotate(-18deg)}

    /* ---------- WEIHNACHTEN ---------- */
    html[data-theme="christmas"] body{
      background:#edf6f2 !important;
      color:#224438!important;
    }
    html[data-theme="christmas"] #season-bg{
      background:
        radial-gradient(circle at 80% 10%,rgba(255,255,255,.95),transparent 14%),
        linear-gradient(180deg,#143c78 0%,#1c5d8c 42%,#dcecf5 74%,#f4f8fa 100%);
    }
    html[data-theme="christmas"] #season-bg:after{
      content:"";position:absolute;left:-10%;right:-10%;bottom:-10%;
      height:34%;
      background:
        radial-gradient(ellipse at 20% 30%,#fff 0 24%,transparent 25%),
        radial-gradient(ellipse at 50% 30%,#fff 0 27%,transparent 28%),
        radial-gradient(ellipse at 80% 30%,#fff 0 24%,transparent 25%);
      opacity:.92;
    }
    html[data-theme="christmas"] header,
    html[data-theme="christmas"] .hero,
    html[data-theme="christmas"] .sidebar{
      background:linear-gradient(135deg,rgba(8,91,57,.97),rgba(9,114,72,.96),rgba(166,31,49,.95))!important;
      color:white!important;
    }
    html[data-theme="christmas"] .card,
    html[data-theme="christmas"] .topic-card,
    html[data-theme="christmas"] .panel,
    html[data-theme="christmas"] .box,
    html[data-theme="christmas"] .poster,
    html[data-theme="christmas"] .material-panel,
    html[data-theme="christmas"] .materials,
    html[data-theme="christmas"] .progress,
    html[data-theme="christmas"] .testbox,
    html[data-theme="christmas"] .insight{
      background:rgba(255,255,255,.94)!important;
      border-color:#b9d7c4!important;
      box-shadow:0 9px 24px rgba(11,85,58,.10)!important;
    }
    .season-santa{
      position:absolute; right:10px; bottom:-24px;
      width:min(290px,25vw); min-width:130px;
      filter:drop-shadow(0 18px 22px rgba(0,0,0,.28));
    }
    .season-sleigh{
      position:absolute; left:-350px; top:8%;
      width:310px;
      filter:drop-shadow(0 15px 18px rgba(0,0,0,.28));
      animation:sleighFly 19s linear infinite;
    }
    .snowflake-css{
      position:absolute;top:-6vh;width:7px;height:7px;border-radius:50%;
      background:rgba(255,255,255,.92);
      box-shadow:0 0 6px rgba(255,255,255,.85);
      animation:snowDown linear infinite;
    }
    .xmas-lights{
      position:absolute;top:4px;left:0;right:0;height:28px;
      background:
       radial-gradient(circle,#ff4343 0 4px,transparent 5px) 0 0/90px 24px,
       radial-gradient(circle,#ffe05c 0 4px,transparent 5px) 22px 0/90px 24px,
       radial-gradient(circle,#42d26f 0 4px,transparent 5px) 44px 0/90px 24px,
       radial-gradient(circle,#45a7ff 0 4px,transparent 5px) 66px 0/90px 24px;
      filter:drop-shadow(0 0 6px white);
      animation:lightsPulse 1.4s ease-in-out infinite alternate;
    }

    /* ---------- FRÜHLING ---------- */
    html[data-theme="spring"] body{
      background:#f3fbf4!important;color:#244a36!important;
    }
    html[data-theme="spring"] #season-bg{
      background:
       radial-gradient(circle at 78% 13%,#fff8bd 0 6%,rgba(255,248,189,.25) 13%,transparent 22%),
       linear-gradient(180deg,#9edcff 0%,#dbf3ff 42%,#bce4a7 72%,#7fbe68 100%);
    }
    html[data-theme="spring"] #season-bg:after{
      content:"";position:absolute;left:0;right:0;bottom:0;height:24%;
      background:
        radial-gradient(circle at 5% 65%,#ff87b6 0 7px,transparent 8px),
        radial-gradient(circle at 13% 44%,#ffd75a 0 7px,transparent 8px),
        radial-gradient(circle at 23% 70%,#a77bff 0 7px,transparent 8px),
        radial-gradient(circle at 37% 48%,#fff 0 7px,transparent 8px),
        radial-gradient(circle at 52% 74%,#ff8099 0 7px,transparent 8px),
        radial-gradient(circle at 70% 52%,#ffd65a 0 7px,transparent 8px),
        radial-gradient(circle at 88% 68%,#f99bd0 0 7px,transparent 8px);
      background-color:rgba(81,159,65,.2);
    }
    html[data-theme="spring"] header,
    html[data-theme="spring"] .hero,
    html[data-theme="spring"] .sidebar{
      background:linear-gradient(135deg,rgba(67,161,102,.95),rgba(73,177,174,.93),rgba(243,190,88,.92))!important;
      color:#163c2b!important;
    }
    html[data-theme="spring"] .card,
    html[data-theme="spring"] .topic-card,
    html[data-theme="spring"] .panel,
    html[data-theme="spring"] .box,
    html[data-theme="spring"] .poster,
    html[data-theme="spring"] .material-panel,
    html[data-theme="spring"] .materials,
    html[data-theme="spring"] .progress,
    html[data-theme="spring"] .testbox,
    html[data-theme="spring"] .insight{
      background:rgba(255,255,255,.93)!important;border-color:#c9e5cf!important;
      box-shadow:0 8px 22px rgba(46,112,65,.09)!important;
    }
    .spring-sun{position:absolute;right:8%;top:7%;width:105px;height:105px;border-radius:50%;
      background:radial-gradient(circle,#fff5a3 0 36%,#ffd95d 62%,rgba(255,217,93,.18) 70%,transparent 72%);
      filter:drop-shadow(0 0 22px rgba(255,223,95,.65)); animation:sunPulse 4s ease-in-out infinite alternate}
    .flower{
      position:absolute;bottom:-8px;width:22px;height:65px;background:linear-gradient(90deg,transparent 45%,#4d984c 46% 54%,transparent 55%);
      transform-origin:bottom;animation:flowerSway 4s ease-in-out infinite alternate}
    .flower:before{
      content:"";position:absolute;left:-9px;top:0;width:40px;height:40px;border-radius:50%;
      background:radial-gradient(circle,#ffd85a 0 20%,#ff8db8 21% 54%,transparent 55%);
    }

    /* ---------- SOMMER ---------- */
    html[data-theme="summer"] body{
      background:#f8fbf6!important;color:#24485b!important;
    }
    html[data-theme="summer"] #season-bg{
      background:
       radial-gradient(circle at 83% 12%,#fff38f 0 6%,#ffd650 9%,rgba(255,214,80,.20) 17%,transparent 26%),
       linear-gradient(180deg,#55c6ef 0%,#93e3fb 48%,#1fa6cb 49%,#1788b3 67%,#f3d28c 68%,#f8e2a6 100%);
    }
    html[data-theme="summer"] header,
    html[data-theme="summer"] .hero,
    html[data-theme="summer"] .sidebar{
      background:linear-gradient(135deg,rgba(36,160,204,.94),rgba(65,187,212,.92),rgba(247,190,64,.92))!important;
      color:#083e57!important;
    }
    html[data-theme="summer"] .card,
    html[data-theme="summer"] .topic-card,
    html[data-theme="summer"] .panel,
    html[data-theme="summer"] .box,
    html[data-theme="summer"] .poster,
    html[data-theme="summer"] .material-panel,
    html[data-theme="summer"] .materials,
    html[data-theme="summer"] .progress,
    html[data-theme="summer"] .testbox,
    html[data-theme="summer"] .insight{
      background:rgba(255,255,255,.93)!important;border-color:#c5e2eb!important;
      box-shadow:0 8px 22px rgba(25,106,145,.09)!important;
    }
    .summer-sun{position:absolute;right:8%;top:7%;width:120px;height:120px;border-radius:50%;
      background:radial-gradient(circle,#fff7a4 0 32%,#ffd34d 56%,rgba(255,211,77,.20) 66%,transparent 69%);
      filter:drop-shadow(0 0 28px rgba(255,220,80,.7));animation:sunPulse 3.4s ease-in-out infinite alternate}
    .parasol{position:absolute;right:8%;bottom:3%;width:160px;height:110px}
    .parasol:before{content:"";position:absolute;left:20px;top:0;width:120px;height:58px;border-radius:120px 120px 5px 5px;
      background:repeating-conic-gradient(from 270deg at 50% 100%,#ef5b4f 0 20deg,#fff2cf 20deg 40deg)}
    .parasol:after{content:"";position:absolute;left:78px;top:50px;width:7px;height:70px;background:#704832;border-radius:5px}
    .deckchair{position:absolute;right:20%;bottom:2%;width:110px;height:75px;transform:rotate(-5deg)}
    .deckchair:before{content:"";position:absolute;inset:10px 12px 18px;background:repeating-linear-gradient(90deg,#fff 0 16px,#ef6b4c 16px 32px);transform:skewX(-12deg);border:5px solid #875633}
    .deckchair:after{content:"";position:absolute;left:10px;right:10px;bottom:5px;height:8px;background:#875633;transform:rotate(-8deg)}

    /* ---------- Animationen ---------- */
    @keyframes pumpkinHop{
      0%,100%{transform:translateY(0) rotate(-3deg)}
      45%{transform:translateY(-32px) rotate(5deg)}
      58%{transform:translateY(-27px) rotate(3deg)}
    }
    @keyframes batMove{
      from{transform:translate(-10vw,12vh) rotate(4deg)}
      50%{transform:translate(55vw,4vh) rotate(-7deg)}
      to{transform:translate(115vw,18vh) rotate(4deg)}
    }
    @keyframes sleighFly{
      from{transform:translateX(-30vw) translateY(0) rotate(-2deg)}
      45%{transform:translateX(70vw) translateY(35px) rotate(1deg)}
      to{transform:translateX(145vw) translateY(-12px) rotate(-2deg)}
    }
    @keyframes snowDown{
      from{transform:translateY(-10vh) translateX(0);opacity:0}
      10%{opacity:1}
      to{transform:translateY(115vh) translateX(35px);opacity:.9}
    }
    @keyframes lightsPulse{from{opacity:.55}to{opacity:1}}
    @keyframes sunPulse{from{transform:scale(.96)}to{transform:scale(1.04)}}
    @keyframes flowerSway{from{transform:rotate(-4deg)}to{transform:rotate(5deg)}}

    @media(max-width:760px){
      .season-zombie,.season-santa{width:135px;min-width:0;opacity:.94}
      .season-sleigh{width:205px}
      .season-pumpkin{width:64px}.season-pumpkin.p2{width:55px}.season-pumpkin.p3{display:none}
      .parasol{transform:scale(.7);transform-origin:right bottom}
      .deckchair{display:none}
    }
    @media(prefers-reduced-motion:reduce){
      #season-fx *,#season-characters *{animation:none!important}
      .season-sleigh{display:none}
    }
  `;
  document.head.appendChild(css);

  function el(tag, cls, parent, attrs={}) {
    const n=document.createElement(tag);
    if(cls) n.className=cls;
    Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));
    parent.appendChild(n);
    return n;
  }

  function build(){
    document.querySelectorAll('#season-bg,#season-fx,#season-characters,.theme-switcher,.season-decor,.theme-season-label,.season-banner').forEach(n=>n.remove());

    const bg=el('div','',document.body,{id:'season-bg','aria-hidden':'true'});
    const fx=el('div','',document.body,{id:'season-fx','aria-hidden':'true'});
    const chars=el('div','',document.body,{id:'season-characters','aria-hidden':'true'});

    if(!theme) return;

    if(theme==='halloween'){
      el('img','season-zombie',chars,{src:asset('zombie.gif'),alt:''});
      for(let i=1;i<=3;i++) el('img','season-pumpkin p'+i,chars,{src:asset('kuerbis.gif'),alt:''});
      for(let i=0;i<4;i++){
        const b=el('div','bat-shape',fx);
        b.style.top=(8+i*12)+'%';
        b.style.animationDelay=(-i*2.1)+'s';
        b.style.animationDuration=(9+i*1.7)+'s';
      }
    }

    if(theme==='christmas'){
      el('div','xmas-lights',fx);
      el('img','season-santa',chars,{src:asset('weihnachtsmann.gif'),alt:''});
      el('img','season-sleigh',chars,{src:asset('weihnachtsmann-schlitten.gif'),alt:''});
      for(let i=0;i<36;i++){
        const f=el('span','snowflake-css',fx);
        f.style.left=((i*37)%100)+'%';
        f.style.width=f.style.height=(4+(i%6))+'px';
        f.style.animationDuration=(6+(i%8))+'s';
        f.style.animationDelay=(-1*(i%9))+'s';
      }
    }

    if(theme==='spring'){
      el('div','spring-sun',fx);
      for(let i=0;i<18;i++){
        const f=el('div','flower',fx);
        f.style.left=((i*5.7)%98)+'%';
        f.style.height=(45+(i%5)*8)+'px';
        f.style.animationDelay=(-i*.25)+'s';
      }
    }

    if(theme==='summer'){
      el('div','summer-sun',fx);
      el('div','parasol',fx);
      el('div','deckchair',fx);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build);
  else build();
})();
