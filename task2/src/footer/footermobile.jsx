import React from "react";
import "../footer/footermobile.css"
import { ReactComponent as Heart } from '../img/heart.svg';
import { ReactComponent as Home } from "../img/home.svg";
import { ReactComponent as Menu } from "../img/menu.svg";
import { ReactComponent as Cart } from "../img/cart-fill.svg";
import { Link } from "react-router-dom";
function Footermobile(){
    return <div>
        <section className="footerMobileMain">
            <Home className="home icon"/>
            <Menu className="menu icon"/>
            <Heart className="heart icon"/>
            <Link to="/cart">
            <Cart className="footercheckout icon"/>
            </Link>
        </section>
    </div>
}
export default Footermobile