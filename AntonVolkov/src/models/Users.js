const modelUsers = {
    base: "http://localhost:3000",
    async getUsers(limit, currentPage) {
        let count, page;

        page = currentPage ? currentPage : 1;
        limit = limit ? `&_limit=${limit}&_page=${page}` : '';
    
        const users = await fetch(`${this.base}/users?_embed=comments&_embed=posts${limit}`)
            .then(data => {
                count = +data.headers.get('X-Total-Count');
                return data.json();
            });
        return {users, count};
    },

    async getUser(id) {
        const user = await fetch(`${this.base}/users/${id}?_embed=comments&_embed=posts`)
            .then(data => data.json());
        return user;
    },

    async getUsersByIds(limit, currentPage, ids) {
        let count, page;

        page = currentPage ? currentPage : 1;
        limit = limit ? `&_limit=${limit}&_page=${page}` : '';
        ids = [].concat(ids).join('&id=');
        
        const users = await fetch(`${this.base}/users?id=${ids}&_embed=comments&_embed=posts${limit}`)
            .then(data => {
                count = +data.headers.get('X-Total-Count');
                return data.json();
            });
        return { users, count };
    },
}

export default modelUsers;