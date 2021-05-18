const express = require("express");

// servidor http => requisição http
const app = express();

const foods = [
    {
        id: 1, 
        name: "Hamburger",
        description: "hamburguer simples", 
        value: 12 
    }, 
    {
        id: 2,
        name: "Macarrão",
        description: "Macarrão com molho branco",
        value: 9
    },
    {
        id: 3,
        name: "Pizza",
        description: "Pizza de frango com catupiri",
        value: 42
    }
];

const secretFoods = [
    {
        id: 5,
        name: "Feijoada",
        description:"Feijoada top",
        value: 12
    },
    {
        id: 6,
        name: "Lasanha", 
        description: "Lasanha da quebrada",
        value: 9
    },
    {
        id: 7,
        name: "Cachorro quente",
        description: "Cachorro quente com duas salsichas",
        value: 7
    }
]; 

// URI:
//    protocol: http
//    base: localhost:3000
//    path: /secret-foods/
//    query: ?secret=true
//    header: {}
// http://localhost:3000/secret-foods?secret=true
// função: requiisição, resposta e próximo
const midAuth = (req, res, next) => {
    if(req.query.secret) next();
    else res.sendStatus(401);
}


// conjunto de rotas que possuem caracteristicas em comum
const router = express.Router();

// endpoint do tipo get, que retorna todas as comidas disponíveis
// endpoint: http://localhost:3000/foods
router.get("/", (req, res) => {
    res.send(foods);
});

// endpoint do tipo get, usando path params que busca uma comida por id
// endpoint http://localhost:3000/foods/*
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const food = foods.find(food => food.id == id);
    if(food) res.send(food);
    else res.sendStatus(404);
});

// atribuindo as rotas para o caminho /foods
app.use('/foods', router);

// routas de secret food
const secretFoodRouter = express.Router();

// endpoint get para pergar todas as secrets foods
secretFoodRouter.get('/', (req, res) => {
    res.send(secretFoods);
});

// atribuição da rota para ser utilizada
app.use('/secret-foods', midAuth, secretFoodRouter);

app.get('*', (req, res) => res.sendStatus(404));

app.listen(3000, () => {
    console.info("Applicação rodando em: http://localhost:3000");
});