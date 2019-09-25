import React from 'react';

import './style.css';

import { ReactComponent as RemoveSVG } from '../../svg/remove.svg';
import { ReactComponent as CompleteSVG } from '../../svg/complete.svg';

function TodoItem(props) {

    function handleClickComplete() {
        props.updateDate(props.item.id);
    }

    function handleClickRemove() {
        props.removeDate(props.item.id);
    }

    return (
        <li className={`TodoItem ${props.item.completed ? 'completed' : ''}`}>
            {props.item.text}
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
