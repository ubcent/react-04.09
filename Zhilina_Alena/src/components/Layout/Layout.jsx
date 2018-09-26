import './Layout.css'

import React, { PureComponent } from 'react';

export default class Layout extends PureComponent{
    render(){
        const { children } = this.props;

        return(
            <div className="wrap">
                {children}
            </div>
        )
    }
}