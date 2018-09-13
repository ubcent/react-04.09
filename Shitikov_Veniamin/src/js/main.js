import '../css/main.css';

export class Main {
    constructor(text){
        this.text = text;
        this.render();
    }

    render(){
        const main = document.createElement('main');
        const p = document.createElement('p');
        const button = document.createElement('button');

        p.innerText = 'Точное время';

        button.innerText = this.text;
        button.onclick = this.mainClick;

        main.appendChild(p);
        main.appendChild(button);
        document.body.appendChild(main);
    }

    mainClick(){
        const p = this.previousSibling;
        p.innerText = `Точное время - ${new Date().toLocaleTimeString()}`;

    }
}