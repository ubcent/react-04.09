//пользовательские стили
import './Descr.scss';

//импорт React
import React, { PureComponent } from 'react';

//импортируем jumbotron из Bootstrap для описания сайта
import { Container, Jumbotron } from 'reactstrap';

export default class Descr extends PureComponent {
    render() {
        return (
            <Jumbotron className="blog-descr">
                <Container>
                    <h1>Нескучный блог о компьютерной графике</h1>
                    <p>Мы рады предложить Вам свежие новости из области 3D и 2D графики.</p>
                    <p>Только самое свежее и трехмерное</p>
                </Container>
            </Jumbotron>
        );
    }
}