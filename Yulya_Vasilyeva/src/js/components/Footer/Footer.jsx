//импорт пользовательских стилей для редактирования футера
import './Footer.css';

//импорт React
import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
           <footer>
              Статьи, переводы изображения и торговые марки принадлежат их авторам и владельцам. Copyright &copy; 3dblog.by, 2002-2018. 
           </footer>
        );
    }
}