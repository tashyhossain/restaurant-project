import { create, build, addPage, addHeader, addContent, addImage } from './create';
import { front } from './images';
import text from './content/home.json';

function buildHeader() {
  let header = addHeader('home');
  let image = addImage('photo1', front.src, front.credit, front.href);
  let title = create('div', { 'id': 'title' });
  let name = create('h1', {}, text['title']);

  build(header.childNodes[0], image, build(title, name));
  return header;
}

function buildContent() {
  let content = addContent('home');
  let title = create('h2', {}, text['subtitle']);
  let desc = create('p', {}, text['desc']);
  let call = create('button', { 'class': 'cta', 'data-target': 'menu' }, text['call']);

  build(content.childNodes[0], title, desc, call);
  return content;
}

function loadHome() {
  let home = addPage('home');
  let header = buildHeader();
  let content = buildContent();

  return build(home, header, content);
}

export default loadHome();