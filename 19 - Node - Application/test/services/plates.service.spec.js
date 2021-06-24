const PlateService = require("../../src/services/plates.service");

// npm i jest --dev

describe("Plates Service Test", () => {
    let service = PlateService;

    it("Should create a new plates", async () => {
        const createdPlate = await service.create({
            name: "Meu primeiro prato",
            description: "Prato bem servido para 4 pessoas",
            price: 100, 
            shouldServe: 4,
            waitTimeMin: 40
        });
        
        expect(createdPlate.id).not.toBeNull();
    });
}); 
