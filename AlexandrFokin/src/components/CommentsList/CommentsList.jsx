import './CommentsList.scss';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/**
 * Класс CommentsList - компонент, отображающий комментарии на странице
 */
export default class CommentsList extends PureComponent {
  // Проверка свойств
  static propTypes = {
    // Комментарии - массив
    comments: PropTypes.array,
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут comments инициализируем пустым массивом
    comments: [],
  };

  render() {
    // получаем список переданных комментариев
    const {comments} = this.props;
    return(
      <ul>
        {comments.map(
          // Отображаем комментарии
          (comment, idx) => <li key={idx}>{comment.name}: {comment.body}</li>
        )}
      </ul>
    );
  }
}