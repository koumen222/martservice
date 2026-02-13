const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// GET all requests (admin)
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== 'tous') {
      filter.status = status;
    }
    const requests = await Request.find(filter)
      .populate('serviceId')
      .populate('providerId')
      .sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET requests by provider
router.get('/by-provider/:providerId', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = { providerId: req.params.providerId };
    if (status && status !== 'tous') {
      filter.status = status;
    }
    const requests = await Request.find(filter)
      .populate('serviceId')
      .populate('providerId')
      .sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single request
router.get('/:id', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id)
      .populate('serviceId')
      .populate('providerId');
    if (!request) return res.status(404).json({ error: 'Demande non trouvée' });
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create request (client)
router.post('/', async (req, res) => {
  try {
    const request = await Request.create(req.body);
    const populated = await Request.findById(request._id)
      .populate('serviceId')
      .populate('providerId');
    res.status(201).json(populated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update request status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['en_attente', 'assignee', 'validee', 'rejetee', 'acceptee', 'refusee', 'en_cours', 'terminee'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Statut invalide' });
    }
    const request = await Request.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('serviceId').populate('providerId');
    if (!request) return res.status(404).json({ error: 'Demande non trouvée' });
    res.json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT assign provider (admin assigns a provider to a request)
router.put('/:id/assign', async (req, res) => {
  try {
    const { providerId, providerName } = req.body;
    if (!providerId || !providerName) {
      return res.status(400).json({ error: 'providerId et providerName sont requis' });
    }
    const request = await Request.findByIdAndUpdate(
      req.params.id,
      { providerId, providerName, status: 'assignee', assignedAt: new Date() },
      { new: true }
    ).populate('serviceId').populate('providerId');
    if (!request) return res.status(404).json({ error: 'Demande non trouvée' });
    res.json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT reassign provider
router.put('/:id/reassign', async (req, res) => {
  try {
    const { providerId, providerName } = req.body;
    const request = await Request.findByIdAndUpdate(
      req.params.id,
      { providerId, providerName, assignedAt: new Date() },
      { new: true }
    ).populate('serviceId').populate('providerId');
    if (!request) return res.status(404).json({ error: 'Demande non trouvée' });
    res.json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE request
router.delete('/:id', async (req, res) => {
  try {
    const request = await Request.findByIdAndDelete(req.params.id);
    if (!request) return res.status(404).json({ error: 'Demande non trouvée' });
    res.json({ message: 'Demande supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
