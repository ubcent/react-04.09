import Main from 'containers/CommentsListContainer';

export default [
    {
        path: '/comments',
        component: Main,
        exact: true
    },
    {
        path: '/comments/:id',
        component: Main,
        exact: true
    },
]