import { Router } from "express"
import { createSpeciality } from "../../controllers/speciality/add-speciality.js"
import { deleteSpeciality } from "../../controllers/speciality/delete-speciality.js"


const inputSpecialityRouter = Router()

inputSpecialityRouter.post('/create', createSpeciality)
inputSpecialityRouter.put('/delete', deleteSpeciality)


export default inputSpecialityRouter