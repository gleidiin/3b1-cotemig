const connection = require("../config/database-config"); 
const { DataTypes } = require("sequelize")

const PlateModel = connection.define("PlateModel", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    shouldServe: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        defaultValue: 1
    }, 
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    waitTimeMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 20
    }
}, {
    underscored: true,
    timestamps: false, 
    defaultScope: false,
    tableName: "plates"
});

module.exports = PlateModel;