import './Blog.css'

import React, { PureComponent } from 'react';

import Main from 'components/Main';
import Sidebar from 'components/Sidebar';

export default class Blog extends PureComponent {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        main:{
            heading: 'Page Heading',
        secondary: 'Secondary Text',
        blogposts: [
            {
                title: 'Post Title',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
                '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
                '                    quis!',
                author: 'Anonim',
                href: '#',
                date: '04/01/14',
            },
            {
                title: 'Post Title',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
                '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
                '                    quis!',
                author: 'Anonim',
                href: '#',
                date: '01/01/14',
            },
            {
                title: 'Post Title',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
                '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
                '                    quis!',
                author: 'Anonim',
                href: '#',
                date: '02/01/14',
            },

        ]
        },
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
        const { main, categories, side } = this.props;
        console.log(main);
        return <div>
            <div className='container'>

                <div className='row'>
                    {/*<!-- Blog Entries Column -->*/}
                    <Main heading={main.heading} secondary={main.secondary} blogposts={main.blogposts} />
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>)
        </div>
    }
}
