const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({

    category: { type: String,
        enum: ["secs", "normaux", "gras", "mixtes"],
      },
      image: String,

});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;