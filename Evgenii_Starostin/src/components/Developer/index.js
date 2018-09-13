import CurrentDate from '../CurrentDate';
import './style.css';
import avatar from './img/avatar.jpg';

export default class Developer {
    constructor(name) {
        this.name = name;
    }

    showDate() {
        const currentDate = new CurrentDate();
        this.parentNode.appendChild(currentDate.render());
    }

    render() {
        const componentNode = document.createElement('div');
        componentNode.classList.add('component');

        const developerNode = document.createElement('div');
        developerNode.classList.add('developer');
        developerNode.classList.add('clearfix');
        componentNode.appendChild(developerNode);

        const img = document.createElement('img');
        img.classList.add('avatar');
        img.src = avatar;
        developerNode.appendChild(img);

        const nameNode = document.createElement('p');
        nameNode.innerText = this.name;
        nameNode.classList.add('name');
        nameNode.addEventListener('click', this.showDate);
        developerNode.appendChild(nameNode);

        return componentNode;
    }
}
