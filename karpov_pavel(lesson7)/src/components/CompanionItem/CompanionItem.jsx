import './CompanionItem.css';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

export default class CompanionItem extends PureComponent {
 
    render() {
        const{ text, id, location } = this.props;
        const companionStyles = classNames('companions__item',  {
            'active': location === `/chat/${id}`,            
        });
          
        return (
            <li className={companionStyles}>
                <Link className="companions__link" to={`/chat/${id}`}>{text}</Link>
                <hr className="companions__hr" />
            </li>     
        )
    }
}

