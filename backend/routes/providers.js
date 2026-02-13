const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');
const Service = require('../models/Service');

// POST register new provider from form
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, phone, category, experience, description, portfolio } = req.body;
    
    // Find service by category name
    const categoryMapping = {
      'design': 'Design Graphique',
      'dev': 'Développement Web',
      'marketing': 'Marketing Digital',
      'consulting': 'Consulting Business',
      'formation': 'Formation Professionnelle',
      'juridique': 'Services Juridiques',
      'autre': 'Autre'
    };
    
    const serviceName = categoryMapping[category] || category;
    let service = await Service.findOne({ title: { $regex: serviceName, $options: 'i' } });
    
    // If service not found, use first available service or create generic
    if (!service) {
      service = await Service.findOne();
    }
    
    // Create provider with form data
    const providerData = {
      name: fullName,
      email: email,
      phone: phone,
      serviceIds: service ? [service._id] : [],
      city: 'Non spécifié',
      bio: `${description}\n\nExpérience: ${experience}\nPortfolio: ${portfolio || 'Non fourni'}`,
      available: false, // Pending approval
      rating: 0,
      reviews: 0
    };
    
    const provider = await Provider.create(providerData);
    
    res.status(201).json({
      message: 'Candidature enregistrée avec succès. Nous vous contacterons sous 48h.',
      provider: provider
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET pending providers (candidatures en attente)
router.get('/pending', async (req, res) => {
  try {
    const providers = await Provider.find({ available: false }).populate('serviceIds');
    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all providers
router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find().populate('serviceIds');
    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET providers by service ID
router.get('/by-service/:serviceId', async (req, res) => {
  try {
    const providers = await Provider.find({ serviceIds: req.params.serviceId, available: true });
    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single provider
router.get('/:id', async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id).populate('serviceIds');
    if (!provider) return res.status(404).json({ error: 'Prestataire non trouvé' });
    res.json(provider);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create provider
router.post('/', async (req, res) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(201).json(provider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update provider
router.put('/:id', async (req, res) => {
  try {
    const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!provider) return res.status(404).json({ error: 'Prestataire non trouvé' });
    res.json(provider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE provider
router.delete('/:id', async (req, res) => {
  try {
    const provider = await Provider.findByIdAndDelete(req.params.id);
    if (!provider) return res.status(404).json({ error: 'Prestataire non trouvé' });
    res.json({ message: 'Prestataire supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH toggle availability
router.patch('/:id/availability', async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) return res.status(404).json({ error: 'Prestataire non trouvé' });
    provider.available = !provider.available;
    await provider.save();
    res.json(provider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
