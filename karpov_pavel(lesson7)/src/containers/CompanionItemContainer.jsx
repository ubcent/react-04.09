import React, { PureComponent } from 'react';

import CompanionItem from 'components/CompanionItem';

export default class CompanionItemContainer extends PureComponent {

    render() {    
        const { text, id, location } = this.props;   
        return (  
            <CompanionItem 
            text={text} 
            id={id}
            location={location} />       
        );
    }
}