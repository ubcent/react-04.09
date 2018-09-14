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
import Footer from 'components/Footer/Footer';

//Главный компонет
class App extends Component{
    render(){
        //const {color} = this.props;
        //Собираем компонтенты: меню + авторизация + список статей + футер
        return(
            <Fragment>
               <Container>
                   <Menu/>
                    <Row>
                        <Col md="8">
                            <Descr/>
                            <Article/>
                        </Col>
                        <Col md="auto">
                            <SignIn/>
                        </Col>
                    </Row>
                    <Footer/>
               </Container>
            </Fragment>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));