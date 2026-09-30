const tracks = document.querySelectorAll('.track');
const panels = document.querySelectorAll('.track-panel');
const projectSets = document.querySelectorAll('.project-set');
tracks.forEach((track) => track.addEventListener('click', () => {
  const selected = track.dataset.track;
  tracks.forEach((item) => { const active = item === track; item.classList.toggle('active', active); item.setAttribute('aria-selected', active); });
  panels.forEach((panel) => { const active = panel.id === `${selected}-panel`; panel.classList.toggle('active', active); panel.hidden = !active; });
  projectSets.forEach((set) => { const active = set.id === `${selected}-projects`; set.classList.toggle('active', active); set.hidden = !active; });
}));
const menu = document.querySelector('.menu-toggle'); const nav = document.querySelector('#site-nav');
menu.addEventListener('click', () => { const isOpen = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!isOpen)); nav.classList.toggle('open', !isOpen); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }));
document.querySelector('#year').textContent = new Date().getFullYear();
