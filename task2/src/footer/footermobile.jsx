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
            <Link to="/body"><Home className="home icon"/></Link>
            <Link to="/onboarding"><Menu className="menu icon"/></Link>
            <Link><Heart className="heart icon"/></Link>
            <Link to="/cart" className="fli">
            <Cart className="footercheckout icon"/>
            </Link>
        </section>
    </div>
}
export default Footermobile