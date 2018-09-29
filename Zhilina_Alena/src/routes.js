import Welcome from 'components/Welcome';
import BlogListContainer from 'containers/BlogListContainer';
import UserListContainer from 'containers/UserListContainer';
import PostListContainer from 'containers/PostListContainer';
import CommentListContainer from 'containers/CommentListContainer';
import ArticleContainer from 'containers/ArticleContainer';
import UserContainer from 'containers/UserContainer';

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
    {
        path: '/article/:idArticle',
        component: ArticleContainer,
        exact: true
    },
    {
        path: '/users/:idUser',
        component: UserContainer,
        exact: true
    },
]
