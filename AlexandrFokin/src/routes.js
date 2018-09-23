import CommentsList from 'components/CommentsList';
import MainPage from 'components/MainPage';

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
  // Страница с комментариями - Comments
  {
    path: '/comments',
    component: CommentsList,
    exact: true,
  },
];