/********************************************************************
 * Includes                                                          *
 ********************************************************************/
import './header.scss';

import  React, {Component} from 'react';



/* Main code*/
export default class Header extends Component{
    
    render(){
        return (
            <header className="container page-header">
                <div className="row">
                    <div className="col-2 logo" >
                        <a href="index.html">
                            <img src="image/logo.png" alt="Blog" className="logo-image"/>
                        </a>
                    </div>
                    <div className="col greating" >
                        <p className="header-greating"><span>добро пожаловать в </span></p>
                        <h1>Блог</h1>
                    </div>
                    <div className="col-3 user-and-social-wraper" >
                        <div class="social">
                            <ul>
                                <li class="social-link"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li class="social-link"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li class="social-link"><a href="#"><i class="fa fa-vk"></i></a></li>
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
                <nav className="categoties">
                    
                        <ul className="nav nav-pills nav-fill justify-content-center">
                            {this.props.items.map((text, index) => {
                                const temp = (index === 0) ? "active" : "";
                               return <li className={"nav-item " } key={index}><a className={"nav-link "+ temp} href="#"> {text}</a></li>;
                            })}
                        </ul>
                    
                </nav>
            </header>

        )
    }
}