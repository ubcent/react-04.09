import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from 'components/MainPage';
import CommentPage from 'components/CommentPage';
import Blog from './components/Blog/Blog';
import Users from './components/Users/Users';

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
        ],
    },
    blog: {
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
    users: [
        {
            name: 'blogger1',
            href: '#',
        },
        {
            name: 'blogger2',
            href: '#',
        },
        {
            name: 'blogger3',
            href: '#',
        },
        {
            name: 'blogger4',
            href: '#',
        },

    ],
    home: {
        heading: 'Page Heading',
        secondary: 'Secondary Text',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto blanditiis consequatur cum eos error harum inventore ipsam itaque laboriosam laborum minima molestiae molestias nemo officiis omnis provident qui, saepe suscipit tenetur, veniam voluptas? Atque optio placeat quis recusandae similique soluta tempora? Adipisci, aliquam amet atque aut autem consequuntur corporis cumque cupiditate dolor dolores eos explicabo facere fugit incidunt modi molestias natus non perferendis possimus quia quibusdam quisquam repudiandae, ullam voluptates voluptatum. Aperiam assumenda atque aut deserunt esse ipsum nam officiis quam! Accusantium aperiam, aspernatur atque corporis, eum ex harum labore, nostrum nulla numquam omnis provident quod ratione vel veniam voluptatem voluptatibus. A ad corporis dolores error ex excepturi expedita hic, illo minima, nisi, officia repellendus repudiandae sit. Beatae itaque laudantium magni, natus optio recusandae sed. Architecto atque beatae culpa distinctio dolore dolores ea eligendi ex illo ipsum, labore, laudantium magni molestiae necessitatibus nulla officia perferendis possimus provident quas qui quia quod repellat sequi ut voluptates. Aperiam asperiores dignissimos doloribus eius inventore quibusdam quis quod, sapiente sed unde. Ad aliquam fuga fugiat hic incidunt minima modi nesciunt odio perspiciatis quam qui repellat rerum sint, sunt voluptatem. Accusantium at atque, commodi debitis eos exercitationem ipsa ipsum itaque laborum molestias non, odit quidem reiciendis rem reprehenderit sunt tempora totam voluptas. Ad aliquid asperiores debitis dicta ex molestias, natus numquam officiis quae quia quis reprehenderit sed sint temporibus, voluptate. Ad alias aliquam debitis deleniti deserunt, distinctio doloremque earum eius eos excepturi, exercitationem fugit hic, nobis nostrum similique. Cumque deleniti deserunt inventore iure nam nesciunt, numquam, officiis provident quasi qui quidem quod quos recusandae sapiente sint, suscipit velit vitae voluptatum. Aperiam architecto cumque dolorem, magni obcaecati officia officiis quis sed. A accusamus aliquid deleniti dolore explicabo fuga, in, ipsum labore laudantium molestiae mollitia officia, porro quidem quis quo sit tempore tenetur voluptate.',

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

];

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '0',
        }
    }

    handleClick = (event) => {
        this.setState({ value: event.target.name.toString()});
    };

    render() {
            <MainPage header={mySite.header} main={mySite.home} categories={mySite.categories} side={mySite.side}/>;
                break;
            case '1': Site = <Blog header={mySite.header} main={mySite.blog} categories={mySite.categories} side={mySite.side} />;
                break;
            case '2': Site = <CommentPage comments={comments} header={mySite.header} categories={mySite.categories} side={mySite.side} />;
                break;
            case '3': Site = <Users header={mySite.header} users={mySite.users} categories={mySite.categories} side={mySite.side}/>

        }
        return <div>
            {Site}
        </div>
    }
}

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);