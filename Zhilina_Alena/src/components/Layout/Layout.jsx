import './Layout.css'

import React, { Component } from 'react';

export default class Layout extends Component{
    render(){
        const { children } = this.props;

        return(
            <div className="contaier">
                <div className="row">
                    { children }
                </div>
            </div>
        )
    }
}