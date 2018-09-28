import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import CommentsList from 'Components/CommentsList';
import { fetchCommentsList } from 'Actions/commentsActions';
import { IComment, IError } from 'Models';

class CommentsListContainer extends PureComponent {
  static propTypes = {
    commentsList: PropTypes.arrayOf(IComment),
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    getCommentsList: PropTypes.func,
  };

  static defaultProps = {
    commentsList: [],
    fetching: false,
    errors: [],
    getCommentsList: null,
  };

  componentDidMount = () => {
    const { getCommentsList } = this.props;
    getCommentsList();
  }

  render() {
    const { commentsList, fetching, errors } = this.props;

    if (fetching) {
      return (
        <Loading />
      );
    }

    return (
      <Fragment>
        {errors.length > 0 && (
          <Errors errors={errors} />
        )}

        <CommentsList comments={commentsList} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentsList: state.comments.commentsList,
    fetching: state.comments.fetching,
    errors: state.comments.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCommentsList: () => fetchCommentsList(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
