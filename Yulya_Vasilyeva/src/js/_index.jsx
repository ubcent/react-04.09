//Имортируем стили для BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//Пользовательские стили
import './_index.css';

//компоненты React
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

//компоненты Bootstrap
import {Container, Row, Col} from 'reactstrap';

//компоненты страницы
import Menu from 'components/Menu/Menu'; // главное верхнее меню
import Descr from 'components/Descr/Descr'; // блок с описанием и заголовком сайта
import Article from 'components/Article/Article'; // список статей
import SignIn from 'components/SignIn/SignIn'; // форма авторизации
import Submenu from 'components/Submenu/Submenu'; // дополнительное боковое меню
import Subscr from 'components/Subscr/Subscr'; // кнопка подписки и модальное окно
import Footer from 'components/Footer/Footer'; // подвал сайта

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
                    <Row>
                        <Col md="9">
                            <Descr/>
                            <Article text={article}/>
                        </Col>
                        <Col md="3">
                            <SignIn/>
                            <Submenu submenu={subMenu}/>
                            <Subscr/>
                        </Col>
                    </Row>
                    <Footer/>
               </Container>
            </Fragment>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));