import React from "react";
import "../body/body.css"
import bg from "../img/bg.png"
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import Categories from "../categories/categories";
import Mcategory from './../categories/mcategories';
import Fcategory from './../categories/fcategories';
import Kcategory from './../categories/kcategories';
import TinbuProduct from "../tinbu/tinbuproducts";
import { Link } from "react-router-dom";

function Body(){
    function showFCategories(category){
        return<Categories
        key={category.id}
        image={category.imgURL}
        name={category.name}
        price={category.price}
        rating={category.ratings}
        />
    }


    return <div className="bodyMain">
        <Nav/>
        <section className="bodySec1">
            <img src={bg} alt="" />
            <div className="sec2Left">
                <h3>Where Style <span>Meets Comfort</span></h3>
                <p>Join us to celebrate stylish, comfy wears. Your path to extraordinary style begins here.</p>
                <Link to="/fullproduct" className="li">
                <h4 className="call2action">Get started</h4>
                </Link>
            </div>
        </section>

        <section className="products" id="products">
            <div className="productHeading">
                <h3>New Arrivals</h3>
                <h4>Get trendy with our latest arrivals</h4>
            </div>
            <TinbuProduct/>
        </section>

        <section className="catSection">
            <div className="catHeading productHeading">
                <h3>Categories</h3>
                <h4>We have different categories of wears to suit everyones need.</h4>
            </div>

            <h2 className="cattype">Female Category</h2>
            <div className="cat">
                {Fcategory.map(showFCategories)}
            </div>

            <h2 className="cattype">Male Category</h2>
            <div className="cat">
                {Mcategory.map(showFCategories)}
            </div>

            <h2 className="cattype">Kids Category</h2>
            <div className="cat kcat">
                {Kcategory.map(showFCategories)}
            </div>
        </section>
        <Footer/>
    </div>
}
export default Body