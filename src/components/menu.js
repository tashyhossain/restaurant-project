import create from './create';
import { side, salad } from './images';
import menu from './content/menu.json';


function createItem() {

  return create('h3', {}, 'beverages');
}

function load() {
  return  create('div', { 'id': 'menu', 'class': 'section' }, 
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
                  createItem()),
                create('div', { 'id': 'meals', 'class': 'cell wide' }, 
                  /* createItem(menu) */))));
}

export default load();