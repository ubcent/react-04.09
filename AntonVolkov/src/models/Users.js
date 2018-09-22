import { usersData, to } from './data';

export default modelUsers = {
    async getUsers() {
        const users = await to(() => usersData);
        return users;
    },

    async getUser(id) {
        const user = await to(() => usersData.filter((user) => user.id === id.toString()));
        return user[0];
    },
}