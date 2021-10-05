// export default function create(type, attributes, ...children) {
//   let element = document.createElement(type);
  
//   for (let key of Object.keys(attributes)) {
//     element.setAttribute(key, attributes[key]);
//   }

//   for (let child of children) {
//     if (typeof child != 'string') element.appendChild(child);
//     else element.appendChild(document.createTextNode(child));
//   }

//   return element;
// }

export function create(type, attributes, content) {
  const element = document.createElement(type);
  for (let key of Object.keys(attributes)) {
    element.setAttribute(key, attributes[key]);
  }
  if (content) element.appendChild(document.createTextNode(content));
  return element;
}

export function build(page, ...components) {
  for (let component of components) {
    page.appendChild(component);
  }
  return page;
}

export function addPage(page) {
  let dom = create('section', { 'id': page });
  let accent = create('div', { 'id': `${page}-accent`, 'class': 'accent' });
  return build(dom, accent);
}

export function addHeader(page) {
  let header = create('div', { 'id': `${page}-header` });
  let spacing = create('div', { 'id': `${page}-photo` });
  return build(header, spacing);
}

export function addContent(page) {
  let content = create('div', { 'id': `${page}-content` });
  let spacing = create('div', { 'id': `${page}-info` });
  return build(content, spacing);
}

export function addImage(id, src, credit, href) {
  let element = create('div', { 'id': id, 'class': 'photo' });
  let image = create('img', { 'src': src });
  let cred = create('div', { 'class': 'credit' });
  let link = create('a', { 'href': href }, credit);

  return build(element, image, build(cred, link));
}
