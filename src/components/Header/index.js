import React from 'react';

import './style.css';

function Header() {

  return (
      <header className="Header">
        <input
            type="text"
            placeholder="Enter an activity..."
            id="item"
        />
        <button
            id="add"
        />
      </header>
  );
}

export default Header;
