const router = require("express").Router();
const reviewModel = require("../models/reviews-model");
const UserModel = require("../models/User-model")
const productModel = require ("../models/product-model")
const isAuthenticated = require("../middlewares/jwt.middleware");
const fileUploader = require("../config/cloudinary");

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
router.post("/product/:id/reviews", fileUploader.single("image"), async (req, res, next) => {
  let image; 
 if(req.file) image= req.file.path;
  console.log(image);
  
const {reviewTitle,review,rating} = req.body
const productId = req.params.id 
  try {
    const newReview = await reviewModel.create({reviewTitle,product:productId,review,rating,date:Date.now(),image})
    res.status(201).json(newReview);
  } catch (e) {
    next(e);
  }
});


/* const newReview = await reviewModel.create({reviewTitle,product:product._id,review,user:req.payload._id,rating,date})
 */
/* utiliser le payload middleware jwvt...
 *//* const  product = sawait productModel.findByIdAndUpdate({rating},{new:true})
 */


//delete one review - post - create new review

// edit 

// like ??



module.exports = router;
