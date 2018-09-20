import './Blog.css'

import React, { Component, Fragment } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';



export default class Blog extends Component {
    render() {
        const { header, main, categories, side } = this.props;
        return <div>
            <Header brand={header.brand} items={header.items} active={1}/>
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





// const blogPost = <Fragment>
// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque
// laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus,
// voluptatibus.</p>

// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius
//     illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

// <blockquote className="blockquote">
//     <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//     <footer className="blockquote-footer">Someone famous in
//         <cite title="Source Title">Source Title</cite>
//     </footer>
// </blockquote>

// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam
//     sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
// </Fragment>;