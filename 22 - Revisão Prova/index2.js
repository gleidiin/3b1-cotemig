const { DataTypes } = require("sequelize");
const connection = require("./sequelize");


const UserModel = connection.define("users", {
    name: {
        type: DataTypes.TEXT
    }
}, {
    modelName: "users", 
    timestamps: false,
    defaultScope: false
});

(async () => {

    await UserModel.create({ name: "João Victor"});
    await UserModel.create({ name: "Heitor Costa"})
    await UserModel.create({ name: "Alberto Giannini"})
    await UserModel.create({ name: "Artur Almeida"})
    await UserModel.create({ name: "Gleidson Braga"})

    const modelo = await UserModel.findOne({
        attributes: ['id'],
        where: {
            name: "Gleidson Braga"
        }
    });

    await modelo.update({
        name: "Gleidson Ferreira Braga"
    });

    await modelo.destroy();

    console.log();

})();