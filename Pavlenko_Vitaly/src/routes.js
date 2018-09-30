import MainPage from 'pages/MainPage';
import Blog from 'pages/Blog';
import SinglePost from 'pages/SinglePost';

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
        path: '/blog/:id',
        component: SinglePost,
        exact: true,
    },
];