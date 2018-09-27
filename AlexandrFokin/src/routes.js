import MainPage from 'components/MainPage';
import BlogPost from 'components/BlogPost';
import BlogPage from 'components/BlogPage';
import Messages from 'containers/MessagesContainer';

/**
 * Маршрутизация приложения
 */
export default [
  // Главная страница блога - Home
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  // Страница с блогами - Blog
  {
    path: '/blog',
    component: BlogPage,
    exact: true,
  },
  // Страница с комментариями - Comments
  {
    path: '/comments',
    component: BlogPost,
    exact: true,
  },
  // Страница с сообщениями - Messages
  {
    path: '/messages',
    component: Messages,
    exact: true,
  },
];