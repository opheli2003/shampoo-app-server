const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({

    category: { 
        enum: ["secs", "normaux", "gras", "mixtes"],
      },

});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;