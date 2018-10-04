import BlogPostsContainer from 'containers/BlogPostsContainer';
import PostPageContainer from 'containers/PostPageContainer';
import MainPage from 'components/MainPage';
import CommentsContainer from 'containers/CommentsContainer';
import UsersContainer from 'containers/UsersContainer';

export default [
  {
    path: '/',
    component: MainPage,
    exact: true
  },
  {
    path: '/blog',
    component: BlogPostsContainer,
    exact: true
  },
  {
    path: '/comments',
    component: CommentsContainer,
    exact: true
  },
  {
    path: '/users',
    component: UsersContainer,
    exact: true,
  },
  {
    path: '/post/:id',
    component: PostPageContainer,
    exact: true,
  },
]
