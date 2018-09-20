import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import MainPage from 'components/MainPage';
import CommentPage from 'components/CommentPage';
import Blog from './components/Blog/Blog';

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
                title: 'Blog',
                href: '#'
            },
            {
                title: 'Comments',
                href: '#'
            },
            {
                title: 'Users',
                href: '#'
            },
        ]
    },
    main: {
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

        ],
        
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

};

const comments = [
    {
        author: {
            name: 'Commenter Name', 
            href: '#',}, 
        text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
        metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
        vulputate fringilla. Donec lacinia congue felis in faucibus.`,
        blog:{
            name: 'Some Blog', 
            href: '#',}, 
    },
    {
        author: {
            name: 'Commenter Name', 
            href: '#',}, 
        text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
        metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
        vulputate fringilla. Donec lacinia congue felis in faucibus.`,
        blog:{
            name: 'Some Blog', 
            href: '#',}, 
    },
    {
        author: {
            name: 'Commenter Name', 
            href: '#',}, 
        text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
        metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
        vulputate fringilla. Donec lacinia congue felis in faucibus.`,
        blog:{
            name: 'Some Blog', 
            href: '#',}, 
    },
    {
        author: {
            name: 'Commenter Name', 
            href: '#',}, 
        text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel 
        metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in 
        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 
        vulputate fringilla. Donec lacinia congue felis in faucibus.`,
        blog:{
            name: 'Some Blog', 
            href: '#',}, 
    },

];

class App extends Component {
    render(){
        return <div>
                       <Blog header={mySite.header} main={mySite.main} categories={mySite.categories} side={mySite.side} />

{/* <CommentPage comments={comments} header={mySite.header} categories={mySite.categories} side={mySite.side} /> */}
        </div>
    }
}

ReactDom.render(<App />, document.getElementById('root'));