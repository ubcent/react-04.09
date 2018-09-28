import React, { PureComponent } from 'react';

import CompanionItem from 'components/CompanionItem';

export default class CompanionItemContainer extends PureComponent {

    render() {    
        const { text, id, activeId } = this.props;   
        return (  
            <CompanionItem 
            text={text} 
            id={id} 
            activeId={activeId} />       
        );
    }
}
