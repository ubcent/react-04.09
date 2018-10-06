import './LineCaption.css';

import React, { PureComponent } from 'react';

export default class LineCaption extends PureComponent{
    constructor(props) {
        super(props);
    }

    render(){
        const { name } = this.props;

        return(
           <div className = "line-caption-block">
               <span className = "line-caption-block__text">{name}</span>
           </div>
        );
    }
}