import { Router } from "express"
import { getShippingByPk } from "../../controllers/shipping/get-id-shipping.js"


const outPutShippingRouter = Router()

outPutShippingRouter.get('/:id')

export default outPutShippingRouter