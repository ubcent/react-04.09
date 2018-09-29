import MainPage from 'pages/MainPage';
import BlogPage from 'pages/BlogPage';
import ChatPage from 'containers/MessagesContainer';

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
    component: ChatPage,
    exact: true,
  },
];