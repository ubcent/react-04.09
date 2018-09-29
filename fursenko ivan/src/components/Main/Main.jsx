import './Main.css';

import React, {
    Component,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import content from 'data/lorem.txt';

export default class Main extends Component {
    render() {
        const contentClasses = classNames('content');
        
        return <div className={contentClasses}>
                {content}
            </div>
    }
}
