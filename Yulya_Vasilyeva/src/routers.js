import Users from 'components/Users/'; // страница со всеми пользователями
import ArticleContainer from 'containers/ArticleContainer'; // список статей
import PostContainer from 'containers/PostContainer'; //страница описания статьи
import CommentsContainer from 'containers/CommentsContainer';//список всех комментариев

export default [
    {
        path: "/",
        component: ArticleContainer,
        exact: true
    },
    {
        path: "/post/:postId",
        component: PostContainer,
        exact: true
    },
    {
        path: "/comments",
        component: CommentsContainer,
        exact: true
    },
    {
        path: "/users",
        component: Users,
        exact: true
    }
]