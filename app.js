require("dotenv").config();
require("./config/dbConfig");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();

//? Services like heroku use something called a proxy and you need to add this to your server
app.set("trust proxy", 1);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	cors({
		credentials: true,
		origin: process.env.FRONTEND_URL || "http://localhost:3000",
	})
);

app.use("/", require("./routes/index"));
app.use("/api/auth", require("./routes/auth"));

// PRODUCT ROUTE
app.use("/api", require("./routes/product"))
app.use("/api", require("./routes/reviews"))

//CATEGORY ROUTE 
app.use("/api", require("./routes/category"))

//CART Route
app.use("/api", require("./routes/cart"))

module.exports = app;
