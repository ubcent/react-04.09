import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';

const blogPost = <Fragment>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque
    laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus,
    voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius
        illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

    <blockquote className="blockquote">
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">Someone famous in
            <cite title="Source Title">Source Title</cite>
        </footer>
    </blockquote>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam
        sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
</Fragment>;
const mySite = {
    header: {
        brand: {
            title: 'MyBlog',
            href: '#',
        },
        items: [
            {
                title: 'Home',
                href: '#'
            },
            {
                title: 'Features',
                href: '#'
            },
            {
                title: 'Contacts',
                href: '#'
            }
        ]
    },
    main: {
        heading: 'Page Heading',
        secondary: 'Secondary Text',
        blogposts: [
            {
                images: [],
                title: 'Post Title',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
                '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
                '                    quis!',
                content: blogPost,
                author: 'Anonim',
                href: '#',
                date: '04/01/14',
            },
            {
                images: [],
                title: 'Post Title',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
                '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
                '                    quis!',
                content: blogPost,
                author: 'Anonim',
                href: '#',
                date: '01/01/14',
            },
            {
                images: [],
                title: 'Post Title',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
                '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
                '                    quis!',
                content: blogPost,
                author: 'Anonim',
                href: '#',
                date: '02/01/14',
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
    },

};

class Layout extends Component {
    render(){
        const { header, main } = this.props;
        return <div>
            <Header brand={header.brand} items={header.items}/>
            <Main heading={main.heading} secondary={main.secondary} side={main.side} categories={main.categories} blogposts={main.blogposts}/>
            <Footer/>
        </div>
    }
}

ReactDom.render(<Layout header={ mySite.header} main={mySite.main} />, document.getElementById('root'));