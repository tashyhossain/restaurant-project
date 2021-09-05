import './components/style.css';
import nav, { pageScroll } from './components/nav';
import home from './components/home';
import menu from './components/menu';
import about from './components/about';

const initialize = (function(...pages) {
  const main = document.querySelector('#content');
  for (let page of pages) main.appendChild(page);

  let link = document.getElementsByClassName('cta')[0];
  let target = document.getElementById('menu');
  link.addEventListener('click', pageScroll);

})(nav, home, menu, about);
