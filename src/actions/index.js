import * as actionTypes from './actionTypes';

const {ADD_TODO, SET_VISIBILITY_FILTER, REMOVE_TODO, TOGGLE_TODO} = actionTypes;

export const addTodo = text => ({
    type: ADD_TODO,
    id: `${(+ new Date()).toString(16)}`,
    text
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
