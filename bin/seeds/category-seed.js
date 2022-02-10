require("dotenv").config();
const mongoose = require("../../config/dbConfig");
const categoryModel = require("./../../models/category-model");

const category = [
  {
    category: "secs",
    image:
      "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/gel-de-douche_2-404277_c5777a2d-c26f-4604-bd69-d1513e4cf49f-762398_70x_2x_mv1n4y.jpg",
  },

  {
    category: "normaux",
    image:
      "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/gel-de-douche_4-922103_b2232fd3-626e-432e-b1a2-1b747f4a2ce0-490460_70x_2x_mfm0re.jpg",
  },

  {
    category: "gras",
    image:
      "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/gel-de-douche_3-725346_a016c90a-00ea-4eee-8084-14b734d9b7c7-439405_70x_2x_lo8i0a.jpg",
  },

  {
    category: "mixtes",
    image:
      "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/gel-de-douche_4-922103_b2232fd3-626e-432e-b1a2-1b747f4a2ce0-490460_70x_2x_mfm0re.jpg",
  },
];

categoryModel
  .insertMany(category)
  .then((category) => {
    console.log(`${category.length} inserted`);
  })
  .catch((err) => console.log("no category inserted", err));
