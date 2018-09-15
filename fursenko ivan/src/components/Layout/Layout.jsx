import './Layout.css';

import React, {
    Component,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Navigation from 'components/Navigation';
import Main from 'components/Main';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class Layout extends Component {    
    render() {
        const layoutClasses = classNames('container');
        
        return <div className={layoutClasses}>
            <Header>
            
            </Header>
            <div className="wrapper">
                <Navigation>
                    
                </Navigation>
                <Main>
                
                </Main>
            </div>
            <Footer>
                
            </Footer>
        </div>
    }
}
