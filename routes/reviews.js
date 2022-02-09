const router = require("express").Router();
const reviewModel = require("../models/reviews-model");
const UserModel = require("../models/User-model")
const productModel = require ("../models/product-model")
//Routes = prefixed with /api

//Get the form to create a review
/* router.get("categories/cheveux-gras/product/:id/review/create", (req, res, next) => {
  reviewModel
    .find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
}); */

//Create one review - post - create new review
router.post("categories/cheveux-gras/product/:id/reviews/create", async (req, res, next) => {
 const {reviewTitle,review,user,product,rate,date} = {...req.body}

 const  product =await productModel.findByIdAndUpdate({rating},{new:true})
  try {
    const newReview = await reviewModel.created({reviewTitle,product:product._id,review,user:req.session.currentUser._id,rate,date})
    res.status(201).json(newReview);
  } catch (e) {
    next(e);
  }
});

//delete one review - post - create new review

// edit 

// like ??



module.exports = router;
