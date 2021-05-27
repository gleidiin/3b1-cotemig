// todos os pacote de viagem
let packs = [
    {
        id: 1,
        name: "Viagem para Europa",
        description: "Uma turn de 30 dias pela europa ocidental, com tudo incluso",
        origin: "Brasil",
        destination: "Italia",
        totalValue: 15856.85,
        installments: "12x",
        guide: true,
        isAvaliable: true,
        hotel: {
            name: "Vários Hoteis",
            included: true,
            description: "São varios hoteis em torno da europa",
            location: "Variada"
        }
    }
];

const searchTravelPackByPrice = (min, max) => {
    const searchedPacks = packs.filter(pack => pack.totalValue >= min && pack.totalValue <= max);
    return searchedPacks;
}

// req = requisição
// res = resposta
// pega todos os travel packs
const getAllTravelPack = (req, res) => {
    res.send(packs);
}

// busca um travel pack por id
const getTravelPackById = (req, res) => {
    const id = req.params.id;
    const pack = packs.find(pack => pack.id == id);
    res.send(pack);
}

// POST
const createTravePack = (req, res) => {
    // payload ou body da requisição
    const pack = req.body;
    // incrementou o id
    pack.id = packs.length + 1;
    // definiu uma data de criaçãoi
    pack.createdAt = (new Date()).toString();
    // adicionamos o item na lista
    packs.push(pack);
    // enviamos um status created, e enviamos o resultado
    res.status(201).send(pack);
}

// PUT
const updateTravelPack = (req, res) => {
    // qual item será updatado
    const id = req.params.id;
    // contúdo que será atualizado
    const pack = req.body;
    // buscar conteúdo antigo
    const index = packs.findIndex(p => p.id == id);
    // atualizar o item na lista
    packs[index] = {...packs[index], ...pack, id}; 
    // enviar o que foi atualizado
    res.send(packs[index]);
}

const deleteTravelPack = (req, res) => {
    const id = req.params.id;
    packs = packs.filter(pack => pack.id != id);
    res.sendStatus(200);
}

module.exports = {
    getAllTravelPack,
    getTravelPackById,
    createTravePack,
    updateTravelPack,
    deleteTravelPack
};
