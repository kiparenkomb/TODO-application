import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem/index';

import './style.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <ul className="TodoList">
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                {...todo}
                onToggleTodo={() => toggleTodo(todo.id)}
                onRemoveTodo={() => deleteTodo(todo.id)}
            />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
