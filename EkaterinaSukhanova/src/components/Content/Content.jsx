import './Content.css';

import React, {PureComponent} from 'react';
import {Button} from 'reactstrap';
import classNames from 'classnames';


export default class Content extends PureComponent {

    render(){
        const { posts, onLoadMore } = this.props;

        return(
            <main className='content'>
                {posts.map((post) =>
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p className='name-article'>by <a href='#'>{post.userId}</a></p>
                        <p>{post.body}</p>
                    </div>
                )}
                <Button outline color='primary' className='content-button' onClick={onLoadMore}>Load more</Button>
            </main>

        );
    }

}