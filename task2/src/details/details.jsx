import React,{useState,useEffect} from "react";
import "../details/details.css"
import Navv from "../nav2/nav2.jsx";
function Details(props){
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
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
            size: selectedSize,
            color: selectedColor,
          };
      
          setItems((prevItems) => {
            const updatedItems = [...prevItems, newItem];
            localStorage.setItem("items", JSON.stringify(updatedItems));
            return updatedItems;
          });
      }

    return <div className="detailsMain">
                <Navv/>
        <div className="detailbody">
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
                    <p onClick={() => setSelectedSize('S')} id="small" className="size">S</p>
                    <p onClick={() => setSelectedSize('M')}  id="medium" className="size">M</p>
                    <p onClick={() => setSelectedSize('L')}  id="large" className="size">L</p>
                    <p onClick={() => setSelectedSize('XL')} id="extralarge" className="size">XL</p>
                </section>
            </div>
            <div>
                <h2 className="heading">Colors Available:</h2>
                <section className="colors">
                <div onClick={() => setSelectedColor('grey')} id="grey" className="color"></div>
                <div onClick={() => setSelectedColor('blue')} id="blue" className="color"></div>
                <div onClick={() => setSelectedColor('red')} id="red" className="color"></div>
                <div onClick={() => setSelectedColor('pink')} id="pink" className="color"></div>
                </section>
            </div>
            <button className="btn" onClick={addtocart}>Add to Cart</button>
        </section>
        </div>
    </div>
}
export default Details