
import * as types from './types';

export const createTodo = (newItem) => {

    return {
        type: types.CREATE,
        playload: {
            ...newItem
        }
    }
}

export const updateTodo = (updatedTodo, activeId) => {

    return {
        type: types.UPDATE,
        playload: {
            updatedTodo,
            activeId
        }
    }
}

export const deleteTodo = (activeId) => {
    return {
        type: types.DELETE,
        playload: {
            activeId
        }
    }
}

export const updateTodoState = (newState) => {

    return {
        type: types.UPDATE_STATE,
        playload: {
            ...newState
        }
    }
}