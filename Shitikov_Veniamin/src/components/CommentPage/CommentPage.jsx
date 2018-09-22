import './CommentPage.css'

import React, { PureComponent, Fragment } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Comments from 'components/Comments';

export default class CommentPage extends PureComponent {
    render() {
        const { header, comments, categories, side } = this.props;
        return <div>
            <Header brand={header.brand} items={header.items} handler={header.handler} active={2} />
            <div className='container'>

                <div className='row'>
                    <div className='col-md-8'>

                        <Comments comments={comments} />
                    </div>
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>)
             <Footer />
        </div>
    }
}

