const express = require("express");

const router = express.Router();

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");


// GET
router.get("/", getProducts);


// POST
router.post("/", addProduct);


// PUT
router.put("/:id", updateProduct);


// DELETE
router.delete("/:id", deleteProduct);


module.exports = router;