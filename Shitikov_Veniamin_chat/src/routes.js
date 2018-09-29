import Chat from './components/Chat/Chat';
import Login from './components/Login';
import Home from './components/Home';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/chat',
        component: Chat,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
]