import './Blogs.scss';

import React, {Component} from 'react';
import Pager from "components/Pager";
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

export default class Blogs extends Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      meta: PropTypes.string,
      body: PropTypes.string,
    })),
    pagerLinks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })),
  };
  
  static defaultProps = {
    blogs: [],
    pagerLinks: [],
  };
  
 
  render() {
    const {blogs, pagerLinks} = this.props;
    return (
        <div className="col-sm-8 blog-main">
          {blogs.map((blog) =>
            <div className="blog-post" key={blog.id}>
              <h2 className="blog-post-title">{Parser(blog.title)}</h2>
              <p className="blog-post-meta">{Parser(blog.meta)}</p>
              {Parser(blog.body)}
            </div>
          )}
          <Pager links={pagerLinks}/>
        </div>
    );
  }
}
