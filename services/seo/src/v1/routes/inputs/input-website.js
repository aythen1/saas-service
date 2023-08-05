import { Router } from 'express'
import { addWebsite } from '../../controllers/website/add-website'
import { updateWebsite } from '../../controllers/website/update-website'
import { deleteWebsite } from '../../controllers/website/delete-website'

const inputWebsiteRoutes = Router()

inputWebsiteRoutes.post('/', addWebsite)

inputWebsiteRoutes.put('/:id', updateWebsite)

inputWebsiteRoutes.put('/:id', deleteWebsite)

export default inputWebsiteRoutes
