import './Layout.css';

import React, {
    PureComponent,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Main from 'components/Main';
import Blog from 'components/Blog';
import Users from 'components/Users';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class Layout extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Main',
        };
    }

    getPage = (event) => {
        this.setState({
            page: event.target.name,
        });
    }

    render() {
        let page;
        const layoutClasses = classNames('container');
        const navLinkClasses = classNames('active');
        const pages = [
            'Main',
            'Blog',
            'Users',
        ];
        
        switch (this.state.page) {
            case 'Blog':
                page = < Blog / > ;
                break;
            case 'Users':
                page = < Users / > ;
                break;
            case 'Main':
            default:
                page = < Main / > ;
                break;
        }

        return <div className = {layoutClasses} >
                <Header />
                <div className = "wrapper" >
                   <div className="nav">
                       <ul>
                           {pages.map((item) => (<li key={item}><a onClick={this.getPage} name={item} className={item === this.state.page ? navLinkClasses : ""}>{item}</a></li>))}
                       </ul>
                   </div>
                    {page}
                </div> 
                <Footer >

                </Footer> 
            </div>
    }
}
