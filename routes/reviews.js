const router = require("express").Router();
const reviewModel = require("../models/reviews-model");
const UserModel = require("../models/User-model")
const productModel = require ("../models/product-model")
//Routes = prefixed with /api

//Get the form to create a review
router.get("/reviews/create", (req, res, next) => {
  reviewModel
    .find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
});

//Create one review - post - create new review
router.post("/reviews/create", async (req, res, next) => {
  try {
    const createdReview = await reviewModel.create(req.body);
    res.status(201).json(createdReview);
  } catch (e) {
    next(e);
  }
});

//delete one review - post - create new review

// edit 

// like ??



module.exports = router;
