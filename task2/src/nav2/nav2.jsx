import React from "react";
import "../nav2/nav2.css"
import logo from "../img/logo.png"
import vec from "../img/vec2.png"
import { Link } from "react-router-dom";

function Navv(){
    return <div className="navbarMain">
        <Link to="/hngproj2" className="li">
        <section className="leftSec">
        <img src={logo} alt="" />
        <p>UNIQUE STORE</p>
    </section>
        </Link>
    
    <section className="middleSec">
    <Link to="/hngproj2" className="li"><p>HOME</p></Link>
    <Link to="#products" className="li"><p>PRODUCTS</p></Link>
    <Link to="/cart" className="li"><p>CART</p></Link>
    </section>
    </div>
}
export default Navv