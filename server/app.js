require('dotenv').config()
const mongoose = require("mongoose")
// require('./config/db')
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const UserRoutes = require('./routes/user.routes');
const ProductRoutes = require('./routes/product.routes');
const expressLayout = require("express-ejs-layouts");
const path = require('path');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || process.env.OTHER_PORT;
const MONGODB_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error('Could not connect to MongoDB..', err));
app.use(express.static('public'));
app.use(cookieParser());
const corsOptions = {
    origin: process.env.ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};
app.use(cors(corsOptions));

app.use(expressLayout);
app.set("layout", './layout/main');
app.set('view engine', "ejs");

app.use("/api", UserRoutes);
app.use("/api", ProductRoutes);
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})