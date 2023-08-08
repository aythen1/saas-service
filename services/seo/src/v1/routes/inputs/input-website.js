import { Router } from 'express'
import { addWebsite } from '../../controllers/website/add-website'
import { updateWebsite } from '../../controllers/website/update-website'
import { deleteWebsite } from '../../controllers/website/delete-website'

const inputWebsiteRoutes = Router()

inputWebsiteRoutes.post('/', addWebsite)

inputWebsiteRoutes.put('/:id', updateWebsite)

/**
 * @swagger
 * /api-v1/input/website/delete/:id:
 *   put:
 *     description: Delete website
 *     tags:
 *      - Websites
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: website
 */
inputWebsiteRoutes.put('/delete/:id', deleteWebsite)

export default inputWebsiteRoutes
