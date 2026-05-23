
const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");


const app = express();


// CONNECT DATABASE
connectDB();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use("/products", productRoutes);


// SERVER
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
