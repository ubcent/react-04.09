import './Aside.css'

import React, { Component } from 'react';

export default class Aside extends Component{
    render(){
        const { children } = this.props;

        return(
            <div className="aside">
                { children }
            </div>
        )
    }
}