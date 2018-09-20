import './Login.css';

import React, {
    Component,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Login extends Component {
    render() {
        const loginClasses = classNames('login-btn');
        
        return <div className={loginClasses}>
                Login!
            </div>
    }
}
