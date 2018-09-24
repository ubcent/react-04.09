const modelPosts = {
    base: "http://localhost:3000",
    async getPosts(){
        let posts = await fetch(`${this.base}/posts?_expand=user`)
            .then(data => data.json());
        return posts;
    },

    async getPost(id){
        const post = await fetch(`${this.base}/posts/${id}?_expand=user`)
            .then(data => data.json());
        return post;
    },

    async getPostsByUserId(userId){
        const posts = await fetch(`${this.base}/users/${userId}/posts`)
            .then(data => data.json());
        return posts;
    },
    
    async getPostsById(ids) {
        ids = [].concat(ids).join('&id=');
        const posts = await fetch(`${this.base}/posts?id=${ids}&_expand=user`)
            .then(data => data.json());
        return posts;
    },
}

export default modelPosts;