import './CommentsPage.scss';

import React, { PureComponent } from 'react';

import MessagesContainer from 'containers/MessagesContainer';

/**
 * Класс CommentsPage - компонент, отображающий ****** на странице
 */
export default class CommentsPage extends PureComponent {
  render() {    
    return (
      <main className="container">
        <MessagesContainer/>
      </main>
    );
  }
}