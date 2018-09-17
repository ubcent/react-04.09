//Имортируем стили для BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//Пользовательские стили
import './_index.scss';

//компоненты React
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

//компоненты Bootstrap
import {Container, Row, Col} from 'reactstrap';

//компоненты страницы
import Menu from 'components/Menu/'; // главное верхнее меню
import Descr from 'components/Descr/'; // блок с описанием и заголовком сайта
import Article from 'components/Article/'; // список статей
import SignIn from 'components/SignIn/'; // форма авторизации
import Submenu from 'components/Submenu/'; // дополнительное боковое меню
import Subscr from 'components/Subscr/'; // кнопка подписки и модальное окно
import Footer from 'components/Footer/'; // подвал сайта

//импортируем данные из файла
import { mainMenu, subMenu, article } from './data';

//Главный компонет
class App extends Component{
    render(){
        //Собираем компонтенты: меню + авторизация + подписка + список статей + футер
        return(
            <Fragment>
               <Container>
                   <Menu menu={mainMenu}/>
                </Container>
                <Descr/>
                <Container>
                    <Row>
                        <Col md="9">
                            <Article text={article}/>
                        </Col>
                        <Col md="3">
                            <SignIn/>
                            <Submenu submenu={subMenu}/>
                            <Subscr/>
                        </Col>
                    </Row>
               </Container>
               <Footer/>
            </Fragment>
        );
    }
    componentDidMount(){
        //вызваем после визуализации всех компонентов
        console.log("Отрисовалось");
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));