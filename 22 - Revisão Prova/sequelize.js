const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

connection.authenticate().then(() => {
    connection.query("CREATE TABLE IF NOT EXISTS users( id bigint, name varchar not null )")
}); 

module.exports = connection;