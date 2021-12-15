import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const handleToggle = () => {
    document.getElementById("navbarMenu").classList.toggle("collapse");
}

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">Clothes Store</a>
                <button className="navbar-toggler" dataToggle="collapse" dataTarget="#navbarMenu" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;