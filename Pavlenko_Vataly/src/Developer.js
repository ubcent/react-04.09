export class Developer {
    constructor(firstName, lastName, patronymic) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
    }

    getFullName() {
        return `${this.lastName} ${this.firstName} ${this.patronymic}`;
    }
}