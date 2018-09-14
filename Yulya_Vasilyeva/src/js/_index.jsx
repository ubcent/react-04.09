//стили

//компоненты React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//свои компоненты


//Главный компонет
class App extends Component{
    render(){
        return(
            <div>Проверка</div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));