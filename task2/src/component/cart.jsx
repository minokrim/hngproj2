import React,{useState,useEffect} from "react";
import "../component/cart.css"
import { ReactComponent as Bin } from "../img/bin.svg";
    function Cart(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        setItems(storedItems);
      }, []);
    
      function removeItem(index) {
        const updatedItems = items.filter((item, i) => i !== index);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
      }

      function calculateTotal() {
        return items.reduce((total, item) => {
          const itemTotal = (item.price || 0) * (item.quantity || 1);
          return total + itemTotal;
        }, 0);
      }

    console.log(items)
    return <div className="cBody">

        <div className="cartMain">
        {
        items.length > 0 ? (
        items.map((item, index) => (
            
          <section className="cartSec1" key={index}>
            <section className="cartSec2">
            <img src={item.image} alt={item.name} />
            <section className="specs">
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <section>
                <p style={{ backgroundColor: item.color }}></p>
                <h4>{item.size}</h4>
              </section>
              <div>
                <p>+</p>
                <p>-</p>
              </div>
            </section>
            </section>
            <Bin className="bin" onClick={() => removeItem(index)}/>
          </section>

        ))
      ) : (
        <p className="emptycrt">Your cart is empty</p>  
      )}
        </div>
        <div className="checkout">
        <h3>Total: <span>${calculateTotal().toFixed(2)}</span></h3>
        <h3>Shipping fee: <span>$0.00</span></h3>
        <hr/>
        <h3>Grand Total: <span className="total">${calculateTotal().toFixed(2)}</span></h3>
        <button>Check Out</button>
      </div>
        </div>
}
export default Cart