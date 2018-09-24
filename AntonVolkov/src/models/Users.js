const modelUsers = {
    base: "http://localhost:3000",
    async getUsers() {
        const users = await fetch(`${this.base}/users?_embed=comments&_embed=posts`)
            .then(data => data.json());
        return users;
    },

    async getUser(id) {
        const user = await fetch(`${this.base}/users/${id}?_embed=comments&_embed=posts`)
            .then(data => data.json());
        return user;
    },

    async getUserPosts(userId) {
        const posts = await fetch(`${this.base}/users/${userId}/posts`)
            .then(data => data.json());
        return posts;
    },
}

export default modelUsers;