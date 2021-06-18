const service = require("../services/plates.service");

const getAll = async (req, res) => {
    const plates = await service.findAll();
    res.status(200).send(plates);
}

const create = async (req, res) => {
    const plate = req.body;
    try {
        const createdPlate = await service.create(plate);
        res.status(201).send(createdPlate);
    } catch(er) {
        res.status(400).send({
            message: "Os campos não foram preenchidos corretamente",
            status: 400
        });
    }
}

module.exports = { getAll, create };