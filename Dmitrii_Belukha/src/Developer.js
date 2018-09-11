class Developer {
  constructor(name = '', lastName = '', patronymic = '') {
    this.name = name;
    this.lastName = lastName;
    this.patronymic = patronymic;
  }

  getInfo() {
    return `${this.lastName} ${this.name} ${this.patronymic}`;
  }
}

export default Developer;
