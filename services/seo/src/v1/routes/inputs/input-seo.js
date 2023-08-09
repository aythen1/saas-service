import { Router } from 'express'
import { addSeo } from '../../controllers/seo/add-seo.js'
import { deleteSeo } from '../../controllers/seo/delete-seo.js'

const inputSeoRoutes = Router()

/**
 * @swagger
 * /api-v1/seo:
 *   post:
 *     description: Create seo
 *     tags:
 *      - Seo
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            url:
 *              type: string
 *              description: url to analize
 *              example: https:google.com
 *          required:
 *            - url
 *     responses:
 *       201:
 *         description: seo
 */
inputSeoRoutes.post('/', addSeo)

/**
 * @swagger
 * /api-v1/seo/delete/{id}:
 *   put:
 *     description: Delete seo
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Seo
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: seo
 */
inputSeoRoutes.put('/delete/:id', deleteSeo)

export default inputSeoRoutes
