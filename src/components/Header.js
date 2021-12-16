import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    }
    const show = showMenu ? " show" : "";

    return (
        <header className="container">
            <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
                <a href="#" className="navbar-brand">Clothes Store</a>
                <button type="button" className="navbar-toggler" dataToggle="collapse" dataTarget="#navbarMenu" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse" + show} id="navbarMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About Us</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Wishlist</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;