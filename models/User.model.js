const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,

  lastname: String,

  email: { type: String, unique: true },

  password: String,

  adressNumber: Number,

  address: String,

  city: String,

  country: String,

  phone: Number,

  role: { type: String, default: "user" },
});

module.exports = model("User", userSchema);
