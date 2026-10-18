/* ============================================================
   SANITÄRTECHNIK 11 – SAISONSTEUERUNG · NAHTLOS
   ============================================================
   ÄNDERE NUR DIE AUSFÜHRBARE ZEILE UNTERHALB DES KOMMENTARBLOCKS.
   Beispiel: const SAISON = 'halloween';

   Möglich:
   'normal'
   'halloween'
   'weihnachten'
   'fruehling'
   'sommer'

   NORMAL = ursprüngliche Kursoptik, ohne saisonale Ebene.
   ============================================================ */

const SAISON = 'halloween';

(function () {
  const html = document.documentElement;

  const map = {
    normal: '',
    halloween: 'halloween',
    weihnachten: 'christmas',
    fruehling: 'spring',
    sommer: 'summer'
  };

  const theme = map[SAISON] ?? '';

  if (theme) html.setAttribute('data-theme', theme);
  else html.removeAttribute('data-theme');

  const script =
    document.currentScript ||
    [...document.scripts].find(s => (s.src || '').includes('saison.js'));

  const base = script && script.src
    ? new URL('./', script.src)
    : new URL('./', location.href);

  const asset = name => new URL('assets/saison/' + name, base).href;

  const style = document.createElement('style');
  style.id = 'sani11-season-seamless-css';
  style.textContent = `

    /* ==========================================================
       SAISON-EINBETTUNG
       Die Hintergrundwelt liegt sichtbar ÜBER dem body-Hintergrund,
       aber HINTER allen Kursinhalten.
       ========================================================== */

    #sani-season-bg,
    #sani-season-wash,
    #sani-season-fx,
    #sani-season-characters{
      position:fixed;
      inset:0;
      pointer-events:none;
    }

    #sani-season-bg{
      z-index:0;
      background-position:center center;
      background-repeat:no-repeat;
      background-size:cover;
      transform:scale(1.025);
      filter:saturate(1.04);
    }

    #sani-season-wash{
      z-index:1;
    }

    #sani-season-fx{
      z-index:45;
      overflow:hidden;
    }

    #sani-season-characters{
      z-index:46;
      overflow:hidden;
    }

    body{
      position:relative;
      min-height:100vh;
      isolation:isolate;
    }

    /* Alle echten Seiteninhalte liegen sicher über der Saisonwelt. */
    body > *:not(#sani-season-bg):not(#sani-season-wash):not(#sani-season-fx):not(#sani-season-characters){
      position:relative;
      z-index:2;
    }

    header{
      z-index:50 !important;
    }

    /* Verhindert harte weiße/graue Flächen zwischen den Abschnitten. */
    html[data-theme] body,
    html[data-theme] main,
    html[data-theme] .section{
      background:transparent !important;
    }

    /* ==========================================================
       KARTEN / INHALTE
       Glas-Effekt: Hintergrund sichtbar, Text trotzdem klar.
       ========================================================== */

    html[data-theme] .card,
    html[data-theme] .topic-card,
    html[data-theme] .panel,
    html[data-theme] .box,
    html[data-theme] .poster,
    html[data-theme] .material-panel,
    html[data-theme] .materials,
    html[data-theme] .progress,
    html[data-theme] .testbox,
    html[data-theme] .insight,
    html[data-theme] details.group{
      backdrop-filter:blur(12px) saturate(1.04);
      -webkit-backdrop-filter:blur(12px) saturate(1.04);
    }

    /* Startseite: das virtuelle Klassenzimmer bleibt der Hauptinhalt. */
    html[data-theme] .room{
      background:rgba(255,255,255,.90) !important;
      border-color:rgba(255,255,255,.56) !important;
      box-shadow:
        0 24px 65px rgba(0,0,0,.19),
        0 0 0 1px rgba(255,255,255,.18) !important;
    }

    /* ==========================================================
       HALLOWEEN
       ========================================================== */

    html[data-theme="halloween"] #sani-season-bg{
      background-image:url("${asset('halloween-hintergrund.png')}");
      background-color:#173b58;
    }

    html[data-theme="halloween"] #sani-season-wash{
      background:
        radial-gradient(ellipse at 50% 37%,
          rgba(38,111,154,.18) 0%,
          rgba(23,47,79,.10) 32%,
          rgba(18,12,28,.25) 78%,
          rgba(12,8,18,.38) 100%),
        linear-gradient(180deg,
          rgba(8,11,24,.08),
          rgba(28,13,34,.16));
    }

    html[data-theme="halloween"] header,
    html[data-theme="halloween"] .hero,
    html[data-theme="halloween"] .sidebar{
      background:
        linear-gradient(135deg,
          rgba(20,15,38,.94),
          rgba(56,31,72,.92) 56%,
          rgba(116,48,26,.91)) !important;
      color:#fff !important;
      backdrop-filter:blur(12px);
      -webkit-backdrop-filter:blur(12px);
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
    html[data-theme="halloween"] .insight,
    html[data-theme="halloween"] details.group{
      background:rgba(31,28,43,.88) !important;
      color:#f8f3f7 !important;
      border-color:rgba(231,155,104,.34) !important;
      box-shadow:
        0 12px 30px rgba(0,0,0,.26),
        0 0 22px rgba(255,116,30,.05) !important;
    }

    html[data-theme="halloween"] p,
    html[data-theme="halloween"] small,
    html[data-theme="halloween"] .muted{
      color:#e0d6e1 !important;
    }

    html[data-theme="halloween"] .badge{
      background:rgba(67,39,72,.92) !important;
      color:#ffbd6e !important;
    }

    .season-zombie{
      position:absolute;
      left:10px;
      bottom:-24px;
      width:min(260px,22vw);
      min-width:125px;
      filter:drop-shadow(0 18px 24px rgba(0,0,0,.38));
      animation:zombieDrift 4s ease-in-out infinite;
    }

    .season-pumpkin{
      position:absolute;
      bottom:5px;
      width:90px;
      filter:drop-shadow(0 14px 17px rgba(0,0,0,.34));
      animation:pumpkinHop 2.8s ease-in-out infinite;
    }

    .season-pumpkin.p1{left:26%;animation-delay:-.5s}
    .season-pumpkin.p2{right:8%;width:76px;animation-delay:-1.25s}
    .season-pumpkin.p3{right:31%;width:62px;animation-delay:-2s}

    .bat-shape{
      position:absolute;
      width:36px;
      height:15px;
      opacity:.78;
      animation:batFly linear infinite;
    }
    .bat-shape:before,
    .bat-shape:after{
      content:"";
      position:absolute;
      top:1px;
      width:25px;
      height:15px;
      background:#070609;
      border-radius:70% 15% 70% 15%;
    }
    .bat-shape:before{left:0;transform:rotate(17deg)}
    .bat-shape:after{right:0;transform:scaleX(-1) rotate(17deg)}

    /* ==========================================================
       WEIHNACHTEN
       ========================================================== */

    html[data-theme="christmas"] #sani-season-bg{
      background-image:url("${asset('weihnachten-hintergrund.png')}");
      background-color:#dcecf5;
    }

    html[data-theme="christmas"] #sani-season-wash{
      background:
        radial-gradient(ellipse at 50% 40%,
          rgba(255,255,255,.13) 0%,
          rgba(236,247,253,.09) 38%,
          rgba(28,77,112,.12) 100%);
    }

    html[data-theme="christmas"] header,
    html[data-theme="christmas"] .hero,
    html[data-theme="christmas"] .sidebar{
      background:
        linear-gradient(135deg,
          rgba(8,91,57,.94),
          rgba(10,116,73,.92) 55%,
          rgba(157,34,51,.91)) !important;
      color:#fff !important;
      backdrop-filter:blur(12px);
      -webkit-backdrop-filter:blur(12px);
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
    html[data-theme="christmas"] .insight,
    html[data-theme="christmas"] details.group{
      background:rgba(255,255,255,.90) !important;
      color:#193f31 !important;
      border-color:rgba(183,214,195,.78) !important;
      box-shadow:0 12px 30px rgba(25,87,68,.13) !important;
    }

    .season-santa{
      position:absolute;
      left:12px;
      bottom:-26px;
      width:min(260px,22vw);
      min-width:125px;
      filter:drop-shadow(0 18px 22px rgba(0,0,0,.24));
      animation:santaBob 4.2s ease-in-out infinite;
    }

    .season-sleigh{
      position:absolute;
      left:-380px;
      top:8%;
      width:315px;
      filter:drop-shadow(0 14px 20px rgba(0,0,0,.22));
      animation:sleighFly 18s linear infinite;
    }

    .snowflake{
      position:absolute;
      top:-8vh;
      border-radius:50%;
      background:rgba(255,255,255,.94);
      box-shadow:0 0 5px rgba(255,255,255,.85);
      animation:snowFall linear infinite;
    }

    .xmas-lights{
      position:absolute;
      top:3px;
      left:0;
      right:0;
      height:25px;
      background:
        radial-gradient(circle,#ff4545 0 4px,transparent 5px) 0 0/90px 24px,
        radial-gradient(circle,#ffdc58 0 4px,transparent 5px) 22px 0/90px 24px,
        radial-gradient(circle,#45d56b 0 4px,transparent 5px) 44px 0/90px 24px,
        radial-gradient(circle,#4aa8ff 0 4px,transparent 5px) 66px 0/90px 24px;
      filter:drop-shadow(0 0 5px rgba(255,255,255,.9));
      animation:lightsGlow 1.35s ease-in-out infinite alternate;
    }

    /* ==========================================================
       FRÜHLING
       ========================================================== */

    html[data-theme="spring"] #sani-season-bg{
      background-image:url("${asset('fruehling-hintergrund.png')}");
      background-color:#dff3e3;
    }

    html[data-theme="spring"] #sani-season-wash{
      background:
        radial-gradient(ellipse at 50% 40%,
          rgba(255,255,255,.15),
          rgba(245,252,246,.07) 48%,
          rgba(96,169,101,.08));
    }

    html[data-theme="spring"] header,
    html[data-theme="spring"] .hero,
    html[data-theme="spring"] .sidebar{
      background:
        linear-gradient(135deg,
          rgba(71,158,102,.93),
          rgba(71,177,172,.91),
          rgba(237,187,84,.90)) !important;
      color:#173f30 !important;
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
    html[data-theme="spring"] .insight,
    html[data-theme="spring"] details.group{
      background:rgba(255,255,255,.89) !important;
      color:#214b35 !important;
      border-color:rgba(194,226,202,.82) !important;
      box-shadow:0 12px 28px rgba(50,111,67,.11) !important;
    }

    .butterfly{
      position:absolute;
      width:28px;
      height:20px;
      animation:butterflyFly 13s ease-in-out infinite;
    }

    .butterfly:before,
    .butterfly:after{
      content:"";
      position:absolute;
      top:1px;
      width:17px;
      height:17px;
      border-radius:70% 30% 70% 30%;
      background:linear-gradient(135deg,#ff9d43,#ffd65d);
      border:1px solid rgba(80,55,36,.28);
    }
    .butterfly:before{left:0;transform:rotate(-18deg)}
    .butterfly:after{right:0;transform:scaleX(-1) rotate(-18deg)}

    .petal{
      position:absolute;
      top:-8vh;
      width:10px;
      height:7px;
      border-radius:70% 30% 70% 30%;
      background:#ffb8d0;
      opacity:.66;
      animation:petalFall linear infinite;
    }

    /* ==========================================================
       SOMMER
       ========================================================== */

    html[data-theme="summer"] #sani-season-bg{
      background-image:url("${asset('sommer-hintergrund.png')}");
      background-color:#bce9fa;
    }

    html[data-theme="summer"] #sani-season-wash{
      background:
        radial-gradient(ellipse at 50% 42%,
          rgba(255,255,255,.12),
          rgba(255,249,225,.04) 50%,
          rgba(35,154,194,.07));
    }

    html[data-theme="summer"] header,
    html[data-theme="summer"] .hero,
    html[data-theme="summer"] .sidebar{
      background:
        linear-gradient(135deg,
          rgba(38,157,202,.93),
          rgba(61,183,210,.91),
          rgba(239,183,64,.90)) !important;
      color:#083e57 !important;
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
    html[data-theme="summer"] .insight,
    html[data-theme="summer"] details.group{
      background:rgba(255,255,255,.88) !important;
      color:#24485b !important;
      border-color:rgba(190,222,235,.83) !important;
      box-shadow:0 12px 28px rgba(27,110,148,.11) !important;
    }

    .sun-glow{
      position:absolute;
      right:7%;
      top:7%;
      width:105px;
      height:105px;
      border-radius:50%;
      background:
        radial-gradient(circle,
          #fff9b1 0 34%,
          #ffd653 58%,
          rgba(255,214,83,.18) 68%,
          transparent 70%);
      filter:drop-shadow(0 0 24px rgba(255,220,80,.66));
      animation:sunPulse 4s ease-in-out infinite alternate;
    }

    .wave{
      position:absolute;
      left:-20%;
      right:-20%;
      bottom:0;
      height:60px;
      background:
        radial-gradient(ellipse at 50% 100%,
          rgba(255,255,255,.50) 0 27%,
          transparent 29%) 0 0/120px 38px repeat-x;
      animation:waveMove 8s linear infinite;
      opacity:.64;
    }

    /* ==========================================================
       ANIMATIONEN
       ========================================================== */

    @keyframes zombieDrift{
      0%,100%{transform:translateY(0) rotate(-1deg)}
      50%{transform:translateY(-8px) rotate(1deg)}
    }

    @keyframes pumpkinHop{
      0%,100%{transform:translateY(0) rotate(-3deg)}
      43%{transform:translateY(-31px) rotate(5deg)}
      58%{transform:translateY(-25px) rotate(2deg)}
    }

    @keyframes batFly{
      from{transform:translate(-12vw,10vh)}
      50%{transform:translate(55vw,4vh)}
      to{transform:translate(116vw,18vh)}
    }

    @keyframes santaBob{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-9px)}
    }

    @keyframes sleighFly{
      from{transform:translateX(-35vw) translateY(0) rotate(-2deg)}
      48%{transform:translateX(75vw) translateY(32px) rotate(1deg)}
      to{transform:translateX(150vw) translateY(-12px) rotate(-2deg)}
    }

    @keyframes snowFall{
      from{transform:translateY(-10vh) translateX(0);opacity:0}
      10%{opacity:1}
      to{transform:translateY(115vh) translateX(34px);opacity:.92}
    }

    @keyframes lightsGlow{
      from{opacity:.56}
      to{opacity:1}
    }

    @keyframes butterflyFly{
      0%{transform:translate(-12vw,18vh)}
      28%{transform:translate(26vw,9vh) rotate(7deg)}
      52%{transform:translate(55vw,27vh) rotate(-4deg)}
      77%{transform:translate(84vw,13vh) rotate(5deg)}
      100%{transform:translate(116vw,20vh)}
    }

    @keyframes petalFall{
      from{transform:translateY(-10vh) translateX(0) rotate(0deg)}
      to{transform:translateY(112vh) translateX(42px) rotate(360deg)}
    }

    @keyframes sunPulse{
      from{transform:scale(.97)}
      to{transform:scale(1.04)}
    }

    @keyframes waveMove{
      from{transform:translateX(0)}
      to{transform:translateX(120px)}
    }

    @media(max-width:760px){
      #sani-season-bg{
        background-position:center center;
        transform:scale(1.06);
      }

      .season-zombie,
      .season-santa{
        width:130px;
        min-width:0;
        opacity:.93;
      }

      .season-sleigh{width:205px}
      .season-pumpkin{width:60px}
      .season-pumpkin.p2{width:52px}
      .season-pumpkin.p3{display:none}
    }

    @media(prefers-reduced-motion:reduce){
      #sani-season-fx *,
      #sani-season-characters *{
        animation:none !important;
      }

      .season-sleigh{
        display:none;
      }
    }
  `;

  document.head.appendChild(style);

  function add(tag, cls, parent, attrs = {}) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    Object.entries(attrs).forEach(([key, value]) => n.setAttribute(key, value));
    parent.appendChild(n);
    return n;
  }

  function cleanOldSeasonElements() {
    document.querySelectorAll(
      '#sani-season-bg,#sani-season-wash,#sani-season-fx,#sani-season-characters,' +
      '#season-bg,#season-fx,#season-characters,#season-world-bg,#season-world-shade,' +
      '#season-world-fx,#season-world-characters,.theme-switcher,.season-decor,' +
      '.theme-season-label,.season-banner,.season-teacher-decor'
    ).forEach(n => n.remove());
  }

  function build() {
    cleanOldSeasonElements();

    /* Normalmodus: Originalseite vollständig unangetastet lassen. */
    if (!theme) return;

    const bg = add('div', '', document.body, {
      id: 'sani-season-bg',
      'aria-hidden': 'true'
    });

    const wash = add('div', '', document.body, {
      id: 'sani-season-wash',
      'aria-hidden': 'true'
    });

    const fx = add('div', '', document.body, {
      id: 'sani-season-fx',
      'aria-hidden': 'true'
    });

    const chars = add('div', '', document.body, {
      id: 'sani-season-characters',
      'aria-hidden': 'true'
    });

    if (theme === 'halloween') {
      add('img', 'season-zombie', chars, {
        src: asset('zombie.gif'),
        alt: ''
      });

      for (let i = 1; i <= 3; i++) {
        add('img', 'season-pumpkin p' + i, chars, {
          src: asset('kuerbis.gif'),
          alt: ''
        });
      }

      for (let i = 0; i < 5; i++) {
        const b = add('div', 'bat-shape', fx);
        b.style.top = (7 + i * 10) + '%';
        b.style.animationDelay = (-i * 1.6) + 's';
        b.style.animationDuration = (9 + i * 1.45) + 's';
      }
    }

    if (theme === 'christmas') {
      add('div', 'xmas-lights', fx);

      add('img', 'season-santa', chars, {
        src: asset('weihnachtsmann.gif'),
        alt: ''
      });

      add('img', 'season-sleigh', chars, {
        src: asset('weihnachtsmann-schlitten.gif'),
        alt: ''
      });

      for (let i = 0; i < 38; i++) {
        const snow = add('span', 'snowflake', fx);
        snow.style.left = ((i * 37) % 100) + '%';
        const size = 4 + (i % 6);
        snow.style.width = size + 'px';
        snow.style.height = size + 'px';
        snow.style.animationDuration = (6 + (i % 8)) + 's';
        snow.style.animationDelay = (-1 * (i % 9)) + 's';
      }
    }

    if (theme === 'spring') {
      for (let i = 0; i < 3; i++) {
        const b = add('div', 'butterfly', fx);
        b.style.top = (12 + i * 18) + '%';
        b.style.animationDelay = (-i * 3.1) + 's';
        b.style.animationDuration = (11 + i * 2) + 's';
      }

      for (let i = 0; i < 22; i++) {
        const p = add('div', 'petal', fx);
        p.style.left = ((i * 29) % 100) + '%';
        p.style.animationDuration = (7 + (i % 7)) + 's';
        p.style.animationDelay = (-1 * (i % 9)) + 's';
      }
    }

    if (theme === 'summer') {
      add('div', 'sun-glow', fx);
      add('div', 'wave', fx);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
