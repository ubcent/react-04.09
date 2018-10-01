import PropTypes from 'prop-types';

export const IPost = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  userId: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
});

export const IComment = PropTypes.shape({
  id: PropTypes.string,
  postId: PropTypes.string,
  userid: PropTypes.string,
  text: PropTypes.string,
});

export const IUser = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});

export const IError = PropTypes.shape({
  message: PropTypes.string,
});
