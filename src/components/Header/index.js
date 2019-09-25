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

    function handleKeyPress(e) {
        let value = document.getElementById('item').value;

        if(e.key === 'Enter' && value){
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
                onKeyPress={handleKeyPress}
            />
            <button
                id="add"
                onClick={handleClick}
            />
        </header>
    );
}

export default Header;
