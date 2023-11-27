const express = require("express");
const router = express.Router();

const feedController = require("../controller/feed");

const farmController = require("../controller/farm");

router.get("/products", feedController.getProducts);

router.get("/products/new", feedController.getNewProduct);

router.get("/products/:id", feedController.getOneProduct);

router.post("/products", feedController.addNewProduct);

router.get("/products/edit/:id", feedController.getEditProduct);

router.put("/products/:id", feedController.editProduct);

router.delete("/products/:id", feedController.deleteProduct);

//farm routes

router.get('/farms', farmController.getFarms)

router.get('/farms/new', farmController.getNewFarm)

router.get('/farms/:id', farmController.getOneFarm)

router.post('/farms', farmController.addNewFarm)

router.get('/farms/:id/products/new', farmController.getAddFarmProduct)

router.post('/farms/:id/products', farmController.addFarmProduct)

router.delete('/farms/:id', farmController.deleteFarm)


module.exports = router;
