import create from './create';
import { front } from './images';

const home = {
  title: 'café clara',
  subtitle: 'Bright Elegance',
  caption: 'Enjoy delicious, handcrafted coffee beverages or quality, Italian and French-inspired dishes within our café\'s calming and elegant atmosphere.',
  link: 'See Our Menu',
}

export default  create('div', { 'id': 'home', 'class': 'section' },
                  create('div', { 'id': 'accent1', 'class': 'accent' }), 
                  create('div', { 'id': 'photo1', 'class': 'photo' }, 
                    create('img', { 'src': front['src'] }),
                    create('div', { 'class': 'credit' }, 
                      create('a', { 'href': front['href'] }, front['credit']))),
                  create('div', { 'id': 'title' },
                    create('h1', {}, home.title)),
                  create('div', { 'id': 'info' }, 
                    create('h2', {}, home.subtitle),
                    create('p', {}, home.caption),
                    create('p', {},
                      create('button', { 'data-target': 'menu' }, home.link))));