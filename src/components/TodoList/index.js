import React from 'react';

import './style.css';

import TodoItem from '../TodoItem/index';

function TodoList() {

    return (
        <ul className="TodoList">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )
}

export default TodoList;
