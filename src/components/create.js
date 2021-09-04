export default function create(type, attributes, ...children) {
  let element = document.createElement(type);
  
  for (let key of Object.keys(attributes)) {
    element.setAttribute(key, attributes[key]);
  }

  for (let child of children) {
    if (typeof child != 'string') element.appendChild(child);
    else element.appendChild(document.createTextNode(child));
  }

  return element;
}