import './CommentPage.css'

import React, { PureComponent } from 'react';

import Sidebar from 'components/Sidebar';
import Comments from 'components/Comments';

export default class CommentPage extends PureComponent {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        comments: [
            {
                author: {
                    name: 'Commenter Name',
                    href: '#',
                },
                text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
                metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
                vulputate fringilla. Donec lacinia congue felis in faucibus.`,
                blog: {
                    name: 'Some Blog',
                    href: '#',
                },
            },
            {
                author: {
                    name: 'Commenter Name',
                    href: '#',
                },
                text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
                metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
                vulputate fringilla. Donec lacinia congue felis in faucibus.`,
                blog: {
                    name: 'Some Blog',
                    href: '#',
                },
            },
            {
                author: {
                    name: 'Commenter Name',
                    href: '#',
                },
                text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
                metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
                vulputate fringilla. Donec lacinia congue felis in faucibus.`,
                blog: {
                    name: 'Some Blog',
                    href: '#',
                },
            },
            {
                author: {
                    name: 'Commenter Name',
                    href: '#',
                },
                text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
                metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
                vulputate fringilla. Donec lacinia congue felis in faucibus.`,
                blog: {
                    name: 'Some Blog',
                    href: '#',
                },
            },
        
        ],
        categories: [
            {
                href: '#',
                title: 'Front',
            },
            {
                href: '#',
                title: 'Back',
            },
            {
                href: '#',
                title: 'Humor',
            },
        ],
        side: {
            title: 'Side',
            content: 'Side content',
        },
    }

    render() {
        const { comments, categories, side } = this.props;
        return <div>
            <div className='container'>

                <div className='row'>
                    <div className='col-md-8'>

                        <Comments comments={comments} />
                    </div>
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>)
        </div>
    }
}

