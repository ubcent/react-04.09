import * as types from './constans';

export function updateUsers(users) {
    return {
        type: types.UPDATE_USERS,
        users
    }
}