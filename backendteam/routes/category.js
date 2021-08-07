const router = require("express").Router();
const categoryController = require("../controller/category");

router.get("/categories", categoryController.getCategory);

module.exports = router;
