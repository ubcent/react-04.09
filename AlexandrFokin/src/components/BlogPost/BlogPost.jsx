import './BlogPost.scss';

import React, { PureComponent, Fragment } from 'react';
// Проверка свойств
import PropTypes from 'prop-types';
// Поддержка языка Markdown
import Markdown from 'react-markdown';

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
      loading: false,
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
      // пост на MarkDown
      message: PropTypes.string,
    }),
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут post инициализируем пустым объектом
    post: {},
  };

  loadMore = () => {
    const {page} = this.state;
    this.setState({
      loading: true,
    });
    // загружаем 3 комментария
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=3`)
      .then(response => response.json())
      .then(comments => {
        this.setState(prevState => ({
          comments: prevState.comments.concat(comments),
          loading: false,
          page: prevState.page + 1,
        }));
      });
  };

  // выполняется после визуализации
  componentDidMount() {
    this.loadMore();
  }

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
    const {comments, loading} = this.state;
    return (
        <Fragment>
          <div className="post" id={id}>
            <h2>
              {title}
            </h2>
            <p>
              <span className="date">{date} by</span> <span className="author">{author}</span>
            </p>
            <Markdown className="message" source={message}/>
          </div>
          <CommentsList comments={comments}/>
          {
            /* Отображаем надпись о загрузке */
            loading && 'Loading...'
          }
          <p/>
          <button onClick={this.loadMore}>Load more comments</button>
          <CommentsForm onSend={this.handleCommentReceive}/>
        </Fragment>
    );
  }
}