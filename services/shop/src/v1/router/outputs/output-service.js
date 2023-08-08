import { Router } from "express"
import { getServiceByIdUser } from "../../controllers/service/get-id-service.js"


const outPutServiceRouter = Router()

outPutServiceRouter.get('/:idUser', getServiceByIdUser)


export default outPutServiceRouter