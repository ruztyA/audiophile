//? PRODUCT DETAIL ROUTE

const express = require("express");

const route = express.Router();

const {
<<<<<<< HEAD
  getProduct_detail,
  getIdProduct_detail,
} = require("../controller/productDetailController");

route.get("/", getProduct_detail);
route.get("/:id", getIdProduct_detail);

module.exports = route;
=======
    getProduct_detail,
    getIdProduct_detail,

} = require('../controller/productDetailController');

route.get ("/", getProduct_detail);
route.get ("/:id", getIdProduct_detail);

module.exports = route;

>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
