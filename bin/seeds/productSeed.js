const mongoose = require("../../config/dbConfig");
const productModel = require("./../../models/product-model");

const product = [

    {productName: "Shampoing Purifiant",
            ref: "3A",
            description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
            price: 9.99,
            image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
            stock: 10,
            category: {
            type: String,
                    enum:['cheveux-gras']},
        Type: {type: String,
        enum:['amande-douce']},
    ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
    },


    {productName: "Shampoing Purifiant",
            ref: "3F",
            description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
            price: 9.99,
            image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
            stock: 10,
            category: {
            type: String,
                    enum:['cheveux-gras']},
        Type: {type: String,
        enum:['figue-coco']},
    ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
    },

    {productName: "Shampoing Purifiant",
    ref: "3B",
    description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
    stock: 10,
    category: {
    type: String,
            enum:['cheveux-gras']},
Type: {type: String,
enum:['bambou']},
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},


{productName: "Shampoing Purifiant",
ref: "3M",
description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-gras']},
Type: {type: String,
enum:['mangue-coriandre']},
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},

{productName: "Shampoing Equilibrant",
ref: "4A",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['amande-douce']},
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},


{productName: "Shampoing Equilibrant",
ref: "4M",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['mangue-coriandre']},
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},

{productName: "Shampoing Equilibrant",
ref: "4F",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['Figue-coco']},
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},

{productName: "Shampoing Equilibrant",
ref: "4B",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['bambou']},
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},


{productName:"Shampoing énergisant à l’amande douce", 
ref: "1A", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 9.99, 
 image:"url", 
 stock: 10,
 category:'cheveux secs',
 Type:'amande douce'},

{productName:"Shampoing stimulant à la figue coco ", 
ref: "1F", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 9.99, 
 image:"url", 
 stock: 10,
 category:'cheveux secs',
 Type:'figue-coco'
},

{productName:"Shampoing stimulant à la mangue et la coriandre ", 
ref: "1M", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 9.99, 
 image:"url", 
 stock: 10,
 category:'cheveux secs',
 Type:'mangue-coriandre'},

{productName:"Shampoing vivifiant au bambou ", 
ref: "1B", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 10.99, 
 image:"url", 
 stock: 10,
 category:'cheveux secs',
 Type:'bambou'},

{productName:"Shampoing vitalisant à l'amande douce ", 
ref: "2A", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 11.99, 
 image:"url", 
 stock: 10,
 category:'cheveux normaux',
 Type:'amande douce'},

{productName:"Shampoing energisant à la figue et à la coco ", 
ref: "2F", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 11.99, 
 image:"url", 
 stock: 10,
 category:'cheveux normaux',
 Type:'figue-coco'},

{productName:"Shampoing stimulant à la mangue-coriandre ", 
ref: "2M", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 11.99, 
 image:"url", 
 stock: 10,
 category:'cheveux normaux',
 Type:'mangue-coriandre'},

{productName:"Shampoing stimulant au bambou ", 
ref: "2B", 
description: "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
 price: 11.99, 
 image:"url", 
 stock: 10,
 category:'cheveux normaux',
 Type:'bambou'}

]
productModel
  .insertMany(product)
  .then((product) => {
    console.log(`${product.length} inserted`);
  })
  .catch((err) => console.log("no product inserted"));