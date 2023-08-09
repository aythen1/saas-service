import { Router } from 'express'
import { getAllTag } from '../../controllers/Tag/get-all-Tag.js'
import { getTagById } from '../../controllers/Tag/get-id-Tag.js'

const outPutTagRouter = Router()

outPutTagRouter.get('/all', getAllTag)
outPutTagRouter.get('/:id', getTagById)

export default outPutTagRouter
