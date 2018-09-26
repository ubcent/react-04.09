const modelComments = {
    base: "http://localhost:3000",
    async getComments() {
        const comments = await fetch(`${this.base}/comments?_expand=user&_expand=post`)
            .then(data => data.json());
        return comments;
    },

    async getCommentsByUserId(userId) {
        const comment = await fetch(`${this.base}/users/${userId}/comments?_expand=post`)
            .then(data => data.json());
        return comment;
    },
    
    async getCommentsByPostId(postId) {
        const comment = await fetch(`${this.base}/posts/${postId}/comments?_expand=user`)
            .then(data => data.json());
        return comment;
    },
}

export default modelComments;