import MainPage from 'components/MainPage';
import BlogPost from 'components/BlogPost';
import BlogPage from 'components/BlogPage';

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
];