import './UserPreview.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class UserPreview extends PureComponent{
    constructor(props){
        super(props);
    }

    static defaultProps = {
        name: 'blogger',
        href: '#',
    };

    static propTypes = {
        name: PropTypes.string,
        href: PropTypes.string,
    };

    render(){
        const { name, href } = this.props;
        return <p>
            {name} - blogger. Go to full<a href={href}>-></a>
        </p>
    }
}