/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './header.scss';

/*import libs*/
import  React, {Component} from 'react';
import {connect } from 'react-redux';

/*import user code*/
/*actions*/
import {userTryLogin} from '../actions/users';
/*Components*/
import Logo from 'components/Logo';
import UserNotLogin from 'components/UserNotLogin/';
import UserIsLogin from 'components/UserIsLogin/';
import DecorativeLine from 'components/DecorativeLine';
import Menu from 'components/Menu';

class HeaderContainer extends Component{
    
    loginClicked = (username) =>{
        const {userTryLogin} = this.props;
        userTryLogin(username);
    };
    
    render(){
        const {user} = this.props;
        return (
            <header className="page-header ">
                <DecorativeLine />
                <div className="container header-panel">
                    <div className="row align-items-center" >
                        <Logo />
                        <Menu/>
                        <div className="col-md-2 user">
                            {user.logined ? <UserIsLogin user={user}/> :<UserNotLogin onSend={this.loginClicked}/>}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.users.useractive,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        userTryLogin: (data) => dispatch(userTryLogin(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(HeaderContainer);