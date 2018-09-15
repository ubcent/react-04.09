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
import Menu from 'components/Menu/Menu';
import Descr from 'components/Descr/Descr';
import Article from 'components/Article/Article';
import SignIn from 'components/SignIn/SignIn';
import Submenu from 'components/Submenu/Submenu';
import Subscr from 'components/Subscr/Subscr';
import Footer from 'components/Footer/Footer';

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