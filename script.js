const links = document.querySelectorAll('.lien-tp');

function activateLink(link) {
  links.forEach(l => l.classList.remove('actif'));
  link.classList.add('actif');
}

links.forEach(link => {
  link.addEventListener('click', () => activateLink(link));
});


activateLink(links[0]);
