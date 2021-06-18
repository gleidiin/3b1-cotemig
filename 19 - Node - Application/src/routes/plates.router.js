const { Router } = require("express");
const handler = require("../handlers/plates.handler");

console.info("Configurando rota \"/plates\"");

const router = Router()
    .get("/", handler.getAll)
    .post("/", handler.create);


module.exports = router;