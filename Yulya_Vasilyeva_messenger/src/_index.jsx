//Пользовательские стили
import './_index.scss';

//компоненты React
import React, {PureComponent, Fragment} from 'react';
import ReactDOM from 'react-dom';

//компоненты страницы
import MessageWindow from 'components/MessageWindow/'; //окно со списком сообщений
import Options from 'components/Options/'; //опции чата

//Главный компонет
class App extends PureComponent{
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