import Main from 'components/Main';
import Blog from 'components/Blog';
import Users from 'components/Users';
import Post from 'components/Post';

export default [
    {
        path: '/',
        component: Main,
        exact: true
  },
    {
        path: '/blog',
        component: Blog,
        exact: true
  },
    {
        path: '/users',
        component: Users,
        exact: true
  },
    {
        path: '/blog/post/:id',
        component: Post,
        exact: true
  },
]
