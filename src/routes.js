import Counter from 'components/Counter';
import CommentsList from 'containers/CommentsListContainer';
import Comment from 'containers/CommentContainer';

export default [
  {
    path: '/',
    component: Counter,
    exact: true
  },
  {
    path: '/comments',
    component: CommentsList,
    exact: true
  },
  {
    path: '/comments/:id',
    component: Comment,
    exact: true
  },
]