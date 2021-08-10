//? PRODUCT CATEGORIES ROUTE

const express = require("express");

const route = express.Router();

const {
<<<<<<< HEAD
  getProduct_categories,
  getIdProduct_categories,
=======
 getProduct_categories,
 getIdProduct_categories,

>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
} = require("../controller/productCategoriesController");

route.get("/", getProduct_categories);
route.get("/:id", getIdProduct_categories);

module.exports = route;
