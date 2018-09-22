import { postsData, to } from './data';

export default modelPosts = {
    async getPosts(){
        const posts = await to( () => postsData );
        return posts;
    },

    async getPost(id){
        const post = await to( () => postsData.filter((post) => post.id === id.toString()) );
        return post[0];
    },

    async getPostsById(ids){
        ids = [].concat(ids);
        const posts = await to( () => postsData.filter((post) => ids.indexOf(post.id) !== -1) );
        return posts;
    },
    
    async getPostsByUserId(id){
        const posts = await to(() => postsData.filter((post) => post.author == id ) );
        return posts;
    },
}