import './BlogPost.scss';

import React, { PureComponent } from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс BlogPost - компонент, отображающий блог на странице
 */
export default class BlogPost extends PureComponent {
  // Проверка свойств
  static propTypes = {
    // Пост - объект
    post: PropTypes.shape({
      // id поста
      id:  PropTypes.string,
      // заголовок поста
      title: PropTypes.string,
      // дата поста
      date: PropTypes.string,
      // автор поста
      author: PropTypes.string,
      // пост
      message: PropTypes.shape({
        // пост на html
        __html: PropTypes.string,
      }),
    })
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут post инициализируем пустым объектом
    post: {}
  };

  render() {
    // получаем переданные свойства поста
    const {id, title, date, author, message} = this.props.post;
    return (
        <div className='post' id={id}>
          <h2>
            {title}
          </h2>
          <p>
            <span className='date'>{date} by</span> <span className='author'>{author}</span>
          </p>
          {/* если нужно использовать компоненты React в html коде, то вместо dangerouslySetInnerHTML следует использовать пакет react-html-parser */}
          <div className='message' dangerouslySetInnerHTML={message}>
          </div>
        </div>
    );
  }
}