import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/Sidebar';

export default class Users extends PureComponent{
    constructor(props){
        super(props);
    }
    
    static defaultProps = {
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
        const { categories, side } = this.props;

        return <div>
            <div className='container'>
                <div className='row'>
                    {/*<!-- Blog Entries Column -->*/}
                    <div className='col-md-8'>
                        <h1 className='my-4'>Page Not Found</h1>
                    </div>
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>
        </div>
    }
}
