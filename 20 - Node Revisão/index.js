const express = require("express");
const uuid = require("uuid");
const app = express();
app.use(express.json()); 

const router = express.Router();

const games = [];

const base = {
    id: null, 
    code: null,
    p1: null,
    p2: null,
    turn: null,
    positions: [
        { x: 0, y: 0, player: null }, 
        { x: 0, y: 1, player: null },
        { x: 0, y: 2, player: null },
        { x: 1, y: 0, player: null },
        { x: 1, y: 1, player: null },
        { x: 1, y: 2, player: null },
        { x: 2, y: 0, player: null },
        { x: 2, y: 1, player: null },
        { x: 2, y: 2, player: null }
    ]
};


// POST: localhost:3000/game/start
router.post("/start", (_, res) => {
    const newGame = {...base};

    newGame.id = games.length + 1; 
    newGame.code = uuid.v4();
    newGame.p1 = uuid.v4();
    newGame.turn = newGame.p1;

    games.push(newGame);

    res.send({ idPlayer: newGame.p1, code: newGame.code });
}).post("/join/:code", (req, res) => {
    const code = req.params.code;
    const index = games.findIndex((game) => game.code == code);

    if(index < 0) {
        res.sendStatus(404);
    } else {
        if(games[index].p2) res.sendStatus(400);
        else {
            games[index].p2 = uuid.v4();
            res.send({ idPlayer: games[index].p2, code: code });
        }
    }
}).get("/:code", (req, res) => {
    const code = req.params.code;
    const game = games.find((game) => game.code == code);
    if(game) {
        res.send(game);
    } else {
        res.sendStatus(404);
    }
}).put("/:code", (req, res) => {
    const { x, y } = req.body;
    // headers da requisição
    const auth = req.headers.authorization;
    const code = req.params.code;

    const index = games.findIndex((game) => game.code == code);

    if(index < 0) {
        res.sendStatus(404);
    } else {
        const game = games[index];
        if(game.turn == auth) {
            const position = game.positions
                .find(position => position.x == x && position.y == y && !position.player);

            if(position) {
                position.player = auth;
                games[index].turn = auth == game.p1 ? game.p2 : game.p1; 
                res.sendStatus(201);
            } else {
                res.sendStatus(403);
            }
            
        } else {
            res.sendStatus(401);
        }
    }
});


app.use("/game", router);
// localhost:3000/alunos

app.listen(3000, () => {
    console.info("Servidor rodando na porta 3000");
});