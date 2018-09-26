/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './Footer.scss';

/*import libs*/
import  React, {Component} from 'react';
import DecorativeLine from 'components/DecorativeLine';

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
            <footer className="page-footer">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-3 copyright">
                            <p> &copy; All rights reserved </p>
                        </div>
                        <div className="col-md-3 social-links">
                            <ul>
                                <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-vk"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <DecorativeLine />
            </footer>
        )
    }
}