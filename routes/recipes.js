const express = require('express');
const db = require("../models");
const Recipe = db.recipes;
const Step = db.steps;
const Op = db.Sequelize.Op;

const router = express.Router();

// Get recipes
router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({ include: Step });
  res.status(200).send(recipes);
});

// Get recipe by id
router.get('/:id', async (req, res) => {
    res.status(200).send('show');
});

// Add recipe
router.post('/', async (req, res) => {
    // Create recipe
    const recipe = await Recipe.create({ name: req.body.name, description: req.body.description, img: req.body.img });
    if(recipe) {
        // Create recipe steps
        let newSteps = await Promise.all(req.body.steps.map(async (step, index) => {
            let newStep = await Step.create({ description: step, order: index + 1, recipeId: recipe.id })
            return newStep
        }))
        res.status(201).send({...recipe.dataValues, steps:newSteps});
    }
    else
        res.status(500).send('failed to create recipe');
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