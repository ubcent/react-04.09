import './MainPage.css'

import React, { PureComponent, Fragment } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';

export default class MainPage extends PureComponent {
    render() {
        const { header, main, categories, side } = this.props;
        return <div>
            <Header brand={header.brand} items={header.items} handler={header.handler} active={0}/>
            <div className='container'>

                <div className='row'>
                    {/*<!-- Blog Entries Column -->*/}
                    <Home heading={main.heading} secondary={main.secondary} content={main.content} />
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>)           
             <Footer />
        </div>
    }
}

