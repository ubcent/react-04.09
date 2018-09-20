//импортируем пользовательские стили
import './Submenu.scss';

//импортируем React
import React, { PureComponent } from 'react';
//импорт компонентов Bootstrap для отрисовки бокового меню
import { 
    Nav, 
    NavItem, 
    NavLink} from 'reactstrap';

//проверка свойств
import PropTypes from 'prop-types';

//компонент для бокового меню на странице
export default class Submenu extends PureComponent{
    static propTypes = {
        //пункты бокового меню должны быть строкой
        submenu: PropTypes.arrayOf(PropTypes.string),
    }
    render(){
        const { submenu } = this.props;
        return(
            <div className="submenu">
                <h4>Дополнительно</h4>
                <Nav vertical="true">
                    {submenu.map( (item, indx)=>{
                        return(
                            <NavItem key={`submenu${indx}`}>
                                <NavLink className="submenu-link" href="#">{item}</NavLink>
                            </NavItem>
                        );
                    })} 
                </Nav>
            </div>
        );
    }
}