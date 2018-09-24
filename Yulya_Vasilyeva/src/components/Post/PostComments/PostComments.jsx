import './PostComments.scss';

//импорт React
import React, { PureComponent } from 'react';
import { //импорт формы из Bootstrap
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
} from 'reactstrap';

export default class PostComments extends PureComponent {
    render() {
        const { comments } = this.props;
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