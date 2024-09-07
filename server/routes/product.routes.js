const express = require("express")
const {createProduct,getAllProducts,getProductsTitle,getProductsByCategory,addReview,getProductsById,addtoCart,addtoWishlist,  editProduct,deleteProduct
} = require('../controller/productController')

const uploadOnCloudinary = require("../config/cloudinaryConfig")
const { generateToken, verifyToken } = require("../utils/JWT")
const router = express.Router()
const multer = require("multer")
const verifyAdmin = require("../middleware/verifyAdmin")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

router.post('/product/create',verifyAdmin, upload.array('media'),createProduct)
router.get('/product/cate', getProductsByCategory);
router.get('/product/title',getProductsTitle);
router.get('/product/:id',getProductsById);
router.get('/products',getAllProducts);
router.post('/product/edit/:id',verifyAdmin,upload.array('media'),editProduct)
router.delete('/product/delete/:id',verifyAdmin,deleteProduct);
router.post('/product/addToCart/:id',addtoCart);
router.post('/product/addToWishlist/:id',addtoWishlist);
router.post('/product/review/:id',addReview);


module.exports = router 