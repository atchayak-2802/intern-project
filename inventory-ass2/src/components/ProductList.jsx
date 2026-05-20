import React from "react";

function ProductList({

  products,
  deleteProduct

}) {

  return (

    <div className="box">

      <h2>Inventory List</h2>

      <table>

        <thead>

          <tr>
            <th>Product</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {/* map() FUNCTION */}

          {products.map((item) => (

            <tr key={item.id}>

              <td>{item.productName}</td>

              <td>{item.brand}</td>

              <td>{item.quantity}</td>

              <td>

                <button
                  className="delete"
                  onClick={() =>
                    deleteProduct(item.id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductList;

