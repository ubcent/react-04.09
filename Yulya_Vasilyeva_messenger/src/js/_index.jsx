//Пользовательские стили
import './_index.scss';

//компоненты React
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

//компоненты страницы
import MessageWindow from 'components/MessageWindow/'; //окно со списком сообщений
import Options from 'components/Options/'; //опции чата

//Главный компонет
class App extends Component{
    render(){
        return(
            <Fragment>
                <MessageWindow />
                <Options />
            </Fragment>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));