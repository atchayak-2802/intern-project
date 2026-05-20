import React, { useState } from "react";

function AddProduct({ addProduct }) {

  const [productName, setProductName] =
    useState("");

  const [brand, setBrand] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const handleAdd = () => {

    // FORM VALIDATION
    if (
      productName === "" ||
      brand === "" ||
      quantity === ""
    ) {

      alert("Please fill all fields");
      return;
    }

    const newProduct = {

      id: Date.now(),

      productName,
      brand,

      quantity: Number(quantity)

    };

    addProduct(newProduct);

    setProductName("");
    setBrand("");
    setQuantity("");
  };

  return (

    <div className="box">

      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) =>
          setProductName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Brand Name"
        value={brand}
        onChange={(e) =>
          setBrand(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) =>
          setQuantity(e.target.value)
        }
      />


      <button onClick={handleAdd}>
        Add Product
      </button>

    </div>
  );
}

export default AddProduct;

