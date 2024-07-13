import React, { useState, useEffect } from "react";
import "../tinbu/tinbudetails.css";
import "../tinbu/details.css"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import star from "../img/star.png"

function TinbuDetails() {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState(null); 
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { id } = useParams();
  const baseUrl = 'https://api.timbu.cloud/images/';

  const GetProduct = async () => {
    try {
      const response = await fetch(`https://api.timbu.cloud/products/${id}?organization_id=bf81e4f5166f4edbac7368ac9d694e12&Appid=4U5LHQ7XFMICWKX&Apikey=96fa720873594a25ac36242650efbf3720240713025739583816&currency_code=cad`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching the product:', error);
    }
  };

  useEffect(() => {
    GetProduct();
  }, []);


  useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      setItems(storedItems);
    }, []);
    
  function addtocart() {
      const newItem = {
          image: baseUrl+product.photos[0].url,
          name: product.name,
          price: product.current_price,
          description: product.description,
          size: selectedSize,
          color: selectedColor,
        };
    
        setItems((prevItems) => {
          const updatedItems = [...prevItems, newItem];
          localStorage.setItem("items", JSON.stringify(updatedItems));
          return updatedItems;
        });

        Swal.fire({
          icon: "success",
          title: "Added",
          text: "Successfully added to cart",
        });
    }

    function changeimage1(){
      var newimage=document.getElementById("newimage1").src
      document.getElementById("oldimage").src=newimage
    }
    function changeimage2(){
      var newimage=document.getElementById("newimage2").src
      document.getElementById("oldimage").src=newimage
    }
    function changeimage3(){
      var newimage=document.getElementById("newimage3").src
      document.getElementById("oldimage").src=newimage
    }


  return (
    <div>
        <Nav/>
        <div className="tdetailsmain">
        {product && (
        <section key={product.id} className="tdetails">
            <div className="tdetsec1">
            <img src={`${baseUrl}${product.photos && product.photos.length > 0 ? product.photos[1].url : ''}`} alt="" id="oldimage"/>
            <div className="tdetsec1info">
            <h3>{product.name}</h3>
            <section className="detrating">
                <h4>${product.current_price}</h4>
                <img src={star} alt="" />
            </section>
            <div className="gallery">
            <img src={`${baseUrl}${product.photos && product.photos.length > 0 ? product.photos[0].url : ''}`} alt="" id="newimage1" onClick={changeimage1}/>
            <img src={`${baseUrl}${product.photos && product.photos.length > 0 ? product.photos[2].url : ''}`} alt="" id="newimage2" onClick={changeimage2}/>
            <img src={`${baseUrl}${product.photos && product.photos.length > 0 ? product.photos[1].url : ''}`} alt="" id="newimage3" onClick={changeimage3}/>
            </div>
            </div>
            </div>
          <section className="tdetsec2">
            <h2>Details</h2>
          <h4>{product.description}</h4>

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
        </section>
      )}
        </div>
        <Footer/>
    </div>
  );
}

export default TinbuDetails;
