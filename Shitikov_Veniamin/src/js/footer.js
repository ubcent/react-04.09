import '../css/footer.css';

export class Footer {
    constructor(text){
        this.text = text;
        this.render();
    }

    render(){
        const footer = document.createElement('footer');
        footer.innerHTML = `<small>${this.text}</small>`;
        document.body.appendChild(footer);
    }
}