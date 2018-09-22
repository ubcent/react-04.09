import './Main.css';

import React, {
    Component,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        const contentClasses = classNames('content');
        const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget massa orci. Maecenas eu dolor a neque molestie rhoncus ut molestie augue. Vivamus facilisis vel ex id feugiat. Mauris porta, sem ut malesuada vehicula, elit nisi tempor libero, eget vehicula mauris leo a leo. Mauris eget lectus vestibulum, vehicula justo vel, lacinia lectus. Donec et lacus mattis, hendrerit massa ac, ornare est. Fusce tristique molestie lorem, ac posuere augue egestas at. Integer vel mollis diam. Cras porttitor posuere purus, sit amet cursus massa imperdiet ut. Nam rutrum lorem at justo facilisis molestie. Nunc tempor id massa vel gravida. Nunc placerat malesuada orci, vel pulvinar diam maximus et.';
        
        return <div className={contentClasses}>
                {content}
            </div>
    }
}
