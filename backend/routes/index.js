const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const { catchErrors } = require("../handlers/errorHandlers");

router.get("/recipes", catchErrors(recipeController.getRecipes));
router.post("/add", catchErrors(recipeController.createRecipe));

module.exports = router;
