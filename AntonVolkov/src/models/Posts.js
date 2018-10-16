const modelPosts = {
    base: "http://localhost:3000",
    async getPosts(limit, page){
        let count;
        page = page ? page : 1;
        limit = limit ? `&_limit=${limit}&_page=${page}` : '';

        const posts = await fetch(`${this.base}/posts?_expand=user${limit}`)
            .then(data => {
                count = +data.headers.get('X-Total-Count');
                return data.json();
            });

        return {posts, count};
    },

    async getPost(id){
        const post = await fetch(`${this.base}/posts/${id}?_expand=user`)
            .then(data => data.json());

        return {post};
    },

    async getPostsByUserId(limit, page, userId) {
        let count;

        page = page ? page : 1;
        limit = limit ? `?_limit=${limit}&_page=${page}` : '';
        const posts = await fetch(`${this.base}/users/${userId}/posts${limit}`)
            .then(data => {
                count = +data.headers.get('X-Total-Count');
                return data.json();
            });

        return { posts, count };
    },
    
    async getPostsById(limit, page, ids) {
        let count;

        page = page ? page : 1;
        limit = limit ? `&_limit=${limit}&_page=${page}` : '';
        ids = [].concat(ids).join('&id=');

        const posts = await fetch(`${this.base}/posts?id=${ids}&_expand=user${limit}`)
            .then(data => {
                count = +data.headers.get('X-Total-Count');
                return data.json();
            });

        return { posts, count };
    },
}

export default modelPosts;