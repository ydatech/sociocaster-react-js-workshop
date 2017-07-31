
import * as types from './types';


const initialState = {

    items: [],
    isFetching: false
}

const post = (state = initialState, action) => {

    switch (action.type) {
        case types.LOAD:
            return {
                ...state,
                ...{
                    items: action.playload.items
                }
            }
        case types.UPDATE_STATE:
            return {
                ...state,
                ...action.playload
            }
        default:
            return state;
    }
}

export default post;