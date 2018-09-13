import './user.css';

// экспорт по умолчанию
// export default class Name
// тогда в импортируемом файле
// пишем без скобок
// import Name fron './filename'

export class Human {
  constructor(name = '', dateOfBirth) {

    //Создаём Human
    this.name = name;
    this.dateOfBirth = '';
    this.age = this.getAge(dateOfBirth);
  }

  displayInfo() {
    return `Name ${this.name} \nAge ${this.age} \nDate ${this.dateOfBirth}`;
  }

  //получаем возраст
  getAge(date) {
    let res = '';

    const isDate = () => {
      let reg = /^(0?[1-9]|[12][0-9]|3[01])[\.|,|\;|\/|\\](0?[1-9]|1[0-2])[\.|,|\;|\/|\\](19[0-9]{2}|200[0-9])$/g
      return reg.test(date);
    }

    if (isDate()) {
      let reg = /[\.|,|\;|\/|\\]/;
      let [day, mon, year] = date.split(reg);
      
      //устанавливаем дату рождения по шаблону '01.01.1900'
      this.dateOfBirth = `${(''+day).length < 2 ? '0' + day : day}.${(''+mon).length < 2 ? '0' + mon : mon}.${year}`;
      res = new Date(new Date() - new Date(year, mon, day)).getFullYear() - 1970;
    }
    return res;
  }
}

export class Employee extends Human {
  constructor(name, dateOfBirth, salary = 0, department = '') {
    super(name, dateOfBirth);

    //Создаём Employee
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    return `${super.displayInfo()} \n${this.salary} \n${this.department}`
  }
}