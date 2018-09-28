import PropTypes from 'prop-types';

export const IPost = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  userId: PropTypes.number,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
});

export const IComment = PropTypes.shape({
  id: PropTypes.number,
  postId: PropTypes.number,
  userid: PropTypes.number,
  text: PropTypes.string,
});

export const IUser = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
});

export const IError = PropTypes.shape({
  message: PropTypes.string,
});
