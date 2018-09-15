export class Developer {
    constructor(name = 'John', surname = 'Doe', patronymic = null) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
    }
    
    getFullName() {
        return '' + this.name + this.surname + this.patronymic;
    }
    
    getAsObj() {
        return {
            name: this.name,
            surname: this.surname,
            patronymic: this.patronymic
        };
    }
}