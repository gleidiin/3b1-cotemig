const express = require("express");
const cors    = require("cors");
const app = express();

// importar as rotas
const platesRouter = require("./routes/plates.router");

// importações padrões
app.use(cors()); // pemitir requisição http de outro dominio
app.use(express.json());

// cors => problema
// siteA -> siteB (browser)
// api.arthursantiago.com.br
// response:
// Allow-origin: sitea.com.br

// nossas rotas customizadas
app.use("/plates", platesRouter);

module.exports = app;