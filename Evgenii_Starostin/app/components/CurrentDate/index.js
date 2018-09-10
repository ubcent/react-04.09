import './style.css'

export default class CurrentDate {
    constructor() {
        this.date = new Date();
    }

    render() {
        const formattedDate = `${this.date.getDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear()}`;
        const node = document.createElement('p');
        node.classList.add('date');
        node.innerText = formattedDate;
        return node;
    }
}