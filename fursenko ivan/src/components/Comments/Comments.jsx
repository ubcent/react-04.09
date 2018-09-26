import './Comments.css';

import React, {
    PureComponent,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Comments extends PureComponent {
    render() {
        const contentClasses = classNames('content');
        const content = 'Comments:';
        
        return <div className={contentClasses}>
                {content}
            </div>
    }
}
