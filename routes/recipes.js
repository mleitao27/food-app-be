const express = require('express');
const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

const router = express.Router();

// Get recipes
router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll();
  res.status(200).send(recipes);
});

// Get recipe by id
router.get('/:id', async (req, res) => {
    res.status(200).send('show');
});

// Add recipe
router.post('/', async (req, res) => {
    const recipe = await Recipe.create({ name: "Jane", description: "Doe", img: "https://i0.wp.com/www.onceuponachef.com/images/2019/04/Chocolate-Mousse.jpg?resize=1120%2C1400&ssl=1" });
    console.log(recipe)
    res.status(200).send('store');
});

// Update recipe
router.put('/:id', async (req, res) => {
    res.status(200).send('update');
});

// Delete recipe
router.delete('/:id', (req, res) => {
    res.status(200).send('destroy');
});

module.exports = router;