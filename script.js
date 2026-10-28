const pages = [['index.html','Accueil'],['collections.html','Collections'],['montres.html','Montres'],['bijoux.html','Bijoux'],['atelier.html','Atelier'],['contact.html','Contact']];
const cur = location.pathname.split('/').pop() || 'index.html';
document.querySelector('header').innerHTML = `<div class="wrap nav"><a class="logo" href="index.html">De La Roche<small>HORLOGERIE · JOAILLERIE</small></a><nav><ul id="menu">${pages.map(([h,t])=>`<li><a href="${h}" class="${h===cur?'on':''}">${t}</a></li>`).join('')}</ul></nav><button class="burger" aria-label="Menu" onclick="menu.classList.toggle('open')">☰</button></div>`;
document.querySelector('footer').innerHTML = `<div class="wrap"><div class="foot"><div><a class="logo" href="index.html">De La Roche</a><p style="margin-top:14px;max-width:320px">Horlogerie, joaillerie et atelier. Une maison de tradition, une expérience repensée.</p></div><div><h4>Navigation</h4><ul>${pages.map(([h,t])=>`<li><a href="${h}">${t}</a></li>`).join('')}</ul></div><div><h4>Boutique</h4><p>Vienne (38)<br>04 00 00 00 00<br>contact@exemple.fr</p></div></div><p class="disclaimer">Projet de démonstration réalisé par TACNET.<br>Cette réalisation n'est pas affiliée à l'entreprise De La Roche.<br><a href="credits.html" style="font-size:.75rem;opacity:.8">Crédits photos</a></p></div>`;

const hd = document.querySelector('header');
const onScroll = () => hd.classList.toggle('solid', scrollY > 40);
onScroll(); addEventListener('scroll', onScroll);

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll('.reveal').forEach(e => io.observe(e));

document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('.product').forEach(p => p.classList.toggle('hide', b.dataset.f !== 'all' && p.dataset.cat !== b.dataset.f));
}));

const form = document.getElementById('contactForm');
if (form) form.addEventListener('submit', e => { e.preventDefault(); document.getElementById('ok').style.display = 'block'; form.reset(); });
