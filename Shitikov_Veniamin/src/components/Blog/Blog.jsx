import './Blog.css'

import React, { PureComponent } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';

export default class Blog extends PureComponent {
    render() {
        const { header, main, categories, side } = this.props;
        console.log(main);
        return <div>
            <Header brand={header.brand} items={header.items} handler={header.handler} active={1}/>
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
