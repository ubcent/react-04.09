//пользовательские стили
import './Descr.scss';
import bgImg from './img/bg.jpeg';

//импорт React
import React, { Component } from 'react';

//импортируем jumbotron из Bootstrap для описания сайта
import { Container, Jumbotron } from 'reactstrap';

//добавляем изображение на фон
const backImgJumbo = {
    backgroundImage: `url(${bgImg})`
};

export default class Descr extends Component {
    render() {
        return (
            <Jumbotron className="blog-descr" style={backImgJumbo}>
                <Container>
                    <h1>Нескучный блог о компьютерной графике</h1>
                    <p>Мы рады предложить Вам свежие новости из области 3D и 2D графики.</p>
                    <p>Только самое свежее и трехмерное</p>
                </Container>
            </Jumbotron>
        );
    }
}