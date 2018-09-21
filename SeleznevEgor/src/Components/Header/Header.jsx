/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './header.scss';

/*import libs*/
import  React, {Component} from 'react';
import  PropTypes from 'prop-types';
import 'bootstrap/modal';
import $ from 'jquery';

import UserNotLogin from 'components/UserNotLogin/';
import UserIsLogin from 'components/UserIsLogin/';


export default class Header extends Component{

    static propTypes = {
        active: PropTypes.oneOf(['home', 'blog', 'comments', 'users']).isRequired,
        user: PropTypes.object,
        loginActive: PropTypes.func.isRequired,
        menuChange: PropTypes.func.isRequired,
    };

    navClicked =(event)=>{
        this.props.menuChange(event.currentTarget.id);
    };

    render(){
        const {user, loginActive, active} = this.props;

        return (
            <header className="page-header ">
                <div className="upper-line"></div>
                <div className="container header-panel">
                    <div className="row align-items-center" >
                        <div className="col-md-2 logo">
                            <a href="index.html"><img src="image/logo.svg" alt="Блог"/>Блог</a>
                        </div>
                        <nav className="col main-menu">
                            <ul>
                                <li id={'home'} className={'home' === active ? "active":''} onClick={this.navClicked}><i className="fa fa-home"></i>Home</li>
                                <li id={'blog'} className={'blog' === active ? "active":''} onClick={this.navClicked}><i className="fa fa-book"></i>Blog</li>
                                <li id={'comments'} className={'comments' === active ? "active":''} onClick={this.navClicked}><i className="fa fa-comments-o"></i>Comments</li>
                                <li id={'users'} className={'users' === active ? "active":''} onClick={this.navClicked}><i className="fa fa-users"></i>Users</li>
                            </ul>
                        </nav>
                        <div className="col-md-2 user">
                            {user.logined ? <UserIsLogin user={user}/> :<UserNotLogin onSend={loginActive}/>}
                        </div>
                    </div>
                </div>


            </header>
        )
    }
}