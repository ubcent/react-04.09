import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Menu from 'components/Menu';
import Content from 'components/Content';
import Login from 'components/Login';
import Footer from 'components/Footer';

const menuLinks = [
    {'url': '#', 'title': 'Главная', 'id': 'link1'},
    {'url': '#', 'title': 'Новости', 'id': 'link2'},
    {'url': '#', 'title': 'Блоги', 'id': 'link3'}
];

const footerLinks = [
    {'url': '#', 'title': 'Контакты', 'id': 'link1'},
    {'url': '#', 'title': 'Партнеры', 'id': 'link2'},
    {'url': '#', 'title': 'Соцсети', 'id': 'link3'}
];

const authLink = '/user/auth/';

const text = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Menu links={menuLinks}/>
                <Login authLink={authLink}/>
                <Content text={text}/>
                <Footer links={footerLinks}/>
            </Fragment>
            );
    }
}

ReactDom.render(<App />, document.getElementById('root'));
