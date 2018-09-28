import './_index.scss'; //Пользовательские стили

//компоненты React
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

//компоненты Bootstrap
import {Container, Row, Col} from 'reactstrap';

//компоненты страницы
import MenuContainer from 'containers/MenuContainer'; // главное верхнее меню
import Descr from 'components/Descr/'; // блок с описанием и заголовком сайта
import SignInContainer from 'containers/SignInContainer'; // форма авторизации
import SubmenuContainer from 'containers/SubmenuContainer'; // дополнительное боковое меню
import SubscrContainer from 'containers/SubscrContainer'; // кнопка подписки и модальное окно
import Footer from 'components/Footer/'; // подвал сайта

import routes from './routers';
import store from './store';

//Главный компонет
class App extends Component{
    render(){
        //Собираем компонтенты: меню + авторизация + подписка + список статей + футер
        return(
            <Fragment>
               <Container>
                   <MenuContainer />
                </Container>
                <Descr/>
                <Container>
                    <Row>
                        <Col md="9">
                        <Switch>
                            {/* загружаем по ссылкам страницы главная, статья, комментарии и пользователи*/}
                            {routes.map( (item, indx) => <Route key={indx} {...item}/>)}
                        </Switch>
                        </Col>
                        <Col md="3">
                            {/* форма входа пользователя */}
                            <SignInContainer/>
                            {/* дополнительное меню */}
                            <SubmenuContainer />
                            {/* кнопка подписки на новости */}
                            <SubscrContainer />
                        </Col>
                    </Row>
               </Container>
               <Footer/>
            </Fragment>
        );
    }
}
ReactDOM.render(
   /* внедряем роутер в прилоежние */
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, 
    document.querySelector('#root')
);