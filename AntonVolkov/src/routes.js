import Home from 'pages/Home';
import Blog from 'pages/Blog';
import Comments from 'pages/Comments';
import Users from 'pages/Users';
import UserPosts from 'pages/UserPosts';
import Post from 'pages/Post';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/blog',
        component: Blog,
        exact: true
    },
    {
        path: '/blog/post/:id',
        component: Post,
        exact: true
    },
    {
        path: '/comments',
        component: Comments,
        exact: true
    },
    {
        path: '/users',
        component: Users,
        exact: true
    },
    {
        path: '/users/:uid/posts',
        component: UserPosts,
        exact: true
    },
]