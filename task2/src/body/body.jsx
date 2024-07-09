import React,{useState} from "react";
import "../body/body.css"
import bg from "../img/bg.png"
import Products from "../products";
import Card from "../component/card";
import Details from "../details/details";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import Categories from "../categories/categories";
import Mcategory from './../categories/mcategories';
import Fcategory from './../categories/fcategories';
import Kcategory from './../categories/kcategories';
import Product2 from "../product2";

function Body(){
    const [selectedItemId, setSelectedItemId] = useState([]);

    function showproduct(product){
        return <Card
        key={product.id}
        id={product.id}
        image={product.imgURL}
        name={product.name}
        price={product.price}
        description={product.description}
        ratings={product.ratings}
        onImageClick={() => setSelectedItemId(product.id)}
        addToCart={() => console.log("Add to cart")} 
        />
    }

    function showFCategories(category){
        return<Categories
        key={category.id}
        image={category.imgURL}
        name={category.name}
        price={category.price}
        rating={category.ratings}
        />
    }
    console.log(selectedItemId)
    var selectedItem = Products.find(product => product.id === selectedItemId);

    return <div className="bodyMain">
        <Nav/>
        <section className="bodySec1">
            <img src={bg} alt="" />
            <div className="sec2Left">
                <h3>Where Style <span>Meets Comfort</span></h3>
                <p>Join us to celebrate stylish, comfy wears. Your path to extraordinary style begins here.</p>
                <h4 className="call2action">Get started</h4>
            </div>
        </section>

        <section className="products" id="products">
            <div className="productHeading">
                <h3>New Arrivals</h3>
                <h4>Get trendy with our latest arrivals</h4>
            </div>
            <div className="productcard">
            {Products.map(showproduct)}
            </div>
            <div className="productcard">
            {Product2.map(showproduct)}
            </div>
        </section>

        {window.innerWidth >600 && (
                <section className="dets" id="details">
                    {selectedItem && (
                        <section className="selectedItemDetails">
                            <Details
                                key={selectedItem.id}
                                image={selectedItem.imgURL}
                                name={selectedItem.name}
                                price={selectedItem.price}
                                description={selectedItem.description}
                                ratings={selectedItem.ratings}
                            />
                        </section>
                    )}
                </section>
            )}

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