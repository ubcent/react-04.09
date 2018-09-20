import './button.css';

export default class Button {
  btnClick(btn) {
    btn.addEventListener('click', () => {
      let date = new Date();
      const options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };

      alert(date.toLocaleString('ru', options));
    });
  }
}
