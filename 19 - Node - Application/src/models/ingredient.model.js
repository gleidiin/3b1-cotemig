const connection = require("../config/database-config"); 
const { DataTypes } = require("sequelize")

const IngredientModel = connection.define("IngredientModel", {
    idPlates: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
}, {
    underscored: true,
    timestamps: false, 
    defaultScope: false,
    tableName: "ingredients"
});


module.exports = IngredientModel;