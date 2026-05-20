import React, { useState } from "react";

function Sales({ sellProduct }) {

  const [name, setName] =
    useState("");

  const [brand, setBrand] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const handleSell = () => {

    // FORM VALIDATION
    if (
      name === "" ||
      brand === "" ||
      quantity === ""
    ) {

      alert("Please fill all fields");
      return;
    }

    sellProduct(
      name,
      brand,
      quantity
    );

    setName("");
    setBrand("");
    setQuantity("");
  };

  return (

    <div className="box">

      <h2>Sell Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
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
        placeholder="Quantity Sold"
        value={quantity}
        onChange={(e) =>
          setQuantity(e.target.value)
        }
      />

      <button onClick={handleSell}>
        Sell Product
      </button>

    </div>
  );
}

export default Sales;