require("dotenv").config();
const mongoose = require("../../config/dbConfig");
const categoryModel = require("./../../models/category-model");

const category = [
{
    category: "secs",
      },

      {
        category: "normaux", 
          },

          {
            category: "gras", 
              },

              {
                category: "mixtes", 
                  },
            
]

categoryModel
  .insertMany(category)
  .then((category) => {
    console.log(`${category.length} inserted`);
  })
  .catch((err) => console.log("no category inserted", err));
