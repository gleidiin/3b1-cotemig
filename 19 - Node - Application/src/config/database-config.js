const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost", 
    port: "3306",
    database: "application",
    username: "root",
    password: "root"
});

connection.authenticate()
    .then(() => console.log("Conectado com o banco de dados com sucesso"))
    .catch((er) => console.error("Falha ao conectar com o banco de dados ", er));

module.exports = connection;