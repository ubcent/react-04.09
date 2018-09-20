import './Header.css';

import React, {
    Component,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Login from 'components/Login';

export default class Header extends Component {
    render() {
        const headerClasses = classNames('header');
        
        return <div className={headerClasses}>
                Header!
                <Login></Login>
            </div>
    }
}
