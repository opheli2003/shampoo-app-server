const router = require("express").Router();
const ProductModel = require("../models/product-model");
const fileUploader = require("../config/cloudinary")
//Routes = prefixed with /api

//Get all products
router.get("/products", (req, res, next) => {
  ProductModel.find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
});

router.get("/products/create", (req, res, next) => {
  ProductModel.find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
});

//Create one product
router.post("/products/create", async (req, res, next) => {

  
  try {
    const createdProduct = await ProductModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (e) {
    next(e);
  }
});

//Get one product
router.get("/products/:id", async (req, res, next) => {

  try {
    const oneProduct = await ProductModel.findById(req.params.id);
    res.status(200).json(oneProduct);
  } catch (error) {
    next(error);
  }
});

//Update one product
router.patch("/products/update/:id",fileUploader.single('image'), async (req, res, next) => {
  console.log(req.body)
  if (!req.file) updatedImage = undefined;
  else updatedImage= req.file.path;
  console.log(updatedImage);

  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); 
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

//Remove one product  
router.delete("/products/delete/:id", async (req, res, next) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "successful delete" });
  } catch (error) {
    next(error);
  }
});



// GET all product by categories GRAS 

router.get('/categories/cheveux-gras', (req, res, next) => {
  ProductModel.find({category:'gras'})
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
})

// GET all product by categories SECS 

router.get('/categories/cheveux-secs', (req, res, next) => {
  ProductModel.find({ category: 'secs' })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
})

// GET all product by categories NORMAUX 

router.get('/categories/cheveux-normaux', (req, res, next) => {
  ProductModel.find({ category: 'normaux' })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
})
// GET all product by categories NORMAUX 

router.get('/categories/cheveux-mixtes', (req, res, next) => {
  ProductModel.find({ category: 'mixtes' })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch(next);
})
module.exports = router;
