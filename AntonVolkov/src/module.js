export default class Human {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHi(){
        return `Hi! I'm ${this.firstname} ${this.lastname}`;
    }
}