import { Router } from 'express'
import { getAllWebsites } from '../../controllers/website/get-all-website.js'
import { getWebsiteByPk } from '../../controllers/website/get-id-website.js'

const outputWebsiteRoutes = Router()

/**
 * @swagger
 * /api-v1/output/website:
 *   get:
 *     description: Returns websites
 *     tags:
 *      - Websites
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: websites
 */
outputWebsiteRoutes.get('/', getAllWebsites)

/**
 * @swagger
 * /api-v1/output/website/{id}:
 *   get:
 *     description: Returns website by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Websites
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: website
 */
outputWebsiteRoutes.get('/:id', getWebsiteByPk)

export default outputWebsiteRoutes
