const mongoose = require("mongoose");
const Recipe = mongoose.model("Recipe");
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if(isPhoto) {
      next(null, true);
    } else {
      next({message: 'That filetype isn\'t allowed!'}, false);
    }
  }
};

// get all recipes
exports.getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json({ recipes });
};

// middleware to handle uploading and resizing images
exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
  // if no new file to resize, skip
  if (!req.file) {
    next();
    return;
  }
  console.log(req.body);
  console.log(req.file);
  // grab file ext from mimetype
  const extension = req.file.mimetype.split('/')[1];
  // add photo file name to the request body
  req.body.photo = `${uuid.v4()}.${extension}`;
  const photo = await jimp.read(req.file.buffer);
  // TODO - Add resizing code here
  await photo.write(`./public/uploads/${req.body.photo}`);
  next();
}

// create a new recipe
exports.createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  const result = await recipe.save();
  res.json(result);
};

// get specific recipe
exports.getRecipe = async (req, res) => {
  const recipe = await Recipe.findOne({ "_id": req.params.id});
  res.json({ recipe });
};