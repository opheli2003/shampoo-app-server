const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewTitle: String,

  review: String,

  user: { type: Schema.Types.ObjectId, ref: "User" },

  product: { type: Schema.Types.ObjectId, ref: "product" },

  rating: Number,
  date: {type: Date, default: Date.now},

  image: String,
});

const reviewModel = mongoose.model("Review", reviewSchema);

module.exports = reviewModel;
