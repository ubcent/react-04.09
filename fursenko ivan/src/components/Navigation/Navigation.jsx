import './Navigation.css';

import React, {
    Component,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
    render() {
        const menuClasses = classNames('menu');
        
        return <div className={menuClasses}>
                Menu!
            </div>
    }
}
