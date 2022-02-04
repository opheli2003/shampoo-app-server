const router = require("express").Router()
const ProductModel = require("../models/product-model")

router.get("/products",(req, res, next)=>{
    ProductModel.find()
    .then((dbResponse)=>{
        res.status(200).json(dbResponse)
    })
    .catch(next)
})



module.exports = router