import React, { useState } from "react";
import "./App.css";

import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Sales from "./components/Sales";

function App() {

  // useState Hook
  const [products, setProducts] = useState([]);

  // ADD PRODUCT
  const addProduct = (product) => {

    setProducts([...products, product]);
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {

    const updatedProducts = products.filter(
      (item) => item.id !== id
    );

    setProducts(updatedProducts);
  };

  // SELL PRODUCT
  const sellProduct = (
    name,
    brand,
    quantity
  ) => {

    const updatedProducts = products.map((item) => {

      if (

        item.productName.toLowerCase() ===
          name.toLowerCase()

        &&

        item.brand.toLowerCase() ===
          brand.toLowerCase()

      ) {

        return {

          ...item,

          quantity:
            item.quantity - Number(quantity)

        };
      }

      return item;
    });

    setProducts(updatedProducts);
  };

  return (

    <div className="container">

      <h1>Inventory Management System</h1>

      {/* COMPONENT 1 */}
      <AddProduct addProduct={addProduct} />

      {/* COMPONENT 2 */}
      <Sales sellProduct={sellProduct} />

      {/* COMPONENT 3 */}
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
      />

    </div>
  );
}

export default App;
