import './BlogPost.scss';

import React, { PureComponent, Fragment } from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

import CommentsList from 'components/CommentsList';
import CommentsForm from 'components/CommentsForm';

/**
 * Класс BlogPost - компонент, отображающий блог на странице
 */
export default class BlogPost extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

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

  handleCommentReceive = comment => {
    this.setState(
      prevState => {
        return {
          ...prevState,
          // перезаписываем содержимое всего массива комментариев новым массивом, содержащим все комментарии старого массива и новый комментарий
          comments: prevState.comments.concat([comment]),
        };
      }
    );
  };

  render() {
    // получаем переданные свойства поста
    const {id, title, date, author, message} = this.props.post;
    // получаем значение состояния
    const {comments} = this.state;
    return (
        <Fragment>
          <div className="post" id={id}>
            <h2>
              {title}
            </h2>
            <p>
              <span className="date">{date} by</span> <span className="author">{author}</span>
            </p>
            {/* если нужно использовать компоненты React в html коде, то вместо dangerouslySetInnerHTML следует использовать пакет react-html-parser */}
            <div className="message" dangerouslySetInnerHTML={message}/>
          </div>
          <h5>Комментарии</h5>
          {comments.length && <CommentsList comments={comments}/>}
          <CommentsForm onSend={this.handleCommentReceive}/>
        </Fragment>
    );
  }
}