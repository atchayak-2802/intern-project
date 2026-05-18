

// App.js

import './App.css';

function App() {

  const showPage = (pageId) =>
  {
    let pages =
    document.querySelectorAll('.page');

    pages.forEach((page) =>
    {
      page.style.display = 'none';
    });

    document.getElementById(pageId)
    .style.display = 'block';
  };

  return (

    <div className="layout">

      {/* SIDEBAR / TOPBAR */}

      <div className="sidebar">

        <h2>Smart Inventory</h2>

        <div>

          <a
          href="#dashboard"
          onClick={() => showPage('dashboard')}
          >
            Dashboard
          </a>

          <a
          href="#addproduct"
          onClick={() => showPage('addproduct')}
          >
            Add Product
          </a>
          <a
          href="#sales"
          onClick={() => showPage('sales')}
          >
            Sales
          </a>

          <a
          href="#inventory"
          onClick={() => showPage('inventory')}
          >
            Inventory
          </a>
          

          <a
          href="#alerts"
          onClick={() => showPage('alerts')}
          >
            Alerts
          </a>

          <a
          href="#analytics"
          onClick={() => showPage('analytics')}
          >
            Analytics
          </a>

          
          

        </div>

      </div>



      {/* MAIN */}

      <div className="main">


        {/* DASHBOARD PAGE */}

        <div id="dashboard" className="page">

          <h1>
            Smart Inventory Dashboard
          </h1>

          <div className="stats">

            <div className="card red">

              <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
              alt="products"
              width="60"
              />

              <h3>Total Products</h3>
              <p>250</p>

            </div>


            <div className="card green">

              <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="sales"
              width="60"
              />

              <h3>Total Sales</h3>
              <p>₹50,000</p>

            </div>


            <div className="card yellow">

              <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="expiry"
              width="60"
              />

              <h3>Expiring Soon</h3>
              <p>12 Items</p>

            </div>


            <div className="card profit">

              <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
              alt="profit"
              width="60"
              />

              <h3>Total Profit</h3>
              <p>₹12,500</p>

            </div>

          </div>

        </div>



        {/* ADD PRODUCT PAGE */}

        <div
        id="addproduct"
        className="page"
        style={{display:'none'}}
        >

          <div className="section">

            <h2>Add Product</h2>

            <input
            type="text"
            placeholder="Product Name"
            />

            <input
            type="text"
            placeholder="Brand Name"
            />

            <input
            type="number"
            placeholder="Quantity"
            />
            <input
            type="number"
            placeholder="Buying price"
            />
            <input
            type="number"
            placeholder="Selling price"
            />

            <input
            type="date" placeholder="Expiry date"
            />

            <button>
              Add Product
            </button>

          </div>

        </div>

      <div
id="sales"
className="page"
style={{display:'none'}}
>

  <div className="section">

    <h2>Sales</h2>

    

    <input
    type="text"
    placeholder="Product Name"
    />
     <input
    type="text"
    placeholder="Brand Name"
    />

    <input
    type="number"
    placeholder="Quantity Sold"
    />

    

    <button>
      Add Sale
    </button>

  </div>



  <div className="section">

    <h2>Recent Sales</h2>

    <table>

      <tr>
       
        <th>Product</th>
        <th>Brand</th>
        <th>Quantity</th>
      </tr>

      <tr>
        
        <td>Noodles</td>
        <td>Maggie</td>
        <td>₹60</td>
      </tr>

      <tr>
        
        <td>Noodles</td>
        <td>Yippie</td>
        <td>₹90</td>
      </tr>

    </table>

  </div>

</div>


        {/* INVENTORY PAGE */}

        <div
        id="inventory"
        className="page"
        style={{display:'none'}}
        >

          <div className="section">

            <h2>Inventory</h2>

            <table>

              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Expiry</th>
              </tr>

              <tr>
                <td>Milk</td>
                <td>Amul</td>
                <td>50</td>
                <td>2 Days</td>
              </tr>

              <tr>
                <td>Noodles</td>
                <td>Maggi</td>
                <td>25</td>
                <td>20 Days</td>
              </tr>

            </table>

          </div>

        </div>



        {/* ALERTS PAGE */}

        <div
        id="alerts"
        className="page"
        style={{display:'none'}}
        >

          <div className="section alert">

            <h2>Alerts</h2>

            <p>
              ⚠ Milk expires in 2 days
            </p>

            <p>
              ⚠ Maggi stock low
            </p>

            <p>
              ⚠ Remove expired items immediately
            </p>

          </div>

        </div>



        {/* ANALYTICS PAGE */}

        <div
        id="analytics"
        className="page"
        style={{display:'none'}}
        >

          <div className="section">

            <h2>Profit Analytics</h2>

            <table>

              <tr>
                <th>Product</th>
                <th>Buy Price</th>
                <th>Sell Price</th>
                <th>Profit</th>
              </tr>

              <tr>
                <td>Milk</td>
                <td>₹20</td>
                <td>₹30</td>
                <td>₹10</td>
              </tr>

              <tr>
                <td>Maggi</td>
                <td>₹12</td>
                <td>₹18</td>
                <td>₹6</td>
              </tr>

            </table>

          </div>



          {/* BRAND ANALYTICS */}

          <div className="section">

            <h2>Brand Analytics</h2>

            <div className="pie">

              <div className="bar blue">
                Amul - 60%
              </div>

              <div className="bar orange">
                Nestle - 30%
              </div>

              <div className="bar gray">
                Others - 10%
              </div>

            </div>

          </div>



          {/* SMART SUGGESTIONS */}

          <div className="section">

            <h2>Smart Suggestions</h2>

            <p>
              ✔ Restock Maggi
              (high demand)
            </p>

            <p>
              ✔ Offer discount on Milk
              (near expiry)
            </p>

            <p>
              ✔ Remove expired items
              immediately
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
