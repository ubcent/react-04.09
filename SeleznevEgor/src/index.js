/*imports*/
/*JS*/
import {Human} from './js/user';
/*CSS*/
import './sass/style.scss';
/*main code*/
const test = new Human('vasa', 'pupkin');

console.log('hello world');
console.log	(test.sayHi());

function onBtnClick(){
	let date = new Date;
	const field = document.querySelector('div.date');
	field.innerText = date.toLocaleString();
}

document.addEventListener("DOMContentLoaded", function () {
            const btn = document.querySelector("#get-time");
            btn.addEventListener("click", onBtnClick);
            
        })