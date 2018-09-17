/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './Footer.scss';

/*import libs*/
import  React, {Component} from 'react';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/

 /**
  * @brief  Отрисовка и логика поведения меню.
  * @param  categories - массив категорий
  * @retval  Отрисованная панель выбора категорий
  */
export default class Footer extends Component{

    render(){
        return (
            <footer className="page-footer row justify-content-around">
                <p className="col-5"><strong>&copy;</strong>All rights reserved</p>
            </footer>
        )
    }
}