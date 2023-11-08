import React from "react";
import product from "../db/data";
const Product = () => {
  return (
    <div className="main-dev">
      <h1>Product</h1>
      <ul className="products">
        {product.map((product) => {
          return (
            <li key={product.id}>
              <div>
                <div className="img-container">
                  <img src={product.img} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.company}</p>
                <p>{product.newPrice} $</p>
                <button>buy now</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Product;
