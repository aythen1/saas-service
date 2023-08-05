import { Router } from 'express'
import { addMiscellaneous } from '../../controllers/miscellaneous/add-miscellaneous'
import { deleteMiscellaneous } from '../../controllers/miscellaneous/delete-miscellaneous'

const inputMiscellaneousRoutes = Router()

inputMiscellaneousRoutes.post('/', addMiscellaneous)

inputMiscellaneousRoutes.put('/:id', deleteMiscellaneous)

export default inputMiscellaneousRoutes
