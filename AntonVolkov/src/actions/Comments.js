import * as types from './constans';

export function updateComments(comments) {
    return {
        type: types.UPDATE_COMMENTS,
        comments
    }
}