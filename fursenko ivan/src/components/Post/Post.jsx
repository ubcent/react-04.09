import './Post.css';

import React, {
    Component,
    Fragment
} from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import routes from '../../routes';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsHidden: true,
            fullView: false,
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
        const isFullView = this.state
        
        return <div className={contentClasses}>
               {isFullView ? <Route path="/blog/post/:id" component={postFullView} /> :
                <Route render={({ history })=> (
                            <Fragment>
                                <div onClick={()=> {
                                    history.push('/blog/post/' + data.id);
                                    state: { fullView: true }
                                    }}
                                    >
                                    <div>
                                        <h2>{data.head}</h2>
                                        <small>click to full read!</small>
                                    </div>
                                </div>
                                <p>
                                    {data.body.substring(0, 100) + '...'}
                                </p>
                                <small>by {data.author}</small>
                            </Fragment>
                    )} />
               }
                </div>
    }
}