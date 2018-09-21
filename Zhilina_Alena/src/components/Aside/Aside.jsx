import './Aside.css'

import React, { PureComponent} from 'react';

export default class Aside extends PureComponent{

    render(){
        console.log("render");
        const { children } = this.props;
        return(
            <div className="aside-content"> {children} </div>
        )
    }
}