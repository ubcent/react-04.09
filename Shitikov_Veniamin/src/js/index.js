import { Human, Dog } from "./user";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

import '../css/style.css';

const header = new Header('Your Welcome');

const main = new Main('Нажмите, чтобы узнать точное время');

const footer = new Footer('© 2018 Все права защищены.');

const human = new Human('Ivan', 'Ivanov');

const dog = new Dog('Sharik');

console.log("Hello peple!");

human.sayHi();

dog.sayHi();