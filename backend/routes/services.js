const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Service.distinct('category');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET featured services
router.get('/featured', async (req, res) => {
  try {
    const services = await Service.find({ featured: true }).limit(6);
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all services
router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice } = req.query;
    const filter = {};

    if (category && category !== 'Tous') {
      filter.category = category;
    }
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }
    if (minPrice) filter.priceValue = { ...filter.priceValue, $gte: Number(minPrice) };
    if (maxPrice) filter.priceValue = { ...filter.priceValue, $lte: Number(maxPrice) };

    const services = await Service.find(filter).sort({ featured: -1, createdAt: -1 });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single service
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service non trouvé' });
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create service (admin)
router.post('/', async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update service (admin)
router.put('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) return res.status(404).json({ error: 'Service non trouvé' });
    res.json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE service (admin)
router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service non trouvé' });
    res.json({ message: 'Service supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
