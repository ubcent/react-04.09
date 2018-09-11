import './user.css';

export default class Human {
    constructor(firstName, lastName, patronymic) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;


    }

    sayHi() {
        return `Hello, ${this.lastName} ${this.firstName} ${this.patronymic}`;
    }
}