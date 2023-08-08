import { Router } from 'express'
import { getSeoByPk } from '../../controllers/seo/get-id-seo.js'

const outputSeoRoutes = Router()

/**
 * @swagger
 * /api-v1/output/seo/{id}:
 *   get:
 *     description: Returns seo by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Seo
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: seo
 */
outputSeoRoutes.get('/:id', getSeoByPk)

export default outputSeoRoutes
