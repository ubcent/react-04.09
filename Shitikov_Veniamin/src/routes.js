import MainPage from 'components/MainPage';
import CommentPage from 'components/CommentPage';
import Blog from './components/Blog';
import Users from './components/Users';

export default [
    {
        path: '/',
        component: MainPage,
        exact: true,
    },
    {
        path: '/blog',
        component: Blog,
        exact: true,
    },
    {
        path: '/comments',
        component: CommentPage,
        exact: true,
    },
    {
        path: '/users',
        component: Users,
        exact: true,
    },
];