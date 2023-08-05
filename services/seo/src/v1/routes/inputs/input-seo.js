import { Router } from 'express'
import { addSeo } from '../../controllers/seo/add-seo'
import { deleteSeo } from '../../controllers/seo/delete-seo'

const inputSeoRoutes = Router()

inputSeoRoutes.post('/', addSeo)

inputSeoRoutes.put('/', deleteSeo)

export default inputSeoRoutes
