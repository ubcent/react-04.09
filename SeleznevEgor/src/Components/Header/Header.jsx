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
                            <img src="image/logo.png" alt="Blog" class="logo-image"/>
                        </a>
                    </div>
                    <div className="col greating" >
                        <p class="header-greating"><span>добро пожаловать в </span></p>
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
                        <div class="user">
                            <p class="user-not-logged">
                                <span class="user-auth" id="login-link">Войдите</span> или 
                                <span class="user-auth" id="login-link"> Зарегистрируйтесь</span>
                            </p>
                        </div>
                    </div>
                </div>
                <nav class="categories">
                    <ul>
                    </ul>
                </nav>
            </header>

        )
    }
}