// require express e instanciando
const express = require("express");
const path = require("path")
const app = express();

// importar os custom routes
const travelPackRouter = require('./routes/travel-pack.route');
const logRequest = require("./middlewares/log-request.middleware");

const NOT_FOUND = 404;

// adicionado parse para json
app.use(express.json());
app.use(logRequest);

app.use("", express.static(path.resolve(__dirname, "static")));
// adicionado rotas customizadas
app.use("/api", travelPackRouter);

const defaultResponse = (req, res) => res.sendStatus(NOT_FOUND);
app.get("*", defaultResponse)

// exportando app no modulo
module.exports = app;