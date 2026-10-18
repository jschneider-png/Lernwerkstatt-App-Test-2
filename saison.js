/* ============================================================
   SANITÄRTECHNIK 11 – SAISONSTEUERUNG · STABIL
   ============================================================
   Diese Version ist bewusst LEICHTGEWICHTIG:
   - keine GIFs
   - keine Schneeflocken/Fledermäuse/Partikel
   - keine zusätzlichen DOM-Ebenen
   - kein backdrop-filter
   - keine z-index-Eingriffe in deine Kursfunktionen

   ÄNDERE NUR DIESE ZEILE:
   ============================================================ */

const SAISON = 'sommer';

/*
Mögliche Werte:
'normal'
'halloween'
'weihnachten'
'fruehling'
'sommer'
*/

(function () {
  const map = {
    normal: '',
    halloween: 'halloween',
    weihnachten: 'christmas',
    fruehling: 'spring',
    sommer: 'summer'
  };

  const theme = map[SAISON] ?? '';
  const html = document.documentElement;

  if (theme) html.setAttribute('data-theme', theme);
  else html.removeAttribute('data-theme');

  const script =
    document.currentScript ||
    [...document.scripts].find(s => (s.src || '').includes('saison.js'));

  const base = script && script.src
    ? new URL('./', script.src)
    : new URL('./', location.href);

  const asset = name => new URL('assets/saison/' + name, base).href;

  /* Alte Saison-Dekorationen aus früheren Versionen ausblenden.
     Sie bleiben im HTML unschädlich, werden aber nicht mehr animiert. */
  const style = document.createElement('style');
  style.id = 'sani11-season-stable';

  style.textContent = `

    /* ==========================================================
       ALTE SAISON-ELEMENTE SICHER DEAKTIVIEREN
       ========================================================== */
    .theme-switcher,
    .season-decor,
    .theme-season-label,
    .season-banner,
    .season-teacher-decor,
    #season-bg,
    #season-fx,
    #season-characters,
    #season-world-bg,
    #season-world-shade,
    #season-world-fx,
    #season-world-characters,
    #sani-season-bg,
    #sani-season-wash,
    #sani-season-fx,
    #sani-season-characters{
      display:none !important;
    }

    /* Alte Animationen auf der Seite stoppen. */
    html[data-theme] *,
    html[data-theme] *::before,
    html[data-theme] *::after{
      animation-duration:0s !important;
      animation-delay:0s !important;
    }

    /* ==========================================================
       NORMAL
       Originaldesign bleibt vollständig erhalten.
       ========================================================== */
    html:not([data-theme]) body{
      background-image:none;
    }

    /* ==========================================================
       HALLOWEEN
       ========================================================== */
    html[data-theme="halloween"] body{
      background:
        linear-gradient(
          rgba(17,12,26,.22),
          rgba(17,12,26,.34)
        ),
        url("${asset('halloween-hintergrund.png')}")
        center center / cover fixed no-repeat !important;

      color:#f7f2f6 !important;
    }

    html[data-theme="halloween"] header,
    html[data-theme="halloween"] .hero,
    html[data-theme="halloween"] .sidebar{
      background:
        linear-gradient(
          135deg,
          rgba(20,15,38,.96),
          rgba(61,31,74,.95) 55%,
          rgba(118,52,27,.94)
        ) !important;
      color:#fff !important;
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
      background:rgba(35,31,44,.95) !important;
      color:#f8f3f7 !important;
      border-color:rgba(226,151,102,.30) !important;
      box-shadow:0 8px 22px rgba(0,0,0,.20) !important;
    }

    html[data-theme="halloween"] p,
    html[data-theme="halloween"] small,
    html[data-theme="halloween"] .muted{
      color:#ded5df !important;
    }

    html[data-theme="halloween"] .room{
      background:rgba(255,255,255,.94) !important;
    }

    /* ==========================================================
       WEIHNACHTEN
       ========================================================== */
    html[data-theme="christmas"] body{
      background:
        linear-gradient(
          rgba(234,244,250,.10),
          rgba(226,239,247,.22)
        ),
        url("${asset('weihnachten-hintergrund.png')}")
        center center / cover fixed no-repeat !important;

      color:#1e4335 !important;
    }

    html[data-theme="christmas"] header,
    html[data-theme="christmas"] .hero,
    html[data-theme="christmas"] .sidebar{
      background:
        linear-gradient(
          135deg,
          rgba(7,91,57,.96),
          rgba(11,119,74,.95) 55%,
          rgba(158,34,51,.94)
        ) !important;
      color:#fff !important;
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
      background:rgba(255,255,255,.96) !important;
      color:#1e4335 !important;
      border-color:rgba(180,212,192,.85) !important;
      box-shadow:0 8px 22px rgba(19,81,62,.12) !important;
    }

    html[data-theme="christmas"] .room{
      background:rgba(255,255,255,.95) !important;
    }

    /* ==========================================================
       FRÜHLING
       ========================================================== */
    html[data-theme="spring"] body{
      background:
        linear-gradient(
          rgba(245,252,246,.12),
          rgba(241,250,243,.24)
        ),
        url("${asset('fruehling-hintergrund.png')}")
        center center / cover fixed no-repeat !important;

      color:#214b35 !important;
    }

    html[data-theme="spring"] header,
    html[data-theme="spring"] .hero,
    html[data-theme="spring"] .sidebar{
      background:
        linear-gradient(
          135deg,
          rgba(75,162,106,.95),
          rgba(72,178,173,.94) 58%,
          rgba(236,187,86,.93)
        ) !important;
      color:#153f31 !important;
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
      background:rgba(255,255,255,.95) !important;
      color:#214b35 !important;
      border-color:rgba(193,226,201,.88) !important;
      box-shadow:0 8px 22px rgba(47,108,65,.10) !important;
    }

    html[data-theme="spring"] .room{
      background:rgba(255,255,255,.95) !important;
    }

    /* ==========================================================
       SOMMER
       ========================================================== */
    html[data-theme="summer"] body{
      background:
        linear-gradient(
          rgba(240,251,255,.08),
          rgba(255,248,224,.17)
        ),
        url("${asset('sommer-hintergrund.png')}")
        center center / cover fixed no-repeat !important;

      color:#24485b !important;
    }

    html[data-theme="summer"] header,
    html[data-theme="summer"] .hero,
    html[data-theme="summer"] .sidebar{
      background:
        linear-gradient(
          135deg,
          rgba(38,157,202,.95),
          rgba(62,184,211,.94) 58%,
          rgba(239,184,65,.93)
        ) !important;
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
      background:rgba(255,255,255,.95) !important;
      color:#24485b !important;
      border-color:rgba(190,222,235,.90) !important;
      box-shadow:0 8px 22px rgba(26,106,143,.10) !important;
    }

    html[data-theme="summer"] .room{
      background:rgba(255,255,255,.95) !important;
    }

    /* ==========================================================
       FUNKTIONS-SCHUTZ
       Modale Lernlandkarte / Lerneinheiten immer über allem.
       ========================================================== */
    .unit-backdrop,
    .map-backdrop{
      z-index:20000 !important;
    }

    .hotspot-map{
      z-index:10 !important;
      pointer-events:auto !important;
    }

    .map-wrap .hot,
    button,
    a{
      pointer-events:auto;
    }

    /* Kein Blur = deutlich weniger Last auf Tablets/ByCS. */
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
      backdrop-filter:none !important;
      -webkit-backdrop-filter:none !important;
    }

    @media(max-width:760px){
      html[data-theme] body{
        background-attachment:scroll !important;
      }
    }
  `;

  document.head.appendChild(style);

  /* Alte dynamisch erzeugte Saison-Layer sicher entfernen,
     falls der Browser sie durch Cache noch im DOM hat. */
  function cleanup() {
    document.querySelectorAll(
      '#sani-season-bg,#sani-season-wash,#sani-season-fx,#sani-season-characters,' +
      '#season-bg,#season-fx,#season-characters,' +
      '#season-world-bg,#season-world-shade,#season-world-fx,#season-world-characters,' +
      '.season-teacher-decor,.season-decor,.season-banner,.theme-season-label,.theme-switcher'
    ).forEach(el => el.remove());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cleanup, { once:true });
  } else {
    cleanup();
  }
})();
