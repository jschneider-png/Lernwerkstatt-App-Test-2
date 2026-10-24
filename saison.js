/* Einheitliches neutrales Erscheinungsbild für die gesamte Lernwerkstatt.
   Ehemalige Saisonsteuerung absichtlich deaktiviert. */
(()=>{'use strict';
const css=document.createElement('style');
css.id='neutral-learning-theme';
css.textContent=`
:root{color-scheme:light!important;--bg:#f1f6f9;--ink:#183b51;--muted:#617a8a;--navy:#113e58;--blue:#197ba8;--accent:#2686a9;--line:#cfe0e9;--soft:#edf6fa;--water:#e4f4fa}
html,html[data-theme],body{background:#f1f6f9!important;color:#183b51!important}
body:before,body:after{display:none!important}
.halloween-decor,.christmas-decor,.season-decor,.season-teacher-decor,.season-banner,.theme-season-label,.theme-switcher,
#sani-season-bg,#sani-season-wash,#sani-season-fx,#sani-season-characters,#season-bg,#season-fx,#season-characters,#season-world-bg,#season-world-shade,#season-world-fx,#season-world-characters{display:none!important}
header,.hero,.sidebar{background:linear-gradient(110deg,#eef6fa,#fff)!important;color:#153e57!important}
.card,.panel,.box,.topic-card,.poster,.material-panel,.materials,.testbox,.insight,.progress,.term,.quizq,.sample,.flash,.task{background:#fff!important;color:#193b53!important;border-color:#d2e2eb!important}
input,select,textarea,.field{background:#fff!important;color:#173b54!important;border-color:#aac9d9!important}
input::placeholder,textarea::placeholder{color:#6d8290!important;opacity:1}
label,p,li,h1,h2,h3,h4,.muted,.meta,.source{color:inherit}
a{color:#116c98}button,.btn{border-color:#b5d2df}
.feedback.ok,.feedback.good{background:#e5f6eb!important;color:#18623f!important}
.feedback.bad,.feedback.error{background:#fff0e8!important;color:#8b3624!important}
`;
document.head.appendChild(css);
document.documentElement.removeAttribute('data-theme');
function cleanup(){document.documentElement.removeAttribute('data-theme');document.querySelectorAll('.halloween-decor,.christmas-decor,.season-decor,.theme-switcher,.season-teacher-decor,#sani-season-bg,#season-world-bg,#season-bg').forEach(x=>x.remove())}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',cleanup,{once:true});else cleanup();
})();