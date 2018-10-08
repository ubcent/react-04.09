import Home from 'pages/HomePage';
import Blog from 'pages/BlogPage';
import Comments from 'pages/CommentsPage';
import Users from 'pages/UsersPage';

/**
 * Маршрутизация приложения
 */
export default [
  // Главная страница блога - Home
  {
    path: '/',
    component: Home,
    exact: true,
  },
  // Страница с блогами - Blog
  {
    path: '/blog',
    component: Blog,
    exact: true,
  },
  // Страница с комментариями - Comments
  {
    path: '/comments',
    component: Comments,
    exact: true,
  },
  // Страница с пользователями - Users
  {
    path: '/users',
    component: Users,
    exact: true,
  },
];