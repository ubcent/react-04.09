import './MainPage.css'

import React, { Component, Fragment } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';



export default class MainPage extends Component {
    render() {
        const { header, main, categories, side } = this.props;
        return <div>
            <Header brand={header.brand} items={header.items} active={0}/>
            <div className='container'>

                <div className='row'>
                    {/*<!-- Blog Entries Column -->*/}
                    <Main heading={main.heading} secondary={main.secondary} blogposts={main.blogposts} />
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>)           
             <Footer />
        </div>
    }
}

