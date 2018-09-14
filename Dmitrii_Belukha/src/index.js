import Developer from './Developer';
import DateInfo from './DateInfo';
import styles from './css/styles.css';

const infoField = document.querySelector('.info');
const nameField = document.querySelector('.info-name');
const dateField = document.querySelector('.info-date');

const buttonDate = document.querySelector('.btn-date');

infoField.addEventListener('click', () => {
  dateField.innerText = DateInfo.getCurrentDate();
});

const dev = new Developer('Иван', 'Иванов', 'Иванович');

nameField.innerHTML = `${dev.getInfo()} <span class="hint">(Клик, чтобы узнать дату)</span>`;
