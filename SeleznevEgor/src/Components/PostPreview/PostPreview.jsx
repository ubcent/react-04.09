import './PostPreview.scss';
import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';


export default class PostPreview extends PureComponent {
    render() {
        return (
            <div className="col-md-6 small-preview">
                <img className="preview-img" src="content/Post1.jpg" alt="post preview"/>
                <span className="category">lifestyle</span>
                <h3>More than just a music frstival</h3>
                <p className="preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid, animi atque consequuntur dolore doloribus error excepturi incidunt, nam neque nostrum, obcaecati placeat quasi quidem? Distinctio est odio voluptate. Aspernatur commodi consectetur cumque iusto labore nulla numquam veritatis vitae!</p>
                <Link to="/blog" className="article-link">read more</Link>
            </div>
        );
    }
}
