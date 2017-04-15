import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="logo">
                    <a href="#">
                        <img src="../src/media/logo.svg" alt="logo" />
                        <span>a better experience</span>
                    </a>
                </div>
                <div className="offer">
                    <h1>Frond-End Developer</h1>
                    <p>Adyax’s core values take top priority: we care for our client, and we care for our people. Staff and clients work in partnership with consistent,  transparent communication.</p>
                </div>
            </header>
        );
    }
}

export default Header;