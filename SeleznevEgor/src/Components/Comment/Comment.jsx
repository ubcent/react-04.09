import './Comment.scss';

import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

export default class Comment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className=" row justify-content-center">
                <div className="col-md-8 comment-in-list">
                    <div className="userpic">
                        <Link to="/users"><img src="content/avatar.png" alt="username"/></Link>
                        
                    </div>
                    <div className="comment-body">
                        <Link className="user-link" to="/users">userName</Link>
                        <span className="time">8 minutes ago</span>
                        <p className="comment-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque dolorum esse, facilis fuga inventore ipsum libero, molestias perferendis placeat quaerat quo recusandae tenetur! Delectus esse impedit magni nesciunt nihil non quidem? Adipisci dolor incidunt laboriosam, odit quia recusandae reiciendis reprehenderit unde. Accusamus aliquam asperiores autem, cum deserunt laborum laudantium molestiae, nemo, nihil numquam odio possimus quam quis repudiandae sequi?
                        </p>
                        <Link to="/blog" className="topik-link">Music-forever</Link>
                    </div>
                   
                </div>
            </div>
        );
    }
}
