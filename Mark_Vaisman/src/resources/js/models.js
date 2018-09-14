class Human {

    constructor(id, name, age, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

}

class Employee extends Human {

    constructor(id, name, age, dateOfBirth, salary, department) {
        super(id, name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

}

export class Manager extends Employee {

    constructor(id, name, age, dateOfBirth, salary, department) {
        super(id, name, age, dateOfBirth, salary, department);
        this.developers = [];
    }

    addDeveloper(developer) {
        if (this.developers.indexOf(developer) === -1) {
            this.developers.push(developer);
            developer.setManager(this);
        }
    }

    removeDeveloper(developer) {
        this.developers = this.developers.filter((item) => {
            if (item === developer) {
                developer.setManager(null);
                return false;
            } else {
                return true;
            }
        });
    }

    getDeveloperInfo() {
        if (this.developers.length) {
            return `Разработчики: ${this.developers.map((developer) => developer.name).join(', ')}`;
        } else
            return 'Разработчики не назначены';
    }

}

export class Developer extends Employee {

    constructor(id, name, age, dateOfBirth, salary, department) {
        super(id, name, age, dateOfBirth, salary, department);
        this.manager = null;
    }

    setManager(manager) {
        this.manager = manager;
    }

    getManagerInfo() {
        return (this.manager) ? `Менеджер: ${this.manager.name}` : 'Менеджер не назначен';
    }

}
