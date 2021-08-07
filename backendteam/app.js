require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const server = express();
const port = process.env.PORT || 3000;
require("./database/config")();

server.use(logger("dev"));
server.use(cors());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: false,
  })
);

const productDetailRouter = require("./routes/productDetailRoute");
const productCategoriesRouter= require("./routes/productCategoriesRoute");

server.use(bodyParser.json());
server.use('/api/productDetail', productDetailRouter);  
server.use('/api/productCategories', productCategoriesRouter);

server.get("/", (req, res) => {
  res.send("Audiophile");
});

server.all("*", (req, res) => {
  res.status(404).json({
    statusText: "Not Found",
    message: "You Have Trying Reaching A Route That Doesn't Exist",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
