import * as types from './types';

const initialState = {
    items: [],
    newTodo: '',
    filter: 'all',
    isFetching: false
}

const todo = (state = initialState, action) => {

    switch (action.type) {
        case types.CREATE:
            return {
                ...state,
                ...{
                    items: [
                        ...state.items,
                        action.playload
                    ],
                    newTodo: ''
                }
            }
        case types.UPDATE:
            const updatedItems = state.items.map((item, index) => {

                if (item.id === action.playload.activeId) {
                    return {
                        ...item,
                        ...action.playload.updatedTodo
                    }
                }
                return item;
            })

            return {
                ...state,
                ...{
                    items: updatedItems
                }
            }
        case types.DELETE:
            const activeIndex = state.items.findIndex((item) => item.id === action.playload.activeId)
            const deletedItems = [
                ...state.items.slice(0, activeIndex),
                ...state.items.slice(activeIndex + 1)
            ]
            return {
                ...state,
                ...{
                    items: deletedItems

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

export default todo;