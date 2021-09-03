import create from './create.js';

function target() {

}

export default create('nav', { 'id': 'nav' }, 
                create('button', {}, 'Home'));

