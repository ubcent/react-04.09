import './Layout.css';

import React, {Component, Fragment} from 'react';

import Header from 'components/Header';
import BlogPosts from 'components/BlogPosts';
import Footer from 'components/Footer';
import WelcomeModal from 'components/WelcomeModal';

export default class Layout extends Component {

  render() {

    return (
      <Fragment>
        <WelcomeModal/>
        <Header/>
        <BlogPosts/>
        <Footer/>
      </Fragment>
    );
  }
}
