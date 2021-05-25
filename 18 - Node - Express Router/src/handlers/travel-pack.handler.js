// todos os pacote de viagem
const packs = [
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


const createTravePack = (req, res) => {

}

const updateTravelPack = (req, res) => {

}

const deleteTravelPack = (req, res) => {

}

module.exports = {
    getAllTravelPack,
    getTravelPackById,
    createTravePack,
    updateTravelPack,
    deleteTravelPack
};
