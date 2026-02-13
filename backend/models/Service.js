const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  priceValue: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  icon: { type: String, required: true },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
