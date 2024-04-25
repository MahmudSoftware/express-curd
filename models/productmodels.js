const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is require"],
    },
    quantity: {
      type: String,
      require: [true, "Quantity is require"],
    },
    price: {
      type: String,
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product",productSchema)
module.exports= Product

