import './СompanionsList.css';

import React, { PureComponent } from 'react';

export default class СompanionsList extends PureComponent {
 
    render() {      
        const { companionsRend } = this.props; 

        return (             
            <div className="companions-block">
                <ul className="companions-list">
                    {companionsRend}
                </ul>     
            </div>
        );
    }
}