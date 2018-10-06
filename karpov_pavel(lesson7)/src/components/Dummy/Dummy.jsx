import './Dummy.css';

import React, { PureComponent } from 'react';

export default class Dummy extends PureComponent {
    render() {       
        return (  
            <div className="dummy">To start dialog, please choose companinon from compaions list... <br/>
            .. you can add more companinon via file db.json </div>       
        );
    }
}
