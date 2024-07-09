import React from "react";
import "../footer/footer.css"
import logo from "../img/logo.png"
import google from "../img/google.png"
import gmail from "../img/gmail.png"
import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"
function Footer(){
    return <div className="footerMain">
        <section className="footerSec1">
        <section className="row1">
            <img src={logo} alt="" />
            <p>Unique store</p>
        </section>

        <div className="row23">
        <section className="row2">
            <p>About us</p>
            <p>Privacy Policy</p>
        </section>

        <section className="row3">
            <p>FAQ</p>
            <p>Follow us</p>
        </section>
        </div>

        </section>
        <div className="socials">
                <img src={google} alt="" />
                <img src={gmail} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
            </div>
        <h5>Unique store 2024. All rights reserved</h5>
    </div>
}
export default Footer