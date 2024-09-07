const User = require('../models/user.model'); // Assuming User model is in the models directory
const Product = require('../models/product.model');
const verifyAdmin = require('../middleware/verifyAdmin');
const getPublicIdFromUrl = require("../utils/getPublicIdFromUrl")
const  uploadOnCloudinary  = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const { generateToken, verifyToken } = require('../utils/JWT'); // Assuming you have a utility for token generation
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
const cloudinary = require("cloudinary")
const  sendEmail  = require('../utils/sendEmail');
const {generateOTP,verifyOTP,storeOTP,storeAccountVerificationOTP} = require('../utils/otpGenerator')

const createProduct=async(req,res)=>{
  console.log(req.body);
  console.log(req.files);
const {name,description,price,discount,stocks,categories}=req.body
  console.log(name,description,price,discount,stocks,categories);
try {
  const token = req.cookies.token;
  console.log(token);
    const decoded = verifyToken(token)
    if(!decoded){
        return res.status(401).json({ error: 'Authentication error. Please sign in.' });
    }
    const currentUserId = decoded.id
    const mediaUrls = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await uploadOnCloudinary(file.path); 
        mediaUrls.push(result.secure_url);
      }
    }    
    const finalPrice = price - (price * (discount / 100));
    const newProduct = new Product({
        name,
        description,
        media: mediaUrls,
        price,
        discount,
        finalPrice,
        stocks,
        categories,
        userId:currentUserId
    })
      await newProduct.save();
      res.status(201).json(newProduct);

} catch (error) {
    
  console.error('Error creating product:', error);
  res.status(500).json({ error: error.message });
}
}
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const getProductsTitle = async (req, res) => {
  const {title} = req.body
  console.log(title);
  
  if(!title){ 
    res.status(400).json({ error: 'Please provide title' });
  }
  try {
    const products = await Product.find({ name: { $regex: title, $options: 'i' } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}
const getProductsByCategory = async (req, res) => {
  const {category} = req.body
  console.log(category,"cagory");
  
  if(!category){ 
    res.status(400).json({ error: 'Please provide category' });
  }
  try {
    const products = await Product.find({ categories: { $regex: category, $options: 'i' } });
    console.log(products);
    
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const getProductsById = async (req, res) => {
  const id = req.params.id
  console.log(id);
  
  if(!id){ 
    res.status(400).json({ error: 'Please provide product id' });
  }
  try {
    const products = await Product.findById({ _id: id }).select('-dateAdded -lastUpdated -userId -__v');
     res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}
const editProduct = async (req, res) => {
  const id = req.params.id;
  const { name, description, price, discount, stocks, categories, mediaToDelete } = req.body;
  con
  try {
    // Find the product by ID
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update product fields only if they are provided
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) {product.price = price
      product.finalPrice = price - (price * ((discount|| product.discount) / 100));
    };
    if (discount){ product.discount = discount;
      product.finalPrice = (price|| product.price) - ((price||product.price) * (discount / 100));
    }
    if(price&&discount) product.finalPrice = price - (price * (discount / 100));
    if (stocks) product.stocks = stocks;
    if (categories) product.categories = categories;

    // Handle media deletion
    if (mediaToDelete && mediaToDelete.length > 0) {
      for (const mediaUrl of mediaToDelete) {
        // Extract public ID from the URL
        const publicId = getPublicIdFromUrl(mediaUrl);
        
        // Remove the media from Cloudinary
        await cloudinary.uploader.destroy(publicId);

        // Remove the media reference from the product's media array
        product.media = product.media.filter(media => media !== mediaUrl);
      }
    }
    const mediaUrls = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await uploadOnCloudinary(file.path); 
        mediaUrls.push(result.secure_url);
      }
    }
    // Save the updated product
    await product.save();

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id 
  if(!id){
    res.status(400).json({ error: 'Please provide product id' });
  }
  try {
    const product = await Product.findById(id);
    if (product && product.media.length > 0) {
      for (const mediaUrl of product.media) {
        // Extract public ID from the URL
        const publicId = getPublicIdFromUrl(mediaUrl);
        
        // Remove the media from Cloudinary
        await cloudinary.uploader.destroy(publicId);
        console.log(publicId,"deleted");

        // Remove the media reference from the product's media array
        product.media = product.media.filter(media => media !== mediaUrl);
        
      }
    }
    const products = await Product.findByIdAndDelete(id)
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const addtoCart = async(req,res)=>{
  const id = req.params.id
  const {quantity} = req.body
  if (!id) {
    res.status(400).json({ error: 'Please provide product id' });
  }
try {
  const token = req.cookies.token 
  if(!token){
    res.status(401).json({ error: 'Authentication error. Please sign in.' });
  }
    const decoded = verifyToken(token)
    if(!decoded){
        return res.status(401).json({ error: 'Authentication error. Please sign in.' });
    }
    const currentUserId = decoded.id
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const user = await User.findById(currentUserId)
    if(user.userType === 'admin'){
      return res.status(403).json({ error: 'Admin is not authorized to perform this action.' });
    }
    user.cart.push({productId:product._id,quantity,price:(product.finalPrice*quantity)})
    await user.save()
    res.status(202).json({ message: 'Product added to cart successfully' ,cart: user.cart});
  } catch (error) {
  return  res.status(500).json({ error: error.message });
}
}
const addtoWishlist = async(req,res)=>{
  const id = req.params.id
  if (!id) {
    res.status(400).json({ error: 'Please provide product id' });
  }
try {
  const token = req.cookies.token 
  if(!token){
    res.status(401).json({ error: 'Authentication error. Please sign in.' });
  }
    const decoded = verifyToken(token)
    if(!decoded){
        return res.status(401).json({ error: 'Authentication error. Please sign in.' });
    }
    const currentUserId = decoded.id
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const user = await User.findById(currentUserId)
    if(user.userType==="admin"){
      return res.status(403).json({ error: 'Admin is not authorized to perform this action.' });
    }
    user.wishlist.push({productId:product._id})
    await user.save()
    res.status(202).json({ message: 'Product added to wishlist successfully' ,wishlist: user.wishlist});
  } catch (error) {
  return  res.status(500).json({ error: error.message });
}
}



const addReview = async(req,res)=>{
  const id = req.params.id
  if(!id){
    res.status(400).json({ error: 'Please provide product id' });
  }
  try {
    const token = req.cookies.token
    if(!token){
      res.status(401).json({ error: 'Authentication error. Please sign in.' });
    }
  } catch (error) {
    
  }
}
  module.exports = {
    createProduct,
    getAllProducts,addReview,
    getProductsTitle,
    getProductsByCategory,
    getProductsById,
    addtoCart,addtoWishlist,
editProduct,
deleteProduct
  };
  