import Human from './user';

var billGates = new Human('Bill', 'Gates');
var elonMusk = new Human('Elon', 'Musk');

function renderName(person) {
    const newEl = document.createElement("span");
    newEl.classList.add("name__item");
    newEl.innerText = person.sayHi();
    document.querySelector(".name").appendChild(newEl);
}

document.addEventListener("DOMContentLoaded", renderName(billGates));
document.addEventListener("DOMContentLoaded", renderName(elonMusk));


