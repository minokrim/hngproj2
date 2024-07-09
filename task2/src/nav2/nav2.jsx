import React from "react";
import "../nav2/nav2.css"
import logo from "../img/logo.png"
import { Link } from "react-router-dom";

function Navv(){
    return <div className="navbarMain2">
        <Link to="/hngproj2" className="li2">
        <section className="leftSec2">
        <img src={logo} alt="" />
        <p>UNIQUE STORE</p>
    </section>
        </Link>
    
    <section className="middleSec2">
    <Link to="/hngproj2" className="li2"><p>HOME</p></Link>
    <Link to="/hngproj2" className="li2"><p>PRODUCTS</p></Link>
    <Link to="/cart" className="li2"><p>CART</p></Link>
    </section>
    </div>
}
export default Navv