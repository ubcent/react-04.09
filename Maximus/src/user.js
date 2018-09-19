import './user.css';

export default class Human {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    sayHi() {
        return `Hi, ${this.fName} ${this.lName}`;
    }
}

export class Alien {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    sayHi() {
        return `Hello, ${this.fName} ${this.lName}`;
    }
}