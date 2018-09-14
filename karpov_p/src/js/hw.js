const element = () => {
    const newEl = document.createElement('h1');
    newEl.className = 'main-header';
    return document.body.appendChild(newEl);
}

class newModule {
    constructor() {
        this.element = element();
    }
    addName(name) {
        this.element.innerText = name;
    }
    addDate() {
        this.element.onclick = () => this.element.innerText = new Date();
    }
}

export default new newModule();