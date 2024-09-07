const express = require("express")
const {registerUser,verifyUser,loginUser,logoutUser,getAllUsers,deleteUser,otpRequest,verifyResetOTP,resetPassword} = require('../controller/userController')
const uploadOnCloudinary = require("../config/cloudinaryConfig")
const { generateToken, verifyToken } = require("../utils/JWT")
const router = express.Router()
const multer = require("multer")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

router.post('/auth/register',registerUser)
router.post('/auth/verification',verifyUser)
router.post('/auth/login',loginUser)
router.post('/auth/logout',logoutUser)
router.get('/users',getAllUsers)
router.delete('/users/delete/:id',deleteUser)
router.post('/otp/request',otpRequest)
router.post('/otp/verify',verifyResetOTP)
router.post('/users/reset/currentpassword',resetPassword)
module.exports = router 