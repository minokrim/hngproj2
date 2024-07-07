import React from "react";
import "../details/mobiledetail.css"
import { useParams } from "react-router-dom";
import Products from "../products";
import Details from "../details/details";
import { ReactComponent as VectorIcon3 } from "../img/Vector (3).svg";
import { Link } from "react-router-dom";
function DetailsPage() {
    const { id } = useParams();
    var product = Products.find((product) => product.id === parseInt(id));
    console.log(id)
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="detailsPage">
            <section className="detailnav">
            <Link to="/body" className="li"><h3 className="mobile caret">&lt;</h3></Link>
            <Link to="/"> <VectorIcon3 className="detailvector"/></Link>
            </section>
            <Details
                image={product.imgURL}
                name={product.name}
                price={product.price}
                description={product.description}
                ratings={product.ratings}
            />
        </div>
    );
}

export default DetailsPage;
