import React,{useState} from "react";
import "../body/body.css"
import bg from "../img/bg.png"
import { ReactComponent as VectorIcon } from "../img/Vector.svg";
import girl from "../img/girl.png"
import Products from "../products";
import Card from "../component/card";
import female from "../img/female.png"
import male from "../img/unsplash_kpvIazqLOoA.png"
import kids from "../img/unsplash_LorcFaKYk34.png"
import man from "../img/unsplash_ILip77SbmOE.png"
import { ReactComponent as VectorIcon2 } from "../img/Vector (1).svg";
import { ReactComponent as VectorIcon3 } from "../img/Vector (3).svg";
import Footermobile from "../footer/footermobile";
import Details from "../details/details";
import { Link } from "react-router-dom";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";

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
    console.log(selectedItemId)
    var selectedItem = Products.find(product => product.id === selectedItemId);

    return <div className="bodyMain">
        <Nav/>
        <section className="bodySec1">
            <img src={bg} alt="" />
        </section>

        <section className="bodySec2"> 
            <div className="sec2Left">
                <div className="vecHolder">
                <Link to="/onboarding"> <VectorIcon3 className="vec"/></Link>
                </div>
                <h3>Where Style <span>Meets Comfort</span></h3>
                <p>Join us to celebrate stylish, comfy wears. Your path to extraordinary style begins here.</p>
                <h4>Get started</h4>
            </div>
            <div className="sec2Right">
                <VectorIcon className="vectorIcon"/>
                <img src={girl} alt="" />
            </div>
        </section>

        <section className="filter">
            <input type="search" name="" id="" placeholder="Search Your Style"/>
            <VectorIcon2 className="vec2"/>
        </section>

        <section className="products">
            <div className="productHeading">
                <h3>New Arrivals</h3>
                <h4>Get trendy with our latest arrivals</h4>
                <h2 className="mobileph">see all</h2>
            </div>
            <div className="productcard">
            {Products.map(showproduct)}
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
                <h2 className="mobileph">See all</h2>
            </div>
            <div className="categories">
                <figure>
                    <img src={female} alt="" />
                    <figcaption>Female</figcaption>
                </figure>
                <figure>
                    <img src={male} alt="" />
                    <figcaption>Male</figcaption>
                </figure>
                <figure>
                    <img src={kids} alt="" />
                    <figcaption>Kids</figcaption>
                </figure>
                <figure>
                    <img src={man} alt="" />
                    <figcaption>Man</figcaption>
                </figure>
            </div>
        </section>
        <Footermobile/>
        <Footer/>
    </div>
}
export default Body