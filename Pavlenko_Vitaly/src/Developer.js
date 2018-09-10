export class Developer {
    constructor(firstName, lastName, patronymic) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
    }

    getFullName() {
        return `${this.lastName} ${this.firstName} ${this.patronymic}`;
    }

    render() {
        let dev = document.createElement('div');
        dev.classList.add('developer');
        dev.innerText = this.getFullName();
        dev.addEventListener('click', () => {
            let now = new Date();
            alert(now);
        });
        return dev;
    }
}