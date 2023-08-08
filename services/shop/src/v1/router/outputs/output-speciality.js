import { Router } from "express"
import { getAllSpeciality } from "../../controllers/speciality/get-all-speciality.js"
import { getSpecialityByPk } from "../../controllers/speciality/get-id-speciality.js"


const outPutSpecialityRouter = Router()


outPutSpecialityRouter.get('/findAll', getAllSpeciality)
outPutSpecialityRouter.get('/:id', getSpecialityByPk)


export default outPutSpecialityRouter