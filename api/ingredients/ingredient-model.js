const db = require('../../data/db-config.js')

module.exports = {
  getRecipesByIngredient
}

function getRecipesByIngredient(ingredient_id) {
  return db('recipe_ingredients as ri')
    .where('ri.ingredient_id', ingredient_id)
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .select('ri.id', 'r.name as recipe_name', 'i.name as ingredient_name')
}