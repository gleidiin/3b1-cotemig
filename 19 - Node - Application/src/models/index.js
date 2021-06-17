const IngredientModel = require("./ingredient.model");
const PlatesModel = require("./plates.model");

PlatesModel.hasMany(IngredientModel, { sourceKey: 'idPlates' });

module.exports = {
    IngredientModel, PlatesModel
}