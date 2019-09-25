import React from 'react';

import './style.css';

function Header(props) {

    function handleClick(e) {
        e.preventDefault();
        let value = document.getElementById('item').value;

        if (value) {
            addItem(value);
        }
    }

    function addItem (value) {
        props.addItemTop(value);
    }

    return (
        <header className="Header">
            <input
                type="text"
                placeholder="Enter an activity..."
                id="item"
            />
            <button
                id="add"
                onClick={handleClick}
            />
        </header>
    );
}

export default Header;
