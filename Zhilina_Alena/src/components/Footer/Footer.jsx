import './Footer.css'

import React, { PureComponent} from 'react';

export default class Footer extends PureComponent{
    render(){
        return(
            <footer className="footer">
                <p className="footer__text">ALL RIGHTS RESERVED.</p>
            </footer>
        )
    }
}