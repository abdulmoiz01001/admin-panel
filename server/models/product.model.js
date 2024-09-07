const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  media: [{ type: String }], // Array of URLs or paths to product images/videos
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 }, // Discount as a percentage
  finalPrice: { type: Number, required: true }, // Calculated price after discount
  userId:{type: Schema.Types.ObjectId, ref: 'eccomerceUser'},
  reviews: [{
    userId: { type: Schema.Types.ObjectId, ref: 'eccomerceUser' },
    comment: { type: String },
    rating: { type: Number, min: 1, max: 5 },
    reviewDate: { type: Date, default: Date.now },
  }],
  averageRating: { type: Number, default: 0 }, // Average of all ratings
  stocks: { type: String, required: true }, // Number of items in stock
  categories: [{ type: String }], // Array of categories/tags for better searchability
  isActive: { type: Boolean, default: true }, // To manage if the product is active or not
  dateAdded: { type: Date, default: Date.now }, // Date when the product was added to the catalog
  lastUpdated: { type: Date, default: Date.now }, // Date when the product was last updated
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
