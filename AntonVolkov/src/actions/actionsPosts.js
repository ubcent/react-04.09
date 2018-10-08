import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from './constans';
import postAPI from 'models/Posts';

export function loadPosts(limit, currentPage) {
    console.log(limit, currentPage);
    return{
        types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],
        callAPI: () => postAPI.getPosts(limit, currentPage),
        payload: { currentPage }
    }
}

export function loadPostsByIds(limit, currentPage, ids) {

    return{
        types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],
        callAPI: () => postAPI.getPostsById(limit, currentPage, ids),
        payload: { currentPage }
    }
}

export function loadPostsByUid(limit, currentPage, uid) {

    return{
        types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],
        callAPI: () => postAPI.getPostsByUserId(limit, currentPage, uid),
        payload: { currentPage }
    }
}