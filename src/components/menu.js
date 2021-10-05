import { create, build, addPage, addHeader, addContent, addImage } from './create';
import { side, salad } from './images';
import text from './content/menu.json';

function addItems(type) {
  let items = create('div', { 'id': type.style, 'class': 'item' });
  let title = create('h3', {}, type.title);
  build(items, title);

  for (let item of type.items) {
    let dom = document.createElement('div');
    for (let key of Object.keys(item)) {
      let line = create('p', { 'class': key }, item[key]);
      build(dom, line);
    }
    build(items, dom);
  }
  return items;
}

function buildContent() {
  let content = addContent('menu');
  let drinks = addItems(text['drinks']);
  let starter = addItems(text['starter']);
  let sweets = addItems(text['sweets']);
  let meals = addItems(text['meals']);
  build(content.childNodes[0], drinks, starter, sweets, meals);
  return content;
}

function buildHeader() {
  let header = addHeader('menu');
  let imageA = addImage('photo4', side.src, side.credit, side.href);
  let imageB = addImage('photo3', salad.src, salad.credit, salad.href);
  build(header.childNodes[0], imageA, imageB);
  return header;
}

function loadMenu() {
  let menu = addPage('menu');
  let content = buildContent();
  let header = buildHeader();
  build(menu, content, header);
  return menu;
}

export default loadMenu();