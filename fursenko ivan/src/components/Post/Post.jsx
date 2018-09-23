import './Post.css';

import React, {
    PureComponent,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Post extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            commentsHidden: true,
        };
    }
    
    showComments = () => {
        this.setState({
            commentsHidden: false,
        })
    }
    
    hideComments = () => {
        this.setState({
            commentsHidden: true,
        })
    }
    
    render() {
        const contentClasses = classNames('post');
        const { data, comments } = this.props;
        return <Fragment>
                  {
                    this.state.commentsHidden == true ? <div onClick={this.showComments} className={contentClasses}>
                       <div>
                           <h2>
                                {data.head}
                            </h2>
                        </div>
                        <p>
                            {data.body}
                        </p>
                        <small>by {data.author}</small>
                    </div>:
                    <div onClick={this.hideComments} className={contentClasses}>
                       {comments ? comments.reverse().map((comment, index) => (<div key={index}>{comment}</div>)) : <span>No comments!</span>}
                    </div>
                }
            </Fragment>
    }
}