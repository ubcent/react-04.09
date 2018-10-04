import React, { Component } from 'react';

import Chat from 'components/Chat';

export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            res: [],
         };
      }

    componentDidMount() {
        fetch('http://localhost:3001/profile')
        .then(response => response.json())
        .then(json => this.setState(
            { 
                res: json,
            })
        );       
    } 

    render() {  
        const { res } = this.state;    
        return (  
            <Chat res={res.name} />                   
        );
    }
}
