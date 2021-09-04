import create from './create';
import { bread, coffee } from './images';

const about = {
  email: 'information@cafeclara.com',
  phone: '555 555 5555',
  titleA: 'hours & locations',
  location: '123 Fake Street, Seattle, Washington',
  hours: {
    weekdays: '6 AM - 8 PM',
    weekends: '6 AM - 6 PM',
  },
  titleB: 'about',
  blurb: ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'],
};

export default  create('div', { 'id': 'about', 'class': 'section' },
                  create('div', { 'id': 'accent3', 'class': 'accent' },
                    create('footer', {},
                      create('b', {}, 'Email'),
                      about.email,
                      create('b', {}, 'Phone'),
                      about.phone)),
                  create('div', { 'id': 'photo4', 'class': 'photo' },
                    create('img', { 'src': bread['src'] }),
                    create('div', { 'class': 'credit' },
                      create('a', { 'href': bread['href'] }, bread['credit']))),
                  create('div', { 'id': 'photo5', 'class': 'photo' },
                    create('img', { 'src': coffee['src'] }),
                    create('div', { 'class': 'credit' },
                      create('a', { 'href': coffee['href'] }, coffee['credit']))),
                  create('div', { 'id': 'hours' },
                    create('h4', {}, about.titleA),
                    create('div', { 'class': 'place' },
                      create('p', {}, about.location)),
                    create('div', {},
                      create('p', {}, 'Weekdays'),
                      create('p', { 'class': 'date' }, about.hours.weekdays),
                      create('p', {}, 'Weekends'),
                      create('p', { 'class': 'date' }, about.hours.weekends))),
                  create('div', { 'id': 'store' }, 
                    create('h4', {}, about.titleB),
                    create('p', {}, about.blurb[0]),
                    create('p', {}, about.blurb[1])));