import Welcome from 'components/Welcome';
import BlogListContainer from 'containers/BlogListContainer';
import UserListContainer from 'containers/UserListContainer';
import PostListContainer from 'containers/PostListContainer';
import CommentListContainer from 'containers/CommentListContainer';

export default [
    {
        path: '/',
        component: Welcome,
        exact: true
    },
    {
        path: '/blog',
        component: BlogListContainer,
        exact: true
    },
    {
        path: '/users',
        component: UserListContainer,
        exact: true
    },
    {
        path: '/comments',
        component: CommentListContainer,
        exact: true
    },
    {
        path: '/blog/:idBlog',
        component: PostListContainer,
        exact: true
    },
]
