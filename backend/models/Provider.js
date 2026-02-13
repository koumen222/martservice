const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  serviceIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  city: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  phone: { type: String, required: true },
  bio: { type: String, required: true },
  available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Provider', providerSchema);
