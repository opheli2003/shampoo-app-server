const router = require("express").Router();
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/product-model");
const UserModel = require("../models/User-model");
const isAuthenticated = require("../middlewares/jwt.middleware")

//the user must be login with an id
router.post("/cart/create",isAuthenticated, async (req, res, next) => {
  try {
    const newCart = await CartModel.create({
      userId:req.payload._id,
      products: [{ ref, quantity, productName, price }],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
    next(e);
  }
});

router.get("/cart",isAuthenticated, async (req, res, next) => {
   CartModel.find({userId:req.payload.currentUser._id})
   .then((dbResponse) => {
    res.status(200).json(dbResponse);
  })
  .catch(next);
});
   

//   let cart = await CartModel.findOne({ userId });
//   if (cart) {
//     //if cart exists for this user do sthg

//    // and if product exists in the cart, update quantity
//     }else{
//       //product does not exist in cart, add new item
//       cart.products.push({ productId, quantity, productName, price });
//     }else{
//     cart = await cart.save();
//     return res.status(201).send(cart);
//   } else if {
//     //no cart for this user, create new cart

//     return res.status(201).send(newCart);
//   }
//  catch (err) {
//   console.log(err);
//   res.status(500).send("Something went wrong");
//   next(e);
//   }
// }
//

module.exports = router;
