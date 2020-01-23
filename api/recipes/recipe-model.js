const db = require('../../data/db-config.js')

module.exports = {
  getRecipes,
  getIngredientsByRecipe,
  getInstructionsByRecipe
}

function getRecipes() {
  return db('recipes')
}

function getIngredientsByRecipe(recipe_id) {
  return db('recipe_ingredients as ri')
    .where('ri.recipe_id', recipe_id)
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .select('ri.id', 'i.name as ingredient_name', 'ri.ingredient_count', 'i.unit_type')
}

function getInstructionsByRecipe(recipe_id) {
  return db('recipe_steps as rs')
    .where('rs.recipe_id', recipe_id)
    .join('recipes as r', 'rs.recipe_id', 'r.id')
    .select('rs.id', 'r.name as recipe_name', 'rs.step_number', 'rs.instruction')
    .orderBy('rs.step_number')
}