/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './categories.scss';

/*import libs*/
import  React, {Component} from 'react';
import  PropTypes from 'prop-types';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/

 /**
  * @brief  Отрисовка и логика поведения меню.
  * @param  categories - массив категорий
  * @retval  Отрисованная панель выбора категорий
  */
export default class NavCategories extends Component{
    constructor(props){
        super(props);
        this.state = {
            active : 0,
        }
    }   
   
    static propertyTypes = {
        categories: PropTypes.array,
    }

    static defaultProps = {
        categories: [],
    }
    /*При нажатии на определенную категорию, данная категория становится активной*/
    onClick = (event) => {
        this.setState({
            active : event.target.parentNode.value
        });
    }

    render(){
        const {categories} = this.props;

        return (
            <nav className="categoties">
                <ul className="nav nav-pills">
                    {categories.map((text, index) => {
                        return <li className={"nav-item"} value={index} key={index}><a className={"nav-link "+ (index === this.state.active ? 'active': '')} href="#" onClick = {this.onClick}>{text}</a></li>;
                    })}
              </ul>
          </nav>
        )
    }
}