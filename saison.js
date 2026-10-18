
/* ============================================================
   SANITÄRTECHNIK 11 – ZENTRALE SAISONSTEUERUNG FÜR DIE LEHRKRAFT
   ============================================================

   ÄNDERE NUR DIESE EINE ZEILE:

   const SAISON = 'halloween';

   Mögliche Werte:
   'normal'
   'halloween'
   'weihnachten'
   'fruehling'
   'sommer'

   Danach speichern und saison.js bei GitHub ersetzen.
   Die Schülerinnen und Schüler haben KEINEN Umschalter.
   ============================================================ */

const SAISON = 'normal';

(function(){
  const root = document.documentElement;

  const map = {
    normal: '',
    halloween: 'halloween',
    weihnachten: 'christmas',
    fruehling: 'spring',
    sommer: 'summer'
  };

  const theme = map[SAISON] ?? '';
  if(theme) root.setAttribute('data-theme', theme);
  else root.removeAttribute('data-theme');

  // Zentrale Zusatzoptik für Frühling und Sommer
  const style = document.createElement('style');
  style.textContent = `
    html[data-theme="spring"] body{
      background:linear-gradient(180deg,#f5fff8,#eef9f0 55%,#e9f7ef)!important;
      color:#214b35!important;
    }
    html[data-theme="spring"] header,
    html[data-theme="spring"] .hero,
    html[data-theme="spring"] .sidebar{
      background:linear-gradient(135deg,#6fcf97,#77c8d6 55%,#f4c96b)!important;
      color:#153f31!important;
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
      background:#ffffff!important;
      border-color:#cfe7d6!important;
      box-shadow:0 8px 22px rgba(57,123,82,.08)!important;
    }
    html[data-theme="spring"] .badge{
      background:#e8f8ec!important;color:#267047!important;
    }

    html[data-theme="summer"] body{
      background:linear-gradient(180deg,#fffaf0,#fff5d8 55%,#eefaff)!important;
      color:#244a5c!important;
    }
    html[data-theme="summer"] header,
    html[data-theme="summer"] .hero,
    html[data-theme="summer"] .sidebar{
      background:linear-gradient(135deg,#3fc2e3,#4aa7e8 55%,#ffd05a)!important;
      color:#073e5f!important;
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
      background:#ffffff!important;
      border-color:#cfe5ed!important;
      box-shadow:0 8px 22px rgba(38,116,150,.08)!important;
    }
    html[data-theme="summer"] .badge{
      background:#e9f8fd!important;color:#0b769a!important;
    }

    .season-teacher-decor{position:fixed;inset:0;pointer-events:none;z-index:9000;overflow:hidden}
    .season-teacher-decor .corner{position:absolute;font-size:54px;filter:drop-shadow(0 5px 8px rgba(0,0,0,.15))}
    .season-teacher-decor .tl{left:18px;top:18px}
    .season-teacher-decor .tr{right:18px;top:18px}
    .season-teacher-decor .bl{left:18px;bottom:18px}
    .season-teacher-decor .br{right:18px;bottom:18px}

    html[data-theme="spring"] .spring-float{
      display:block;
      position:absolute;
      animation:springFloat 10s ease-in-out infinite;
    }
    html[data-theme="summer"] .summer-float{
      display:block;
      position:absolute;
      animation:summerFloat 9s ease-in-out infinite;
    }
    @keyframes springFloat{
      0%,100%{transform:translateY(0) rotate(-3deg)}
      50%{transform:translateY(-14px) rotate(3deg)}
    }
    @keyframes summerFloat{
      0%,100%{transform:translateY(0) rotate(-2deg)}
      50%{transform:translateY(-10px) rotate(2deg)}
    }
    @media(prefers-reduced-motion:reduce){
      .spring-float,.summer-float{animation:none!important}
    }
  `;
  document.head.appendChild(style);

  // Lehrer-gesteuerte Deko für Frühling/Sommer
  if(theme === 'spring' || theme === 'summer'){
    const d = document.createElement('div');
    d.className = 'season-teacher-decor';
    if(theme === 'spring'){
      d.innerHTML = `
        <div class="corner tl spring-float">🌷</div>
        <div class="corner tr spring-float" style="animation-delay:-2s">🦋</div>
        <div class="corner bl spring-float" style="animation-delay:-4s">🌼</div>
        <div class="corner br spring-float" style="animation-delay:-6s">🌱</div>
      `;
    } else {
      d.innerHTML = `
        <div class="corner tl summer-float">☀️</div>
        <div class="corner tr summer-float" style="animation-delay:-2s">🕶️</div>
        <div class="corner bl summer-float" style="animation-delay:-4s">🍉</div>
        <div class="corner br summer-float" style="animation-delay:-6s">🏖️</div>
      `;
    }
    document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(d));
  }
})();
