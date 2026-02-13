const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const Provider = require('../models/Provider');
const Request = require('../models/Request');

// GET dashboard stats
router.get('/', async (req, res) => {
  try {
    const [
      totalServices,
      totalProviders,
      totalRequests,
      pendingRequests,
      completedRequests,
      availableProviders,
    ] = await Promise.all([
      Service.countDocuments(),
      Provider.countDocuments(),
      Request.countDocuments(),
      Request.countDocuments({ status: 'en_attente' }),
      Request.countDocuments({ status: 'terminee' }),
      Provider.countDocuments({ available: true }),
    ]);

    res.json({
      services: totalServices,
      providers: totalProviders,
      availableProviders,
      requests: {
        total: totalRequests,
        pending: pendingRequests,
        completed: completedRequests,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET requests by status breakdown
router.get('/requests-breakdown', async (req, res) => {
  try {
    const breakdown = await Request.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);
    const result = breakdown.reduce((acc, item) => {
      acc[item._id] = item.count;
      return acc;
    }, {});
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET services by category breakdown
router.get('/services-breakdown', async (req, res) => {
  try {
    const breakdown = await Service.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
    ]);
    res.json(breakdown);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET recent requests
router.get('/recent-requests', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const requests = await Request.find()
      .populate('serviceId')
      .populate('providerId')
      .sort({ createdAt: -1 })
      .limit(limit);
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
