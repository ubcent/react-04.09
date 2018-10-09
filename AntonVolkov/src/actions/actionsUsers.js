import { LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE } from './constans';
import usersAPI from 'models/Users';

export function loadUsers(limit, currentPage) {
    return {
        types: [LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE],
        callAPI: () => usersAPI.getUsers(limit, currentPage),
        payload: { currentPage }
    }
}

export function loadUsersByIds(limit, currentPage, ids) {
    console.log(limit, currentPage);
    return {
        types: [LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE],
        callAPI: () => usersAPI.getUsersByIds(limit, currentPage, ids),
        payload: { currentPage }
    }
}

export function loadUser(uid) {

    return {
        types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
        callAPI: () => usersAPI.getUserById(uid),
    }
}