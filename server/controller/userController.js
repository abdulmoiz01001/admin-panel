const User = require('../models/user.model'); // Assuming User model is in the models directory
const  uploadOnCloudinary  = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const { generateToken, verifyToken } = require('../utils/JWT'); // Assuming you have a utility for token generation
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
const  sendEmail  = require('../utils/sendEmail');
const {generateOTP,verifyOTP,storeOTP,storeAccountVerificationOTP} = require('../utils/otpGenerator')
// Controller for registering a new user
const registerUser = async (req, res) => {
  try {
  const { email, password,  name } = req.body;
  // const filePath = req.file.path;000000

 

    // Check if profile image is provided
    // if (!filePath) {
    //   return res.status(400).json({ error: 'Profile image is required' });
    // }


    // Upload the profile image to Cloudinary
    // const result = await uploadOnCloudinary(filePath);
    // if (!result) {
    //   return res.status(500).json({ error: 'Failed to upload image' });
    // }

    // const profileImg = result.secure_url;

    // Create a new user with the provided details
    
    const user = new User({
      name,
      // number,
      // profileImg,
      password,
      email,
    });

    

    // Save the user to the database
    await user.save();
    // Generate an authentication token
    const generatedToken = generateToken(user._id);
    // Set the token as a cookie
    res.cookie('token', generatedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hour
    });


    
    try {
        
    const { otp, secret } = generateOTP()
    storeAccountVerificationOTP(user._id,otp)
    sendEmail(user.email,otp,'verify')
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generatedToken
    });

  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
};
const verifyUser = async (req, res) => {
  const {otp,email} = req.body
if(!otp || !email){
  res.status(400).json({ error: 'Please provide otp and email' });
}
  try {
  verifyOTP(email,otp,res,'accountVerification')

 } catch (error) {
  res.status(500).json({ error: error.message });
 }
  
}
const loginUser = async (req, res) => {
  const { email, password } = req.body;
 
  try { 
    const user = await User.findOne({ email });
 
    if (!user) {  
      res.status(401).json({ error: 'Invalid email or password' });}
      if (user && (await bcrypt.compare(password, user.password))) {
        const generatedToken = generateToken(user._id);
        
        // Set the token as a cookie
       
         res.cookie('token', generatedToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600000, // 1 hour
        })

  
        

        const data = await User.findById(user._id).select("email name profileImg userType");
        
        res.status(200).json({
          data,
          token: generatedToken,
  });
    } 
    else{
      return res.status(400).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const logoutUser = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = verifyToken(token)
  
    if(decoded){
      res.cookie('token', '', { httpOnly: true, expires: new Date(0) }); // Set the expiration to a past date
    
    res.status(200).send('Logout successful');
    }
    else{
      return res.status(401).json({ error: 'noone logged in ' });

    }
  } catch (error) {
    res.status(404).json({message:"Error in logging out seems like noone is logged in "})
  }
}
const getAllUsers = async(req,res)=>{
  try {
    const users = await User.find()
    res.status(200).send(users);
  } catch (error) {
   return res.status(401).json({ error: `Error while getting the users` });
  }
}
const deleteUser = async(req,res)=>{
  const id = req.params.id
  console.log(id);
  
  try {
    const token = req.cookies.token;
  const decoded = verifyToken(token)
  if(!decoded){
    
    return res.status(401).json({ error: `Start using twitter by signing up ! authetication error` });
  }
  const user = await User.findById(decoded.id).select("userType")
  console.log(user.userType);
  
  if( user.userType=='admin'){
 const user = await User.findByIdAndDelete({_id:id})
      res.status(200).send(user);
    }
    else{
  return res.status(401).json({ error: `login as admin to delete the user` });
}
  }
   catch (error) {
   return res.status(401).json({ error: `Error while deleting the users` });
  }
}
const otpRequest = async(req,res)=>{
  const {email} = req.body
  const { otp, secret } = generateOTP();
  const user = await User.findOne({email:email})
  storeOTP(user._id,otp)
  sendEmail(email,otp,"reset")
  res.status(200).json({message:"successful generated otp"})
}
const verifyResetOTP = async(req,res)=>{
  try {
    const { email, submittedOtp } = req.body;
    const user = await User.find({email:email})
      verifyOTP(user[0]._id,submittedOtp,res,"resetPassword")
      // console.log(user);
      
  } catch (error) {
    return res.status(500).json('Error verifying OTP: ' + error.message);
    
  }

}
const resetPassword = async(req,res)=>{
    try {
      const {email,password,ConfirmPassword} = req.body
      const userEmail = await User.find({email:email})
      const user = await User.findById(userEmail[0]._id)
      if(!userEmail){
        return res.status(404).json({Error:"No user Found"})
      }
      if(userEmail[0].otpEvent){
      if(password==ConfirmPassword ){
        user.password = password
        // const updatedUser = await User.findByIdAndUpdate(userEmail[0]._id,{password:password})
        user.otpEvent = false
       await user.save()
        res.status(200).json({Message:"Successfully updated the password",Doc:user})
      }
      else{
        res.status(404).json({Error:"Password Should match"})
  
      }}
      else{
        res.status(404).json({Error:"First verify your OTP"})
  
      }
    } catch (error) {
      res.status(404).json({error:error.message})
      
    }
  }

module.exports = {
  registerUser,
  resetPassword,
  otpRequest,
  verifyResetOTP,
  verifyUser,
  loginUser,
  logoutUser,
  getAllUsers,
  deleteUser
};
