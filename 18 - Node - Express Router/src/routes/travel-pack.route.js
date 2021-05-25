// importando router do expresss e também o handler
const { Router } = require("express");
const travelHandler = require("../handlers/travel-pack.handler");

// CRUD
// get, create, update, delete 

// REST API
/// all path resource: travel-pack
const router = Router()
    .get("/travel-pack", travelHandler.getAllTravelPack) // get
    .get("/travel-pack/:id", travelHandler.getTravelPackById) // get by id
    .post("/travel-pack", travelHandler.createTravePack) // create
    .put("/travel-pack/:id", travelHandler.updateTravelPack) // update all fields
    .patch("/travel-pack/:id") // update by field
    .delete("/travel-pack/:id", travelHandler.deleteTravelPack) // delete by id 

module.exports = router;