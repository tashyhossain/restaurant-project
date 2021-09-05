function removeActive() {
  let btns = document.getElementsByTagName('button');
  for (let btn of btns) btn.classList.remove('active');
}

export function pageScroll(e) {
  let element = document.getElementById(e.target.dataset.target);
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
  removeActive();
  if (!e.target.classList.contains('cta')) e.target.classList.add('active');
  else document.querySelector('.menu').classList.add('active');
}

function createBtn(name) {
  let btn = document.createElement('button');
  btn.textContent = name;
  btn.setAttribute('data-target', name);
  btn.classList.add(name);
  btn.addEventListener('click', pageScroll);

  if(name === 'home') btn.classList.add('active');

  return btn;
}

function createNav(...btns) {
  let nav = document.createElement('nav');
  let span = document.createElement('span');
  span.classList.add('hover');
  nav.appendChild(span);
  for (let btn of btns) nav.appendChild(btn);
  return nav;
}

export default createNav(createBtn('home'), createBtn('menu'), createBtn('about'));