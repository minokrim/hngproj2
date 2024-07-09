import React from "react";
import {useNavigate } from "react-router-dom";
import "../component/card.css"

function Card(props){

  const navigate = useNavigate();
  
  const handleImageClick = () => {
    navigate(`/mobiledetails/${props.id}`);
};
    return <div>
        <section className="cardMain">
            <img src={props.image} alt="productimage" className="secImg" onClick={handleImageClick}/>
            <div className="card">
                <h3>{props.name}</h3>
                <p>${props.price}</p>
                <img src={props.ratings} alt="" />
            </div>
        </section>
    </div>
}
export default Card