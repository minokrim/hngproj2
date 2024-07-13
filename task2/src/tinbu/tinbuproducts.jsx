import React, { useState, useEffect } from 'react';
import "../tinbu/tinbuproducts.css"
import { Link } from 'react-router-dom';
import star from "../img/star (1).png"
import larrow from "../img/left-arrow.png"
import rarrow from "../img/right-arrow.png"

function TinbuProduct() {
  const [products, setProducts] = useState([]);
  const [pagenumber, setpagenumber] = useState(1);

  const baseUrl = 'https://api.timbu.cloud/images/';
  
  const GetProducts = async () => {
    try {
      const response = await fetch(`https://api.timbu.cloud/products?organization_id=bf81e4f5166f4edbac7368ac9d694e12&reverse_sort=false&page=${pagenumber}&size=10&Appid=4U5LHQ7XFMICWKX&Apikey=96fa720873594a25ac36242650efbf3720240713025739583816`);
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
  }, [pagenumber]); 

  function nextpage() {
    if (pagenumber < 3) {
      setpagenumber(pagenumber + 1);
    }
  }

  function prevpage() {
    if (pagenumber > 1) {
      setpagenumber(pagenumber - 1);
    }
  }

  return (
    <div>
      <Link to="/fullproduct" className='vallink'>
      <section className='vall'>
      <h2>View all</h2>
      <img src={rarrow} alt="" />
      </section>
      </Link>
      <section className='prodmain'>
        {products.map((product) => (
          <div key={product.id} className='prodsec'>
            <Link to={`/product/${product.id}`}>
            <img src={`${baseUrl}${product.photos[2]?.url || ''}`} alt="" className='prodimg'/>
            </Link>
            <p>{product.name}</p>
            {product.current_price.map((priceData, index) => (
              <div key={index} className='pricer'>
                <h4>${priceData.CAD[0]}</h4>
                <img src={star} alt="rating" className='ratings'/>
              </div>
            ))}
          </div>
        ))}
        <section className='prodpage'>
        <div className='pg pg1' onClick={prevpage}>
          <img src={larrow} alt="" />
          <h3>Prev</h3>
        </div>
        <div className='pg pg2' onClick={nextpage}>
          <h3>Next</h3>
          <img src={rarrow} alt="" />
        </div>
      </section>
      </section>
    </div>
  );
}

export default TinbuProduct;
