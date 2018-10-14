import './CommentForm.scss';
import React, {PureComponent} from 'react';

export default class CommentForm extends PureComponent {
    sendComment = (event) =>{
        const {send} = this.props;
        const input = this.comment.value;
        this.comment.value='';
        send(input);
        event.preventDefault();
        };

    render() {
        const {send} = this.props;
        return (
            <div className="CommentForm container">
                <form action="#" method={"post"} className={"col-md-10"}>
                    <label htmlFor="newCommentForm"> Введите комментарий:</label><br/>
                    <textarea
                        name="comment"
                        id="newCommentForm"
                        ref={(input) => {this.comment = input}}></textarea><br/>
                    <input type="submit" value={"Отправить"} onClick={this.sendComment}/>
                </form>
            </div>
        );
    }
}
