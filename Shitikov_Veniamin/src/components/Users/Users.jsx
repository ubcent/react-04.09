import './Users.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import UserPreview from 'components/UserPreview';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';


export default class Users extends PureComponent{
    constructor(props){
        super(props);
    }


    render(){
        const { header, users, categories, side } = this.props;
        const list = users.map( (item, index) => {
            const { name, href } = item;
            return <UserPreview key={index} href={href} name={name}/>
        });

        return <div>
            <Header brand={header.brand} items={header.items} handler={header.handler} active={3}/>
            <div className='container'>
                <div className='row'>
                    {/*<!-- Blog Entries Column -->*/}
                    <div className='col-md-8'>
                        <h1 className='my-4'>Users</h1>
                        {list}
                    </div>
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>
            <Footer />
        </div>
    }
}
