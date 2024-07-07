import React from "react";
import "../navbar/navbar.css"
import logo from "../img/logo.png"
import vec from "../img/vec2.png"
import { Link } from "react-router-dom";

function Nav(){
    return <div className="navbarMain">
        <Link to="/" className="li">
        <section className="leftSec">
        <img src={logo} alt="" />
        <p>UNIQUE STORE</p>
    </section>
        </Link>
    
    <section className="middleSec">
    <Link to="/" className="li"><p>HOME</p></Link>
    <Link to="#products" className="li"><p>PRODUCTS</p></Link>
    <Link to="/cart" className="li"><p>CART</p></Link>
    <Link to="/contact" className="li"><p>CONTACT US</p></Link>
    </section>

    <section className="rightSec">
        <p>SIGN IN</p>
    </section>
    </div>
}
export default Nav