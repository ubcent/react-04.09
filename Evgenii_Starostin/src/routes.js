import MainPage from 'Components/MainPage';
import PostsList from 'Containers/PostsListContainer';
import Post from 'Containers/PostContainer';
import CommentsList from 'Containers/CommentsListContainer';
import UsersList from 'Containers/UsersListContainer';
import User from 'Containers/UserContainer';
import PageNotFound from 'Components/PageNotFound';

export default [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    path: '/posts',
    component: PostsList,
    exact: true,
  },
  {
    path: '/posts/:postId',
    component: Post,
    exact: true,
  },
  {
    path: '/comments',
    component: CommentsList,
    exact: true,
  },
  {
    path: '/users',
    component: UsersList,
    exact: true,
  },
  {
    path: '/users/:userId',
    component: User,
    exact: true,
  },
  {
    component: PageNotFound,
  },
];
