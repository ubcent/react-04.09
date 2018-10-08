//импорт React
import React, { PureComponent } from 'react';

import Messages from 'components/MessageWindow/Messages';

export default class MessagesContainer extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            comments: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        });
    }
    render() {
        const { isLoading, comments } = this.state;
        return(
            <Messages isLoading={isLoading} comments={comments} />
        );
        
    }
}