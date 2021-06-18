const model = require("../models/plates.model");

const findAll = async () => {
    const plates = await model.findAll();
    return plates.map(plate => plate.toJSON()); 
}

const create = async (plate) => {
    try {
        const createdPlate = await model.create(plate);
        return createdPlate.toJSON();
    } catch(ex) {
        console.error("Error ao tentar criar novo plate: " + ex.toString());
    }
}

module.exports = {
    findAll, create
}