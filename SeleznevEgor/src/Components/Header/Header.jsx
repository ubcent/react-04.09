/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './header.scss';

/*import libs*/
import  React, {Component} from 'react';
import  PropTypes from 'prop-types';

/*User input*/
import NavCategories from 'components/categories/'

/********************************************************************
 * Code                                                             *
 ********************************************************************/

 /**
  * @brief  Отрисовака header.
  *******************************************************************
  *      *                                         *  social_links  *
  * logo *      Приветственное сообщение           * ****************
  *      *                                         * User login     *
  *******************************************************************
  *                  nav bar                                        *
  *******************************************************************
  * Приветственное сообщение и social_links отрисовываются только для
  * главной страницы. 
  * @param  categories - массив категорий
  * @param  isMain - bool значение является страница главной страницей
  * приложения
  * @retval  Отрисованный header
  */
export default class Header extends Component{
    static propertyTypes = {
        isMain: PropTypes.bool,
    };

    static defaultProps = {
        isMain: false, 
    };

    render(){
        const {categories, isMain} = this.props;
        const isMainClass = isMain ? '':' hidden';

        return (
            <header className="container page-header ">
                <div className="row justify-content-between">
                    <div className="col-2 logo" >
                        <a href="index.html">
                            <img src="image/logo.png" alt="Blog" className="logo-image"/>
                        </a>
                    </div>
                    <div className={ "col greating" + isMainClass}>
                        <p className="header-greating"><span>добро пожаловать в </span></p>
                        <h1>Блог</h1>
                    </div>
                    <div className="col-3 user-and-social-wraper align-self-center" >
                        <div className={"social" + isMainClass}>
                            <ul>
                                <li className="social-link"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="social-link"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="social-link"><a href="#"><i className="fa fa-vk"></i></a></li>
                            </ul>
                        </div>
                        <div className="user">
                            <p className="user-not-logged">
                                <span className="user-auth" id="login-link">Войдите</span> или 
                                <span className="user-auth" id="login-link"> Зарегистрируйтесь</span>
                            </p>
                        </div>
                    </div>
                </div>
                <NavCategories categories = {categories} />
            </header>
        )
    }
}