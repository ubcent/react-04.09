import './CommentsPage.scss';

import React, { PureComponent } from 'react';

import MessagesContainer from 'containers/ConnectContainer';

/**
 * Класс CommentsPage - компонент, отображающий страницу с комментариями
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