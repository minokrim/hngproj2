import React from "react";
import "../categories/categories.css"
function Categories(props){
    return <div>
        <section>
            <img src={props.image} alt="" />
            <div className="categories">
                <p>{props.name}</p>
                <h3>${props.price}</h3>
                <img src={props.rating} alt="" />
            </div>

        </section>
    </div>
}
export default Categories