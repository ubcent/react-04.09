export class Human {
  constructor(name, l_name) {
    this.name = name;
    this.l_name = l_name;
  }

  showInfo() {
    return `${this.name} ${this.l_name}`;
  }
}