const express = require("express");

// cria uma instancia do express
const app = express(); 

const Router = express.Router();

// requisição = informações gerais do navegador
//  req.headers = headers enviados na requisição
//  req.body    = payload enviado na requisição (post e put)
//  req.params  = parametros enviados na rota
//  req.query   = parametros enviados por query params

Router.get("/", (_, res) => res.sendStatus(200))
    .post("/", (_, res) => res.sendStatus(200))
    .put("/:id", (_, res) => res.sendStatus(200))
    .delete("/:id", (_, res) => res.sendStatus(200))

// configurações do nosso servidor
app.use(express.json()); 

const auth = (req, res, next) => {
    const auth = req.header("Authorization");
    if(auth) next();
    else res.sendStatus(401);
}

// configuração de rotas 
app.use("/test", auth, Router);

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});