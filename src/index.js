import './components/style.css';
import nav from './components/nav';
import home from './components/home';
import menu from './components/menu';
import about from './components/about';

const initialize = (function(...pages) {
  const main = document.querySelector('#content');
  for (let page of pages) main.appendChild(page);
})(nav, home, menu, about);
