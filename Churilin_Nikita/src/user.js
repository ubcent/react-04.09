import './user.css';

export default class Human {
    constructor(firstName, lastName, nameOfFather) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nameOfFather = nameOfFather;
    }

    sayHi() {
        return `Здравствуйте, ${this.lastName} ${this.firstName} ${this.nameOfFather}`;
    }
}