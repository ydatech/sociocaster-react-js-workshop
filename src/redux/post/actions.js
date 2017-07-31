import * as types from './types';

import axios from 'axios';
// api base url
import { BASE_URL } from '../../config/api';


axios.defaults.baseURL = BASE_URL;

export const loadPost = () => {

    return (dispatch, getState) => {

        dispatch(updatePostState({
            isFetching: true
        }));

        axios.get('/posts').then((response) => {
            dispatch({
                type: types.LOAD,
                playload: {
                    items: response.data
                }
            });
            dispatch(updatePostState({
                isFetching: false
            }));
        }).catch((error) => {

        })

    }
}


export const updatePostState = (newState) => {

    return {
        type: types.UPDATE_STATE,
        playload: {
            ...newState
        }
    }
}



