require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
<<<<<<< HEAD
const path = require("path");
=======
const bodyParser = require("body-parser");
const path = require('path')
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe

const server = express();
const port = process.env.PORT || 3000;
require("./database/config")();

<<<<<<< HEAD
=======
const categoryRoute = require("./routes/categoryRoute");

>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
server.use(logger("dev"));
server.use(cors());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: false,
  })
);
<<<<<<< HEAD

server.use("/assets", express.static(path.join(__dirname, "assets")));

const productDetailRouter = require("./routes/productDetailRoute");
const productCategoriesRouter = require("./routes/productCategoriesRoute");
const checkoutRoute = require("./routes/checkoutRoute");
const customerRoute = require("./routes/customerRoute");

server.use("/api/productDetail", productDetailRouter);
server.use("/api/productCategories", productCategoriesRouter);
server.use("/api/checkout", checkoutRoute);
server.use("/api/customer", customerRoute);
=======
server.use('/assets', express.static(path.join(__dirname, 'assets')))

server.use("/audiophile/api", categoryRoute);

const productDetailRouter = require("./routes/productDetailRoute");
const productCategoriesRouter= require("./routes/productCategoriesRoute");

server.use(bodyParser.json());
server.use('/api/productDetail', productDetailRouter);  
server.use('/api/productCategories', productCategoriesRouter);
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe

server.get("/", (req, res) => {
  res.send("Audiophile");
});

server.all("*", (req, res) => {
  res.status(404).json({
<<<<<<< HEAD
    statusCode: 404,
=======
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
    statusText: "Not Found",
    message: "You Have Trying Reaching A Route That Doesn't Exist",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
