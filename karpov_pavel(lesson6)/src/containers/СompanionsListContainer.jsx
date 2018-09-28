import React, { PureComponent } from 'react';

import СompanionsList from 'components/СompanionsList';
import CompanionItem from 'containers/CompanionItemContainer';

export default class СompanionsListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }  

    componentDidMount() {
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(json => this.setState(
            { 
                posts: json,
            })
        );       
    } 

    render() {     
        const { posts } = this.state; 
        const { activeId } = this.props;
      
        const companionsRend = posts.map((companion, idx) => {
            return (<CompanionItem key={idx} text={companion.name} id={companion.id} activeId={activeId} />)         
        });    

        return (  
            <СompanionsList companionsRend={companionsRend} />       
        );
    }
}
