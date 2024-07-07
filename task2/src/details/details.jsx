import React,{useState,useEffect} from "react";
import "../details/details.css"
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
function Details(props){

    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("items")) || [];
        setItems(storedItems);
      }, []);
      
    function addtocart() {
        const newItem = {
            image: props.image,
            name: props.name,
            price: props.price,
            description: props.description,
          };
      
          setItems((prevItems) => {
            const updatedItems = [...prevItems, newItem];
            localStorage.setItem("items", JSON.stringify(updatedItems));
            return updatedItems;
          });
      }

    return <div className="detailsMain">
        <section className="detSec1">
            <img src={props.image}alt="" />
            <div>
            <p>{props.name}</p>
            <section className="detPrice">
            <p>${props.price}</p>
            <img src={props.ratings} alt="ratings"  className="rating"/>
            </section>
            </div>
        </section>

        <section className="detSec2">
            <h2>Details</h2>
            <p>{props.description}desc</p>
            <div>
                <h2 className="heading">Size:</h2>
                <section className="size">
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                </section>
            </div>
            <div>
                <h2 className="heading">Colors Available:</h2>
                <section className="colors">
                <div id="grey"></div>
                <div id="blue"></div>
                <div id="red"></div>
                <div id="pink"></div>
                </section>
            </div>
            <button className="btn" onClick={addtocart}>Add to Cart</button>
        </section>
    </div>
}
export default Details