import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:id', this.getHouseById)
            .post('', this.postHouse)

    }
    async getHouses(req, res, next) {
        try {
            const query = req.query
            const houses = await housesService.getHouses(query)
            res.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async getHouseById(req, res, next) {
        try {
            const id = req.params.id
            // house = await housesService.getHouseById(id)
            res.send(res)
        } catch (error) {
            next(error)
        }
    }

    async postHouse(req, res, next) {
        try {
            const houseData = req.body
            const houses = await housesService.postHouse(houseData)
            res.send(houses)
        } catch (error) {
            next(error)
        }
    }
}
