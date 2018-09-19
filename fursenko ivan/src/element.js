export class Element {
    constructor(elClass, data) {
        this.class = elClass;
        this.data = data;
        this.events = [];
    }
    
    addEvent(type, fun) {
        this.events.push({type, fun});
    }
    
    render() {
        const el = document.createElement('div');
        el.classList.add(this.class);
        let content = '';
        for (let prop in this.data) {
            content += `<div class='${this.class + prop}'>
                    <span>${this.data[prop] != null ? (prop + ': ' + this.data[prop]) : ('')}</span>
                </div>`;
        }
        el.innerHTML = content;
        
        if (this.events != undefined){
            this.events.forEach((event) => {
                el.addEventListener(event.type, event.fun)
                el.classList.add('clickable');
            });
        }
        
        return el;
    }
}