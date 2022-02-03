const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const productSchema = new Schema(

   { productName: String,

    ref: String,

    description: String,

    price: Number,

    image: String,
    stock: Number,

    category: {
    type: String,

            enum:['secs', 'normaux', 'gras', 'mixtes']       
    },

Type: {type: String,

enum:['amande-douce', 'Bamboo', 'Mangue-Coriandre', 'figue-coco']},

id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],

    
   ingredients: String}

)

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;