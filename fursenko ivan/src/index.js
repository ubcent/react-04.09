import './stylesheet.css';
import { Developer } from './developer';
import { Element } from './element';
import { GetDate } from './getDate';

const users = [];
const elements = [];

for (let i = 0; i < 5; i++) {
    users.push(new Developer());
}

users.forEach((user) => (elements.push(new Element('userCard', user.getAsObj()))));

const cont = document.querySelector('.container');

elements.forEach((el) => {
    el.addEvent('click', () => {
        const el = document.createElement('div');
        el.classList.add('popup');
        el.innerHTML = GetDate.now();
        cont.append(el);
        setTimeout(() => el.parentNode.removeChild(el), 1500);
    });
    cont.append(el.render());
});

