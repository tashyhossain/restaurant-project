import { create, build, addPage, addHeader, addContent, addImage } from './create';
import { bread, coffee } from './images';
import text from './content/about.json';

function buildHeader() {
  let header = addHeader('about');
  let imageA = addImage('photo4', bread.src, bread.credit, bread.href);
  let imageB = addImage('photo5', coffee.src, coffee.credit, coffee.href);

  build(header.childNodes[0], imageA, imageB);
  return header;
}

function buildStoreInfo() {
  let store = create('div', { 'id': 'about-store'});
  let title = create('h4', {}, text['titleA']);
  let location = build(create('div', { 'id': 'about-location' }), create('p', {}, text['location']));
  let hours = create('div', { 'id': 'about-hours' });
  let weekdays = create('p', {}, 'Weekdays');
  let weekdaysHrs = create('p', { 'class': 'date' }, text['hours']['weekdays']);
  let weekends = create('p', {}, 'Weekends');
  let weekendsHrs = create('p', { 'class': 'date' }, text['hours']['weekends']);

  return build(store, title, location, build(hours, weekdays, weekdaysHrs, weekends, weekendsHrs));
}

function buildDescription() {
  let desc = create('div', { 'id': 'about-desc' });
  let title = create('h4', {}, text['titleB']);
  let para1 = create('p', {}, text['desc']['para1']);
  let para2 = create('p', {}, text['desc']['para2']);

  return build(desc, title, para1, para2);
}

function buildContent() {
  let content = addContent('about');
  let storeInfo = buildStoreInfo();
  let description = buildDescription();

  build(content.childNodes[0], storeInfo, description);
  return content;
}

function buildFooter() {
  let footer = document.createElement('footer');
  let titleA = create('b', {}, 'Email');
  let email = document.createTextNode(text.email);
  let titleB = create('b', {}, 'Phone');
  let phone = document.createTextNode(text.phone);

  build(footer, titleA, email, titleB, phone);
  return footer;
}

function loadAbout() {
  let about = addPage('about');
  let header = buildHeader();
  let content = buildContent();
  let footer = buildFooter();
  build(about, header, content);
  build(about.childNodes[0], footer);
  return about;
}

export default loadAbout();