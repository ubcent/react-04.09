/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './Footer.scss';

/*import libs*/
import  React, {Component} from 'react';

/********************************************************************
 * Code                                                             *
 ********************************************************************/

 /**
  * @brief  Отрисовка footer .
  * @retval  Отрисованная footer
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