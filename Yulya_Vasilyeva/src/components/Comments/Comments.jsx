import './Comments.scss';

//компоненты React
import React, { PureComponent, Fragment } from 'react';
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap';

export default class Comments extends PureComponent {
    render() {
        const { comments } = this.props;
        return (
            <Fragment>
                <h1>Последние комментарии</h1>
                <ListGroup>
                {comments.map((item, indx) =>
                        <ListGroupItem key={indx} className="comment-item">
                            <ListGroupItemHeading>Статья: </ListGroupItemHeading>
                            <ListGroupItemText>
                                {item.text}
                                <span className="comment-info">Пользователь: <a href="#">{item.name}</a> / Дата: {item.data}</span>
                            </ListGroupItemText>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </Fragment>
        );
    }
}