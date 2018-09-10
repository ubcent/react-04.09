export class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}