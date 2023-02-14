import { dbContext } from "../db/DbContext"



class HousesService {

    async getHouses(query) {
        const houses = await dbContext.House.find(query)
        return houses
    }

    async getHouseById(id) {
        const house = await dbContext.House.findById(id)
        if (!house) {
            throw new BadRequest('Invalid House ID')
        }
        return house
    }

    async postHouse(houseData) {
        const houses = await dbContext.House.create(houseData)
        return houses
    }
}

export const housesService = new HousesService()