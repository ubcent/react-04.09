import './style.css';
export default class Fio {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  render(elementContainer) {
    elementContainer.innerHTML = `${this.firstname} ${this.lastname}`;
  }
  btnClick(btn) {
    btn.addEventListener('click', () => {
      alert('date');
    });
  }
}
