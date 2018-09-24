//импортируем пользовательские стили
import './Submenu.scss';

//импортируем React
import React, { PureComponent } from 'react';
//импорт компонентов Bootstrap для отрисовки бокового меню
import { 
    Nav, 
    NavItem, 
    NavLink} from 'reactstrap';

//компонент для бокового меню на странице
export default class Submenu extends PureComponent{
    render(){
        const { submenu } = this.props;
        return(
            <div className="submenu">
                <h4>Дополнительно</h4>
                <Nav vertical="true">
                    {submenu.map( (item, indx)=>
                            <NavItem key={`submenu${indx}`}>
                                <NavLink className="submenu-link" href={item.link}>{item.title}</NavLink>
                            </NavItem>
                        )} 
                </Nav>
            </div>
        );
    }
}