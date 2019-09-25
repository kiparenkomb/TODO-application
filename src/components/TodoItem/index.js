import React from 'react';

import './style.css';

import { ReactComponent as RemoveSVG } from '../../svg/remove.svg';
import { ReactComponent as CompleteSVG } from '../../svg/complete.svg';

function TodoItem(props) {

    const { id, text, completed } = props.item;

    function handleClickComplete() {
        props.updateDate(id);
    }

    function handleClickRemove() {
        props.removeDate(id);
    }

    return (
        <li className={`TodoItem ${completed ? 'completed' : ''}`}>
            {text}
            <div className="buttons">
                <button
                    className="remove"
                    onClick={handleClickRemove}
                >
                    <RemoveSVG />
                </button>
                <button
                    className="complete"
                    onClick={handleClickComplete}
                >
                    <CompleteSVG />
                </button>
            </div>
        </li>
    )
}

export default TodoItem;
