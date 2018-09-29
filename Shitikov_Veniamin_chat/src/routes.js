import ChatRoom from './components/ChatRoom/ChatRoom';
import Chat from './components/Chat/Chat';
import Login from './components/Login';

export default [
    {
        path: '/',
        component: Login,
        exact: true,
    },
    {
        path: '/chat',
        component: Chat,
        exact: true,
    },
]