function createBtn(name) {
  let btn = document.createElement('button');
  btn.textContent = name;
  btn.setAttribute('data-target', name);
  btn.addEventListener('click', scroll);
  return btn;
}

function createNav(...btns) {
  let nav = document.createElement('nav');
  for (let btn of btns) nav.appendChild(btn);
  return nav;
}

export default createNav(createBtn('home'), createBtn('menu'), createBtn('about'));