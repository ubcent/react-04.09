import { handleActions } from 'redux-actions';
import {loadList, send} from 'actions/comments';

const initialState = {
    comments: []
};

export default handleActions({
        [loadList]: (state, action) => {
            return {
                comments: action.payload
            }
        },
        [send]: (state, action) =>{
            return{
                ...state,
                comments:state.comments.concat(action.payload)
            }
        }
    },
    initialState);