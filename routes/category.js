const router = require("express").Router()
const productModel = require("../models/product-model");
const categoryModel = require("../models/category-model")

// ROUTES VERIFIED //
//
//
//
// ALL CATEGORIES - GET

  router.get("/categories", (req, res, next) => {
    categoryModel.find()
      .then((dbRes) => {
        res.status(200).json(dbRes);
      })
      .catch(next);
  });

// CREATE CATEGORIE - POST

  router.post("/category/create", async (req, res, next) => {
    try {
      const createdCategory = await categoryModel.create(req.body);
      res.status(201).json(createdCategory);
    } catch (e) {
      next(e);
    }
  });
  

// UPDATE CATEGORY - PATCH

router.patch("/category/update/:id", (req, res, next) => {
  categoryModel.findByIdAndUpdate(req.params.id, req.body, {new:true}) 
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch(next);
});

//DELETE CATEGORY - GET 

  router.get("/category/delete/:id", async (req, res, next) => {
    try {
      const oneCategory = await categoryModel.findByIdAndDelete(req.params.id)
      res.status(200).json(oneCategory);
    } catch (error) {
      next(error);
    }
  });

module.exports = router; 