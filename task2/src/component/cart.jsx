import React, { useState, useEffect } from "react";
import "../component/cart.css";
import { ReactComponent as Bin } from "../img/bin.svg";
import { Link } from "react-router-dom";
import Nav from "../navbar/navbar";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    // Initialize the quantity for each item if it's not already set
    const itemsWithQuantity = storedItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setItems(itemsWithQuantity);
  }, []);

  const add = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const subtract = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  return (
    <div className="cBody">
      <Nav />
      <div className="cartMain">
        <h3 className="cartHeading">Cart Summary</h3>

        {items.length > 0 ? (
          items.map((item, index) => (
            <section className="cartSec1" key={index}>
              <section className="cartSec2">
                <img src={item.image} alt={item.name} />
                <section className="specs">
                  <h2>{item.name}</h2>
                  <h3>${item.price}</h3>
                  <section>
                    <p style={{ backgroundColor: item.color }}></p>
                    <h4>{item.size}</h4>
                  </section>
                  <div className="quantity">
                    <p onClick={() => add(index)}>+</p>
                    <h3>{item.quantity}</h3>
                    <p onClick={() => subtract(index)}>-</p>
                  </div>
                </section>
              </section>
              <Bin className="bin" onClick={() => removeItem(index)} />
            </section>
          ))
        ) : (
          <p className="emptycrt">Your cart is empty</p>
        )}
      </div>
      <div className="checkout">
        <h3>Total: <span>${calculateTotal().toFixed(2)}</span></h3>
        <h3>Shipping fee: <span>$0.00</span></h3>
        <hr />
        <h3>Grand Total: <span className="total">${calculateTotal().toFixed(2)}</span></h3>
        <Link to="/bookmark" className="li">
          <button>Check Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
