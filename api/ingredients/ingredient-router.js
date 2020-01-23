const express = require('express')

const Ingredients = require('./ingredient-model.js')

const router = express.Router()

router.get('/:id/recipes', (req, res) => {
  const id = req.params.id

  Ingredients.getRecipesByIngredient(id)
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'failed to get recipes' })
    })
})

module.exports = router