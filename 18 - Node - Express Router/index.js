// index.js (boostraping) 
//      -> server.js (configurar o servidor)
//          -> routes (definir as rotas) 
//          -> handlers (manipular as requisições)


// solicitando instancia de servidor
const app = require("./src/server");

// começando a aplicação na porta 3000
app.listen(3000);