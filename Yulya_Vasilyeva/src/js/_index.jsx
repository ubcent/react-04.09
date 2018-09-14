//Имортируем стили для BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//Пользовательские стили
import './_index.css';

//компоненты React
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

//компоненты Bootstrap
import {Container} from 'reactstrap';

//компоненты страницы
import Menu from 'components/Menu/Menu';

//Главный компонет
class App extends Component{
    render(){
        //const {color} = this.props;
        //Собираем компонтенты: меню + авторизация + список статей
        return(
            <Fragment>
               <Container>
                   <Menu/>
               </Container>
            </Fragment>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));