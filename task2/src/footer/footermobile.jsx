import React from "react";
import "../footer/footermobile.css"
import { ReactComponent as Heart } from '../img/heart (2).svg';
import { ReactComponent as Home } from "../img/house.svg";
import { ReactComponent as Menu } from "../img/grid3.svg";
import { ReactComponent as Cart } from "../img/cart (2).svg";
import { Link } from "react-router-dom";
// import home from "../img/home.png"
function Footermobile(){
    return <div>
        <section className="footerMobileMain">
            <a href="/body"><Home className="home icon"/></a>
            <a href="/onboarding"><Menu className="menu icon"/></a>
            <a><Heart className="heart icon"/></a>
            <Link to="/cart" className="fli">
            <Cart className="footercheckout icon"/>
            </Link>
        </section>
    </div>
}
export default Footermobile