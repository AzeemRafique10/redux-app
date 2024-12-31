import React from "react";
import "./Home.css";

const Home = (props) => {
  // console.log("Home", props);
  return (
    <div className="container-cart">
      <h1>Home Component</h1>
      <div>
        <div class="cart-container">
          <div class="cart">🛒</div>
          <span class="cart-counter">{props.data.length}</span>
        </div>
        <div>
          <button
            className="addToCartButton"
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "Iphone 16" });
            }}
          >
            addToCart
          </button>
        </div>
        <div>
          <button
            className="removeToButton"
            onClick={() => {
              props.RemoveToCartHandler();
            }}
          >
            RemoveToCart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
