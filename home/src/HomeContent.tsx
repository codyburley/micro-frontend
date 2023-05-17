import React, { useState, useEffect } from "react";

import { getProducts, getProductById } from "./products";

import { Product } from "../../server/src/products";

const HomeContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product: Product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
