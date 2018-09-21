//импортируем пользовательские стили
import './Messages.scss';

//импорт React
import React, { PureComponent } from 'react';

export default class Messages extends PureComponent {
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
        const url = 'http://127.0.0.1:3000/chat';
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                comments: data,
                isLoading: false,
            }); 
        });
        
    }
    render() {
        const { isLoading, comments } = this.state;

        if(isLoading){
            return <p className="loading-data">Loading ...</p>
        }
        return (
            <div className="user-messages">
                {comments.map((item, indx) => //генерируем сообщения из JSON
                      <div key={indx} className={`msg-${item.user}`}>{item.message}</div>      
                )}
            </div>
        );
    }
}