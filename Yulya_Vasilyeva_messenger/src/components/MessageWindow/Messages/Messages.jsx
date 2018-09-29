//импортируем пользовательские стили
import './Messages.scss';

//импорт React
import React, { PureComponent } from 'react';

export default class Messages extends PureComponent {
    render() {
        const { isLoading, comments } = this.props;

        if(isLoading){
            return <p className="loading-data">Loading ...</p>
        }
        return (
            <div className="user-messages">
                {/* {comments.map((item, indx) => //генерируем сообщения из JSON
                      <div key={indx} className={`msg-${item.user}`}>{item.message}</div>      
                )} */}
            </div>
        );
    }
}