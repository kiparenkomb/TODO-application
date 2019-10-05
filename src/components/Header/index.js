import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

import './style.css';

const Header = ({ dispatch }) => {
    let input;

    return (
        <header className="Header">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}
            >
                <input
                    type="text"
                    placeholder="Enter an activity..."
                    ref={node => (input = node)}
                />
                <button type="submit" />
            </form>
        </header>
    )
};

export default connect()(Header);
