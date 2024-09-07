const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    profileImg:{
        type:String , required:false
    },
    number: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    resetOTP: { type: String },
    otpExpires: { type: Date },
    otpEvent: { type: Boolean, default: false },
    accountVerificationOTP:{type:String},
    accountVerificated:{type:Boolean,default:false},
  
  userType: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  orderHistory: [{
    orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
    purchaseDate: { type: Date, default: Date.now },
    totalAmount: { type: Number },
    status: { type: String },
  }],
  activeOrder: [{
    orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
    items: [{
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true }, // e.g., "pending", "shipped", "delivered"
  }],
  wishlist: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    addedDate: { type: Date, default: Date.now },
  }],
  cart: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  dateJoined: { type: Date, default: Date.now },
  password: { type: String, required: true }
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
  });

const User = mongoose.model('eccomerceUser', userSchema);

module.exports = User;
