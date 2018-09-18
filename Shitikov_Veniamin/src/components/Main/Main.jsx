import './Main.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import BlogPost from '../BlogPost';

export default class Main extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        heading: '',
        secondary: '', 
        blogposts: [], 
        categories: [], 
        side: {},
    };

    static propTypes = {
        heading: PropTypes.string,
        secondary: PropTypes.string,
        blogposts: PropTypes.array,
        categories: PropTypes.array,
        side: PropTypes.object,
    };

    render() {
        const { heading, secondary, blogposts, categories, side } = this.props;
        const list = blogposts.map( (item) => {
            const { images, title, subtitle, content, author, href, date } = item;
            return <BlogPost key={date} images={images} title={title} subtitle={subtitle} content={content} author={author} href={href} date={date} />
        });
        return (
            <div className='container'>

                <div className='row'>

                    {/*<!-- Blog Entries Column -->*/}
                    <div className='col-md-8'>

                        <h1 className='my-4'>{heading}
                            <small>{secondary}</small>
                        </h1>

                        {/*<!-- Blog Post -->*/}
                        {list}


                        {/*<!-- Pagination -->*/}
                        <ul className='pagination justify-content-center mb-4'>
                            <li className='page-item'>
                                <a className='page-link'
                                    href='#'>← Older</a>
                            </li>
                            <li className='page-item'>
                                <a className='page-link'
                                    href='#'>Newer →</a>
                            </li>
                        </ul>

                    </div>

                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side}/>

                </div>

            </div>)
    }
}