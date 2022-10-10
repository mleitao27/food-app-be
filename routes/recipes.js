const express = require('express');
// const mongodb = require('mongodb');
// const db = require('../modules/db');
// const shiftsModule = require('../modules/shifts');

const router = express.Router();

// Get shifts
router.get('/', async (req, res) => {
    res.status(200).send('index');
});

// Get shift by id
router.get('/:id', async (req, res) => {
    res.status(200).send('show');
});

// Add shift
router.post('/', async (req, res) => {
    res.status(200).send('store');
});

// Update shift
router.put('/:id', async (req, res) => {
    res.status(200).send('update');
});

// Delete shift
router.delete('/:id', (req, res) => {
    res.status(200).send('destroy');
});

module.exports = router;