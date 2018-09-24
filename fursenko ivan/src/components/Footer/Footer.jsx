import './Footer.css';

import React, {
    Component,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render() {
        const footerClasses = classNames('footer');
        
        return <div className={footerClasses}>
                Footer!
            </div>
    }
}
