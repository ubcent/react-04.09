import React, { Component } from 'react';

import Categories from 'components/Categories';
import Sidebar from '../Sidebar/Sidebar';
import BlogPost from '../BlogPost/BlogPost';

// Компонент принимает объект со свойствами:
// blogposts - массив объектов постов
// content - основной контент
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
    }

    render() {
        const { heading, secondary, blogposts, categories, side } = this.props;
        const list = blogposts.map( (item) => {
            const { images, title, subtitle, content, author, href, date } = item;
            return <BlogPost key={date} images={images} title={title} subtitle={subtitle} content={content} author={author} href={href} date={date} />
        })
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
                            <li className='page-item disabled'>
                                <a className='page-link'
                                    href='#'>Newer →</a>
                            </li>
                        </ul>

                    </div>

                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar />

                </div>

            </div>)
    }
}