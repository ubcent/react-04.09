//Имортируем стили для BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//компоненты React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//компоненты Bootstrap
import {Button} from 'reactstrap';


//Главный компонет
class App extends Component{
    render(){
        const {color} = this.props;
        return(
            <div>
                Проверка
                <Button color="danger">Danger</Button>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));