const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      //   ref: String,
      quantity: Number,
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      //   productName: String,
      //   price: Number,
    },
  ],
});

const cartModel = mongoose.model("Cart", cartSchema);

module.exports = cartModel;
