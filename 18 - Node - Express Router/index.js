// index.js (boostraping) 
//      -> server.js (configurar o servidor)
//          -> routes (definir as rotas) 
//          -> handlers (manipular as requisições)

// solicitando instancia de servidor
const app = require("./src/server");

// começando a aplicação na porta 3000
app.listen(3000, () => {
    console.info("Server running on http://localhost:3000/");
});