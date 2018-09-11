export class ManagerInfo {

    constructor(manager) {
        this.manager = manager;
    }

    render() {
        return `<div class="human">
                    <p>Имя: ${this.manager.name}</p>
                    <p>Возраст: ${this.manager.age}</p>
                    <p>День рождения: ${this.manager.dateOfBirth}</p>
                    <p>Зарплата: ${this.manager.salary}</p>
                    <p>Департамент: ${this.manager.department}</p>
                    <p>Должность: менеджер</p>
                    <p>${this.manager.getDeveloperInfo()}</p>
                    <div class="date-time"></div>
                </div>`;
    }

}

export class DeveloperInfo {

    constructor(developer) {
        this.developer = developer;
    }

    render() {
        return `<div class="human">
                    <p>Имя: ${this.developer.name}</p>
                    <p>Возраст: ${this.developer.age}</p>
                    <p>День рождения: ${this.developer.dateOfBirth}</p>
                    <p>Зарплата: ${this.developer.salary}</p>
                    <p>Департамент: ${this.developer.department}</p>
                    <p>Должность: разработчик</p>
                    <p>${this.developer.getManagerInfo()}</p>
                    <div class="date-time"></div>
                </div>`;
    }

}