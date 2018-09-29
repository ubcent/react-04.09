import Room from 'containers/RoomContainer';

export default [
  {
    path: '/',
    component: Room,
    exact: true
  },
  {
    path: '/companion/',
    component: Room,
    exact: true
  },
  {
    path: '/companion/:id',
    component: Room,
    exact: true
  },
]