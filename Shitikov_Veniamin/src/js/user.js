import '../css/user.css';

export  class Human {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        console.log(`Hi from ${this.firstName} ${this.lastName}!`);
    }
}

export class Dog {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log('Hav, hav');
    }
}