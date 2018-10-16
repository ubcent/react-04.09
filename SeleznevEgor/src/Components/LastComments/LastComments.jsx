import './LastComments.scss';

import React, {PureComponent} from 'react';

import Comment from 'components/Comment/';

export default class LastComments extends PureComponent {

    render() {
        const {comments} = this.props;
        console.log(comments);
        return (
            <div className="LastComments container">
                {comments.comments.length ?
                    '' :
                    <p className={"No-comments"}>Комментарии отсутсвуют</p>
                }
                {comments.comments.map((item, index) => {
                    return <Comment comment={item}/>;
                })}
            </div>
        );
    }
}
