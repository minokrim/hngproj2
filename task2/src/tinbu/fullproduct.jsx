import React,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import star from "../img/star (1).png"
import "../tinbu/fullproduct.css"
import Nav from "../navbar/navbar";
import young from "../img/young.jpg"
import Footer from "../footer/footer";
function Fullproduct(){
    const [products, setProducts] = useState([]);
    const baseUrl = 'https://api.timbu.cloud/images/';
    const GetProducts = async () => {
        try {
          const response = await fetch(`https://api.timbu.cloud/products?organization_id=bf81e4f5166f4edbac7368ac9d694e12&reverse_sort=false&page=1&size=30&Appid=4U5LHQ7XFMICWKX&Apikey=96fa720873594a25ac36242650efbf3720240713025739583816`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data.items);
        } catch (error) {
          console.error('Error fetching the products:', error);
        }
      };
    
      useEffect(() => {
        GetProducts();
      }, []); 
    
    return <div>
        <Nav/>
        <div className="prodbag">
            <img src={young} alt="" />
            <h1>PRODUCTS</h1>
        </div>
        <section className="fprodmain">
        {products.map((product) => (
          <div key={product.id} className='fprodsec'>
            <Link to={`/product/${product.id}`}>
            <img src={`${baseUrl}${product.photos[2]?.url || ''}`} alt="" className='fprodimg'/>
            </Link>
            <p>{product.name}</p>
            {product.current_price.map((priceData, index) => (
              <div key={index} className='fpricer'>
                <h4>${priceData.CAD[0]}</h4>
                <img src={star} alt="rating" className='fratings'/>
              </div>
            ))}
          </div>
        ))}
        </section>
        <Footer/>
    </div>
}
export default Fullproduct