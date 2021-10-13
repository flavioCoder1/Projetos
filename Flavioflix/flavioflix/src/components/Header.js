import React from 'react';
import './Header.css';

function Header({ black }) {
    return (
        <header className={ black ? 'black' : '' }>
            <div className="header--logo"> <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
            </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Pic" />
                </a>
            </div>
        </header>
    )
}

export default Header;
