import './Comments.scss';

//импорт React
import React, { PureComponent, Fragment } from 'react';
import { //импорт формы из Bootstrap
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
} from 'reactstrap';

export default class Post extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            postId: 0,
            comments: [],//массив хранит комментарии к посту
        };
    }

    //получаем комментарии из JSON
    componentDidMount() {
        const { postId } = this.props; //получаем id поста
        //выбираем комментарии для определенного поста
        const url = `http://127.0.0.1:3000/comments?postId=${postId}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    comments: data,
                });
            });
    }
    render() {
        const { comments } = this.state;
        //получаем 
        return (
            <div className="comments">
                <h3>Комментарии к записи</h3>
                <ListGroup>
                    { comments.length ?
                        comments.map((item, indx) =>    
                        <ListGroupItem key={`commentid-${indx}`} className="comment-item">
                            <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
                            <ListGroupItemText>
                                {item.text}
                                </ListGroupItemText>
                        </ListGroupItem>):
                        <ListGroupItem className="comment-item">К статье пока нет комментариев</ListGroupItem>
                    }
                </ListGroup>
            </div>
        );
    }
}