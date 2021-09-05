import create from './create';
import { side, salad } from './images';
import menu from './content/menu.json';

function createMenu(category, pos) {
  let items = create('div', { 'id': category.style, 'class': `cell ${pos}` },
                create('h3', {}, category.title));

  for (let item of category.items) {
    let div = document.createElement('div');
    for (let key of Object.keys(item)) {
      let line = document.createElement('p');
      line.classList.add(key);
      line.textContent = item[key];
      div.appendChild(line);
    }
    items.appendChild(div);
  }

  return items;
}

export default  create('div', { 'id': 'menu', 'class': 'section' }, 
                  create('div', { 'id': 'accent2', 'class': 'accent' }),
                  create('div', { 'id': 'photo2', 'class': 'photo' },
                    create('img', { 'src': side['src'] }),
                    create('div', { 'class': 'credit' },
                      create('a', { 'href': side['href'] }, side['credit']))),
                  create('div', { 'id': 'photo3', 'class': 'photo' }, 
                    create('img', { 'src': salad['src'] }),
                    create('div', { 'class': 'credit' }, 
                      create('a', { 'href': salad['href'] }, salad['credit']))),
                  create('div', { 'id': 'items' },
                    create('div', { 'class': 'grid' }, 
                      create('div', { 'class': 'top' }, 
                        createMenu(menu['drinks'], 'small'),
                        createMenu(menu['starter'], 'small'),
                        createMenu(menu['sweets'], 'medium')),
                      createMenu(menu['meals'], 'long'))));
