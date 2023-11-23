const express = require("express");
const router = express.Router();

const feedController = require("../controller/feed");

router.get("/products", feedController.getProducts);

router.get("/products/new", feedController.getNewProduct);

router.get("/products/:id", feedController.getOneProduct);

router.post("/products", feedController.addNewProduct);

router.get("/products/edit/:id", feedController.getEditProduct);

router.put("/products/:id", feedController.editProduct);

router.delete("/products/:id", feedController.deleteProduct);


module.exports = router;
