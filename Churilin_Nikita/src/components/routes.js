import Posts from 'components/Posts';
import About from 'components/About';
import SamplePost from 'components/SamplePost';
import PageOfPost from 'components/PageOfPost';

export default [
  {
    path: '/',
    component: Posts,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/sample-post',
    component: SamplePost,
    exact: true
  },
  {
    path: '/0',
    component: PageOfPost,
    exact: true
  },
  {
    path: '/1',
    component: PageOfPost,
    exact: true
  },
  {
    path: '/2',
    component: PageOfPost,
    exact: true
  },
  {
    path: '/3',
    component: PageOfPost,
    exact: true
  },
];