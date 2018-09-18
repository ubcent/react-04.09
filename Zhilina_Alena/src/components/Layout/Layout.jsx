import './Layout.css'

import React, { Component } from 'react';
import classNames from 'classnames';

import Header from 'components/Header';
import MainPage from 'components/MainPage';
import Footer from 'components/Footer';

export default class Layout extends Component{

    render(){
        const containerClasses = classNames('container');

        return(
            <div className = {containerClasses}>
                <Header />
                <MainPage>
                    Статьи
                </MainPage>
                <Footer />
            </div>
        );
    }
}