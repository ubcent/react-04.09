/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './header.scss';

/*import libs*/
import  React, {Component} from 'react';
import  PropTypes from 'prop-types';

import Logo from 'components/Logo';
import UserNotLogin from 'components/UserNotLogin/';
import UserIsLogin from 'components/UserIsLogin/';
import DecorativeLine from 'components/DecorativeLine';
import Menu from 'components/Menu';


export default class HeaderContainer extends Component{
    
    static propTypes = {
        active: PropTypes.oneOf(['home', 'blog', 'comments', 'users']).isRequired,
        user: PropTypes.object,
        loginActive: PropTypes.func.isRequired,
        menuChange: PropTypes.func.isRequired,
    };
  
    render(){
        const {user, loginActive, active, menuChange,} = this.props;
        
        return (
            <header className="page-header ">
                <DecorativeLine />
                <div className="container header-panel">
                    <div className="row align-items-center" >
                        <Logo />
                        <Menu active = {active} navClick={menuChange}/>
                        <div className="col-md-2 user">
                            {user.logined ? <UserIsLogin user={user}/> :<UserNotLogin onSend={loginActive}/>}
                        </div>
                    </div>
                </div>
            
            
            </header>
        )
    }
}