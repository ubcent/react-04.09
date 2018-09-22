/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './header.scss';

/*import libs*/
import  React, {Component} from 'react';
import  PropTypes from 'prop-types';

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
  * Приветственное сообщение и social_links отрисовываются только для
  * главной страницы. 
  * @param  isMain - bool значение является страница главной страницей
  * приложения
  * @retval  Отрисованный header
  */
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            login : false,
        };
    }

    static propertyTypes = {
        isMain: PropTypes.bool,
    };

    static defaultProps = {
        isMain: false, 
    };
    /*На данный момент делает пользователя зарегистрированным, без какой-либо обработки*/
    loginClicked = () =>{
         this.setState({
             login: true,
         });
     };

    /*Возвращает в зависимости от состояния пользователя предложение зарегистрироваться, или аватар + логин*/
    getUserDisplay(){
        if (this.state.login){
            return (
                <div className={"user-logged"}>
                    <div className="userpic"></div>
                    <div className="user-greating">
                        <p>Приветсвуем вас <br/> <span>Username</span></p>
                    </div>
                </div>
            );
        } else {
            return(
                <p className="user-not-logged">
                    <span className="user-auth" id="login-link" onClick={this.loginClicked}>Войдите</span> или
                    <span className="user-auth" id="reg-link"> Зарегистрируйтесь</span>
                </p>
            );
        }
    }

    render(){
        const {isMain} = this.props;
        const isMainClass = isMain ? '':' hidden';
        const userLogin =  this.getUserDisplay();

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
                            {userLogin}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}