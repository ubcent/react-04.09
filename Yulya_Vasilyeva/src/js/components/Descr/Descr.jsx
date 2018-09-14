//импорт React
import React, { Component } from 'react';

//импортируем jumbotron из Bootstrap для описания сайта
import { Jumbotron } from 'reactstrap';

export default class Descr extends Component{
    render(){
        return(
            <Jumbotron>
                <h1>Нескучный блог о компьютерной графике.</h1>
                <p>Мы рады предложить Вам свежие новости из области 3D и 2D графики.</p>
                <hr/>
                <p>Только самое свежее и трехмерное</p>
            </Jumbotron>
        );
    }
}