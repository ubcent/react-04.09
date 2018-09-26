import './Main.css'

import React, { PureComponent} from 'react';

export default class Menu extends PureComponent{
    render(){
        const {children} = this.props;

        return(
            <div className="main-content">{ children }</div>
        )
    }
}