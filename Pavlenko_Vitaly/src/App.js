import { Developer } from './Developer';

const dev1 = new Developer('Pavlenko', 'Vitaly', 'Alekseevich');

document.querySelector('#app').appendChild(dev1.render());