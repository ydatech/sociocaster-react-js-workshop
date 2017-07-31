import { combineReducers } from 'redux';

import todo from './todo/reducer';
import post from './post/reducer';


const rootReducer = combineReducers({
    todo,
    post
})

export default rootReducer;
