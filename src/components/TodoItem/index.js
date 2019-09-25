import React from 'react';

import './style.css';

import { ReactComponent as RemoveSVG } from '../../svg/remove.svg';
import { ReactComponent as CompleteSVG } from '../../svg/complete.svg';

function TodoItem() {

    return (
        <li className="TodoItem">
            TodoItem
            <div className="buttons">
                <button
                    className="remove"
                >
                    <RemoveSVG />
                </button>
                <button
                    className="complete"
                >
                    <CompleteSVG />
                </button>
            </div>
        </li>
    )
}

export default TodoItem;
