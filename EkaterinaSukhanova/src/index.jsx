import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Content from "components/Content/Content";

const articles = [];

const firstArticle = {
    title: 'Sample blog post',
    date: 'January 1, 2014',
    author: 'Mark',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto at, ' +
    'cupiditate dicta ducimus, eius illo laborum magnam nesciunt possimus quam soluta unde. ' +
    'Accusamus amet blanditiis ex laborum unde! Ab ad aliquam architecto aut cum deserunt dignissimos ' +
    'dolore dolores ea eaque eos et exercitationem, fugit hic ipsum labore laboriosam maiores, natus ' +
    'nesciunt odit optio placeat ratione sequi similique tempora tempore, voluptatum. Cum est ipsam modi, ' +
    'ratione repellat tempora! Eaque fuga, ipsum molestiae mollitia nemo nostrum quis quisquam saepe ' +
    'similique sunt. Amet consequuntur culpa delectus labore, molestias nihil, odit perspiciatis, quam ' +
    'reprehenderit sapiente similique totam velit. Aperiam debitis enim impedit.',
};

const secondArticle = {
    title: 'Another blog post',
    date: 'December 23, 2013',
    author: 'Jacob',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto at, ' +
    'cupiditate dicta ducimus, eius illo laborum magnam nesciunt possimus quam soluta unde. ' +
    'Accusamus amet blanditiis ex laborum unde! Ab ad aliquam architecto aut cum deserunt dignissimos ' +
    'dolore dolores ea eaque eos et exercitationem, fugit hic ipsum labore laboriosam maiores, natus ' +
    'nesciunt odit optio placeat ratione sequi similique tempora tempore, voluptatum. Cum est ipsam modi, ' +
    'ratione repellat tempora! Eaque fuga, ipsum molestiae mollitia nemo nostrum quis quisquam saepe ' +
    'similique sunt. Amet consequuntur culpa delectus labore, molestias nihil, odit perspiciatis, quam ' +
    'reprehenderit sapiente similique totam velit. Aperiam debitis enim impedit.',
};

articles.push(firstArticle, secondArticle);

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header size='big' />
                <Content articles={articles} />
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));
