import CommentsListContainer from 'containers/CommentsListContainer';
import Home from 'components/Home';
import UserListContainer from "containers/UserListContainer";
import ContentContainer from "containers/ContentContainer";

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/articles',
        component: ContentContainer,
        exact: true,
    },
    {
        path: '/comments',
        component: CommentsListContainer,
        exact: true,
    },
    {
        path: '/users',
        component: UserListContainer,
        exact: true,
    },
]
