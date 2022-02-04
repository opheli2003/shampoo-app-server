const router = require("express").Router();
const reviewModel = require("../models/reviews-model");

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

//Create one review
router.post("/reviews/create", async (req, res, next) => {
  try {
    const createdReview = await reviewModel.create(req.body);
    res.status(201).json(createdReview);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
