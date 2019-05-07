const mongoose = require("mongoose");
const Recipe = mongoose.model("Recipe");

// get all recipes
exports.getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json({ recipes });
};

// add a new recipe
exports.createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  const result = await recipe.save();
  res.json(result);
};
