import React, { useState } from "react";
import "../navbar/navbar.css";
import logo from "../img/logo.png";
import menu from "../img/more (2).png";
import cart from "../img/cart.png";
import close from "../img/close.png";
import { Link } from "react-router-dom";

function Nav() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    function toggleDropdown() {
        setDropdownVisible(!dropdownVisible);
    }

    function closeDropdown() {
        setDropdownVisible(false);
    }

    return (
        <div className="navbarMain">
            <Link to="/hngproj2" className="li" onClick={closeDropdown}>
                <section className="leftSec">
                    <img src={logo} alt="Logo" />
                    <p>UNIQUE STORE</p>
                </section>
            </Link>

            <div className="icons">
                <img src={menu} alt="Menu" className="hamburger" onClick={toggleDropdown} />
                <Link to="/cart">
                <img src={cart} alt="Cart" className="hamburger" />
                </Link>
            </div>

            <section className="middleSec">
                <Link to="/hngproj2" className="li" onClick={closeDropdown}><p>HOME</p></Link>
                <Link to="/fullproduct" className="li" onClick={closeDropdown}><p>PRODUCTS</p></Link>
                <Link to="/cart" className="li"><p>CART</p></Link>
            </section>

            {dropdownVisible && (
                <section className="dropDown" id="dropd">
                    <img src={close} alt="Close" onClick={toggleDropdown} />
                    <Link to="/hngproj2" className="li2" onClick={closeDropdown}><p>HOME</p></Link>
                    <Link to="/fullproduct" className="li2" onClick={closeDropdown}><p>PRODUCTS</p></Link>
                </section>
            )}
        </div>
    );
}

export default Nav;
