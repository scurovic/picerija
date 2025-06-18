const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const Coupon = require('../models/Coupon');

// GET all items
router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST new item
router.post('/items', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  const savedItem = await newItem.save();
  res.json(savedItem);
});

router.get('/allcoupons', async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
});

router.post('/newcoupon', async (req, res) => {
  const newCoupon = new Coupon({ 
      name: req.body.name,
      from: req.body.from,
      to: req.body.to 
    });
  const savedCoupon = await newCoupon.save();
  res.json(savedCoupon);
});

router.get('/checkcoupon', async (req, res) => {
  try {
    const name = req.query.name;
    if (!name) {
      return res.status(400).json({ message: 'Coupon name is required' });
    }

    const now = new Date();

    const coupon = await Coupon.findOne({
      name: name,
      from: { $lte: now },
      to: { $gte: now }
    });

    if (coupon) {
      res.json({ valid: true, coupon });
    } else {
      res.json({ valid: false, message: 'No active coupon found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


//MEAN
//MongoDB
//Express
//Angular
//NodeJS