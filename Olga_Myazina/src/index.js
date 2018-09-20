import Fio from './fio';
import Button from './button';

const fio = new Fio('Olga', 'Myazina');
const newText = document.createElement('p');
fio.render(newText);
document.querySelector('#fio').appendChild(newText);

const button = new Button();
const btn = document.createElement('div');
btn.classList.add('btn');
btn.innerHTML = 'Дата';
button.btnClick(btn);
document.querySelector('#fio').appendChild(btn);
