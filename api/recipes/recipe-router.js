const express = require('express')

const Recipes = require('./recipe-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'failed to get recipes' })
    })
})

router.get('/:id/shopping-list', (req, res) => {
  const id = req.params.id

  Recipes.getIngredientsByRecipe(id)
    .then(ingredients => {
      res.status(200).json(ingredients)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'failed to get shopping list' })
    })
})

router.get('/:id/instructions', (req, res) => {
  const id = req.params.id

  Recipes.getInstructionsByRecipe(id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'failed to get instructions' })
    })
})

module.exports = router