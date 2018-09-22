import './Main.css';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import BlogPost from '../BlogPost';

export default class Main extends PureComponent {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        heading: '',
        secondary: '',
        blogposts: [],
    };

    static propTypes = {
        heading: PropTypes.string,
        secondary: PropTypes.string,
        blogposts: PropTypes.array,
    };

    render() {
        const {heading, secondary, blogposts} = this.props;
        const list = blogposts.map((item) => {
            const {title, subtitle, href} = item;
            return <BlogPost key={title} title={title} subtitle={subtitle} href={href}/>
        });
        return (
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
            </div>)
    }
}