import './Comment.css';

import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

// Компонент принимает 
  //image - аватар автора, 
  //author - автор, 
  //text - сам комментарий,
export default class Comment extends PureComponent{
    constructor(props){
        super(props);

    }

    static defaultProps = {
        author: {name: '', href: '',}, 
        text: '',
        blog:{name: '', href: '',}, 
    };

    static propTypes = {
        author: PropTypes.shape({
            name: PropTypes.string, 
            href: PropTypes.string,
        }), 
        blog: PropTypes.shape({
            name: PropTypes.string, 
            href: PropTypes.string,
        }), 
        text: PropTypes.string,
    };

    render(){
        const { author, blog, text } = this.props;
        return <Fragment>
            <div className="media mb-4">
                <div className="media-body">
                    <h5 className="mt-0">
                        <a href={author.href}>{author.name}</a>
                    </h5>
                    {text}
                    <h5 className="mt-0">
                        <a href={blog.href}>{blog.name}</a>
                    </h5>
                    
                </div>
            </div>
        </Fragment>
    }
}


