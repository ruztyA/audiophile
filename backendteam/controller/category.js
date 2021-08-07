const Category = require("../database/model/categoryModel");

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find().select(["-__v"]).exec();

    if (!categories) {
      return res.status(204).send({
        statusCode: 204,
        statusText: "No Content",
      });
    } else {
      res.status(200).send({
        statusCode: 200,
        statusText: "OK",
        message: "Success to Get Categories",
        categories,
      });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
