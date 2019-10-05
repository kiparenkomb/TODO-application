import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as RemoveSVG } from '../../svg/remove.svg';
import { ReactComponent as CompleteSVG } from '../../svg/complete.svg';

import './style.css';

const TodoItem = ({ onToggleTodo, onRemoveTodo, completed, text }) => (
    <li
        className={`TodoItem ${completed ? 'completed' : ''}`}
    >
        {text}
        <div className="buttons">
            <button
                className="remove"
                onClick={onRemoveTodo}
            >
                <RemoveSVG />
            </button>
            <button
                className="complete"
                onClick={onToggleTodo}
            >
                <CompleteSVG />
            </button>
        </div>
    </li>
);

TodoItem.propTypes = {
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem;
