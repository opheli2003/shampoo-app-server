require("dotenv").config();
require("../../config/dbConfig");
const productModel = require("./../../models/product-model");

const product = [
  {
    productName: "Shampoing Purifiant",
    ref: "3A",
    description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "gras",

    type: "amande-douce",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing Purifiant",
    ref: "3F",
    description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_FIGUE_COCO_4_MOIS_8992-481831_70x_2x_lvzrzs.png",
    stock: 10,
    category: "gras",
    type: "figue-coco",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing Purifiant",
    ref: "3B",
    description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_OCEAN_4_MOIS_8997-556078_70x_2x_zgbmjt.png",
    stock: 10,
    category: "gras",
    type: "bambou",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing Purifiant",
    ref: "3M",
    description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "gras",
    type: "mangue-coriandre",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing Equilibrant",
    ref: "4A",
    description:
      "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "mixtes",
    type: "amande-douce",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing Equilibrant",
    ref: "4M",
    description:
      "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "mixtes",
    type: "mangue-coriandre",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing Equilibrant",
    ref: "4F",
    description:
      "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_FIGUE_COCO_4_MOIS_8992-481831_70x_2x_lvzrzs.png",
    stock: 10,
    category: "mixtes",
    type: "figue-coco",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing Equilibrant",
    ref: "4B",
    description:
      "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_OCEAN_4_MOIS_8997-556078_70x_2x_zgbmjt.png",
    stock: 10,
    category: "mixtes",
    type: "bambou",
    ingredients:
      "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing énergisant à l’amande douce",
    ref: "1A",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "secs",
    type: "amande-douce",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing stimulant à la figue coco ",
    ref: "1F",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_FIGUE_COCO_4_MOIS_8992-481831_70x_2x_lvzrzs.png",
    stock: 10,
    category: "secs",
    type: "figue-coco",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing stimulant à la mangue et la coriandre ",
    ref: "1M",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 9.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "secs",
    type: "mangue-coriandre",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing vivifiant au bambou ",
    ref: "1B",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 10.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_OCEAN_4_MOIS_8997-556078_70x_2x_zgbmjt.png",
    stock: 10,
    category: "secs",
    type: "bambou",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing vitalisant à l'amande douce ",
    ref: "2A",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 11.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "normaux",
    type: "amande-douce",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing energisant à la figue et à la coco ",
    ref: "2F",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 11.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_FIGUE_COCO_4_MOIS_8992-481831_70x_2x_lvzrzs.png",
    stock: 10,
    category: "normaux",
    type: "figue-coco",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing stimulant à la mangue-coriandre ",
    ref: "2M",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 11.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504911/LIFESTYLE_GELDOUCHE_AMANDE_4_MOIS_8982-433352_1024x1024_2x_zeje76.png",
    stock: 10,
    category: "normaux",
    type: "mangue-coriandre",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },

  {
    productName: "Shampoing stimulant au bambou ",
    ref: "2B",
    description:
      "CE QUE CE PRODUIT FAIT. Des cheveux nourris et adoucis grâce à ce shampoing 100% naturel, merci la formule enrichie en huile de carthame et de tournesol aux vertus hydratantes et anti-oxydantes",
    price: 11.99,
    image: "https://res.cloudinary.com/alexaiscoding/image/upload/v1644504910/LIFESTYLE_GELDOUCHE_OCEAN_4_MOIS_8997-556078_70x_2x_zgbmjt.png",
    stock: 10,
    category: "normaux",
    type: "bambou",
    ingredients:
    "AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM",
  },
];

productModel
  .insertMany(product)
  .then((product) => {
    console.log(`${product.length} inserted`);
  })

  .catch((err) => console.log("no product inserted", err));
