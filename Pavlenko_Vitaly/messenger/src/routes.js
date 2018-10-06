import Home from 'pages/Home';
import Chat from 'pages/Chat';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/chat/:id',
        component: Chat,
        exact: true,
    },
];