import './Page.css';

import React, { Component } from 'react';
import classNames from 'classnames';

import Header from 'components/Header';
import Post from 'components/Post';

const menus = ['HOME', 'ABOUT', 'CONTACT'];
const posts = [{firstP: 'Man must explore, and this is exploration at its greatest',
                secondP: 'Problems look mighty small from 150 miles up',
                data: 'September 24, 2018'},
                {firstP: 'I believe every human has a finite number of hearbeats. I don\'t intend to waste any of mine.',
                 secondP: '',
                 data: 'September 18, 2018'},
                {firstP: 'Scince has not yet mastered prophecy',
                 secondP: 'We predict too much for the next year and yet far too little for the next ten.',
                 data: 'August 24, 2018'},
                {firstP: 'Failure is not an option',
                 secondP: 'Many say exploration is part of our destiny, but it\'s actually our duty to future generations.',
                 data: 'July 8, 2018'}];

export default class Page extends Component {
    
    render() {
        const pageClass = classNames('container');

        return(
            <div className={pageClass}>
              <Header menus={menus} />
              {posts.map((post, index) => 
                  <Post key={index} firstP={post.firstP} secondP={post.secondP} data={post.data} />
              )}
            </div>
        );
    }
}