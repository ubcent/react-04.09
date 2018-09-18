import './Footer.css'

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <p className="py-2 text-center text-light">Copyright © Your Website 2018</p>
            </footer>
        )
    }
}