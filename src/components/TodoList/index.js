import React from 'react';

import './style.css';

import TodoItem from '../TodoItem/index';

function TodoList(props) {

    const todoItems = props.todos.map(
        item => <TodoItem
            key={item.id}
            item={item}
            removeDate={props.removeDate}
            updateDate={props.updateDate}
        />);

    return (
        <ul className="TodoList">
            {todoItems}
        </ul>
    )
}

export default TodoList;
