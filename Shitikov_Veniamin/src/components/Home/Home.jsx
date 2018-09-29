import './Home.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BlogPost from '../BlogPost';

export default class Home extends PureComponent {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        heading: '',
        secondary: '', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium cumque delectus eaque eum illo laudantium magnam magni quam quia quo, temporibus ullam vel. Explicabo laudantium quia reprehenderit? Nostrum, quis.',
    };

    static propTypes = {
        heading: PropTypes.string,
        secondary: PropTypes.string,
        content: PropTypes.any,
    };

    render() {
        const { heading, secondary, content } = this.props;
        return (
            <div className='col-md-8'>

                        <h1 className='my-4'>{heading}
                            <small>{secondary}</small>
                        </h1>

                        {/*<!-- Blog Post -->*/}
                        {content}


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