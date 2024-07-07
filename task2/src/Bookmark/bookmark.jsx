import React  from "react";
import "../Bookmark/bookmark.css"
import Cart from "../component/cart";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
function Bookmark(){
    return <div className="bmark">
        <Nav/>
        <div className="bookmarkMain">
        <section className="bookmarkLeft">
            <h2>Personal Information</h2>

            <form action="" className="form">
                <div className="infoSec1">

                    <section className="personalSec sec">
                    <p>First Name</p>
                    <input type="text" className="input"/>
                    </section>

                    <section className="personalSec sec">
                    <p>Last Name</p>
                    <input type="text"className="input" />
                    </section>
                    </div>
                <div className="sec input2">
                    <p>Email Address</p>
                    <input type="text" className="input"/>
                </div>

                <div className="sec input2">
                    <p>Phone Number</p>
                    <input type="number" className="input"/>
                </div>

            </form>

            <h2>Shipping Address</h2>
            <form action="" className="form">

                <div className="sec">
                    <p>Street Address</p>
                    <input type="text" className="input"/>
                </div>

                <div className="infoSec1">
                    <section className="sec">
                        <p>State</p>
                        <input type="text" className="input"/>
                    </section>

                    <section className="sec">
                        <p>City</p>
                        <input type="text" className="input"/>
                    </section>
                </div>

                <div className="sec input3">
                    <p>Postal Code</p>
                    <input type="text" className="input"/>
                </div>
            </form>

            <h2>Payment Method</h2>
            <form action="" className="form">
                <section className="infoSec1">

                <div className="sec2">
                    <input type="radio" name="" id="" />
                    <p>Cash on Delivery</p>
                </div>

                <div className="sec2">
                    <input type="radio" name="" id="" />
                    <p>Credit or Debit</p>
                </div>
                </section>

                <div className="sec">
                    <p>Card Holder's Name</p>
                    <input type="text" className="input cardholder"/>
                </div>

                <div className="sec">
                    <p>Card Number</p>
                    <input type="text" className="input"/>
                </div>

                <section className="infoSec1">
                    <div className="sec">
                        <p>Exp Date</p>
                        <input type="text" name="" className="input"/>
                    </div>
                    <div className="sec">
                        <p>CVC</p>
                        <input type="text"className="input" />
                    </div>
                </section>
            </form>
        </section>

        <section className="bookmarkRight">
            <div className="cartnav">
                <Link to="/body" className="li">
                <h3 className="mobile caret">&lt;</h3>
                </Link>
            <h3 className="cartHeading">Cart Summary</h3>
            <h3 className="mobile mbheading">My Cart</h3>
            </div>
            <Cart/>
        </section>
        </div>
        <Footer/>
    </div>
}
export default Bookmark