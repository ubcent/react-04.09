import './Welcome.css'

import React, { PureComponent} from 'react';

import reactImg from 'images/react.png';

export default class Welcome extends PureComponent{
    render(){
        return(
            <div className="welcome-wrap">
                <img className="welcome-wrap__img" src={ reactImg } alt=""/>
            </div>
        )
    }
}