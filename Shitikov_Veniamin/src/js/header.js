import '../css/header.css';

export class Header {
    constructor(title){
        this.title = title;
        this.render();
    }

    render(){
        const header = document.createElement('header');
        const h1 = document.createElement('h1');
        h1.innerText = this.title.toUpperCase();
        header.appendChild(h1);
        document.body.appendChild(header);
    }
}