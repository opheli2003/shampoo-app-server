require("dotenv").config();
const mongoose = require("../../config/dbConfig");
const categoryModel = require("./../../models/category-model");

const category = [
  {
    category: "secs",
    image:
      "://res.cloudinary.com/alexaiscoding/image/upload/v1644262650/Rose_et_Orange_Anne%CC%81es_70_The%CC%80me_Soldes_Publication_kipnvn.png",
  },

  {
    category: "normaux",
    image:
      "://res.cloudinary.com/alexaiscoding/image/upload/v1644262649/Rose_et_Orange_Anne%CC%81es_70_The%CC%80me_Soldes_Publication_bdcnzd.jpg",
  },

  {
    category: "gras",
    image:
      "://res.cloudinary.com/alexaiscoding/image/upload/v1644262649/Rose_et_Orange_Anne%CC%81es_70_The%CC%80me_Soldes_Publication_1_bu8vno.jpg",
  },

  {
    category: "mixtes",
    image:
      "://res.cloudinary.com/alexaiscoding/image/upload/v1644262649/Rose_et_Orange_Anne%CC%81es_70_The%CC%80me_Soldes_Publication_2_skmedj.jpg",
  },
];

categoryModel
  .insertMany(category)
  .then((category) => {
    console.log(`${category.length} inserted`);
  })
  .catch((err) => console.log("no category inserted", err));
