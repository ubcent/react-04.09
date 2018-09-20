//делаем выборку из постов и выводим нужный по id
export const getTextPostById = (article, id) => {
    return article.filter( post => post.id === id )[0];
}