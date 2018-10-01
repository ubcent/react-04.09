import * as types from './constans';

export function updatePosts(posts) {
    return {
        type: types.UPDATE_POSTS,
        posts
    }
}