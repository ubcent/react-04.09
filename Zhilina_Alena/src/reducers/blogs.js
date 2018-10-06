import {handleActions} from 'redux-actions';
import {loadList} from 'actions/blogs';

const initialState = {
    entities: [],
};

export default handleActions({

        [loadList]: (state, action) => {
            return {
                entities: action.payload,
            }
        }
    },
    initialState);