import React, { Component } from 'react';

import Chat from 'components/Chat';

export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            res: [],
            id: '',
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
    
    updateId = (value) => {
        this.setState({
            id: value,
        })        
    } 

    render() {  
        const { res, id } = this.state;    
        return (  
            <Chat res={res.name} onUpdateId={this.updateId} id={id} />                   
        );
    }
}
