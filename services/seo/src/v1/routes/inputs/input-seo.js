import { Router } from 'express'
import { addSeo } from '../../controllers/seo/add-seo.js'
import { deleteSeo } from '../../controllers/seo/delete-seo.js'

const inputSeoRoutes = Router()

inputSeoRoutes.post('/', addSeo)

inputSeoRoutes.put('/', deleteSeo)

export default inputSeoRoutes
