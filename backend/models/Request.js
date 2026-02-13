const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  serviceTitle: { type: String, required: true },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', default: null },
  providerName: { type: String, default: null },
  clientName: { type: String, required: true },
  clientPhone: { type: String, required: true },
  clientCity: { type: String, required: true },
  description: { type: String },
  preferredDate: { type: String },
  status: {
    type: String,
    enum: ['en_attente', 'assignee', 'validee', 'rejetee', 'acceptee', 'refusee', 'en_cours', 'terminee'],
    default: 'en_attente',
  },
  assignedAt: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
