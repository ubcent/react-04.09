import Human from './user';

const send = document.querySelector('#send');
const firstName = document.querySelector('#fn');
const lastName = document.querySelector('#ln');
const nameOfFather = document.querySelector('#nf');

send.addEventListener('click', function() {
    const human = new Human(firstName.value, lastName.value, nameOfFather.value);
    alert(human.sayHi());
});