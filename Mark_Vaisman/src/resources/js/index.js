import '../css/style.scss';

import $ from 'jquery';

import {Manager, Developer} from './models.js';
import {ManagerInfo, DeveloperInfo} from './views.js';

const manager = new Manager(1, 'Владимир', 30, '1990-09-14', '120000', 'ИТ отдел');

const developer1 = new Developer(3, 'Вася', 25, '1995-08-20', '100000', 'ИТ отдел');
const developer2 = new Developer(4, 'Петя', 44, '1976-02-01', '100000', 'ИТ отдел');
const developer3 = new Developer(5, 'Ольга', 35, '1985-03-23', '100000', 'ИТ отдел');

manager.addDeveloper(developer1);
manager.addDeveloper(developer2);
manager.addDeveloper(developer3);

$('#app').append('<h1>Сотрудники</h1>');

$('#app').append((new ManagerInfo(manager)).render());
$('#app').append((new DeveloperInfo(developer1)).render());
$('#app').append((new DeveloperInfo(developer2)).render());
$('#app').append((new DeveloperInfo(developer3)).render());

$('.human').on('click', (event) => {
    $('.human').find('.date-time').hide();
    const parent = $(event.target).parent();
    if (parent.attr('id') !== 'app') {
        parent.find('.date-time').text((new Date()).toLocaleDateString()).show();

    }
});