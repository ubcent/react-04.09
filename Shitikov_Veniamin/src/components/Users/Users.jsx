import './Users.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import UserPreview from 'components/UserPreview';
import Sidebar from 'components/Sidebar';


export default class Users extends PureComponent{
    constructor(props){
        super(props);
    }
    
    static defaultProps = {
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
    }

    render(){
        const { users, categories, side } = this.props;
        const list = users.map( (item, index) => {
            const { name, href } = item;
            return <UserPreview key={index} href={href} name={name}/>
        });

        return <div>
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
        </div>
    }
}
