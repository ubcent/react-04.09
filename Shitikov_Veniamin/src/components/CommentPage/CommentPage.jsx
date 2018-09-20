import './CommentPage.css'

import React, { Component, Fragment } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Comments from '../Comments/Comments';



export default class CommentPage extends Component {
    render() {
        const { header, comments, categories, side } = this.props;
        return <div>
            <Header brand={header.brand} items={header.items} active={2} />
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

