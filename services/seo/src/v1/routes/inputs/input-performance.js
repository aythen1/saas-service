import { Router } from 'express'
import { addPerformance } from '../../controllers/performance/add-performance.js'
import { deletePerformance } from '../../controllers/performance/delete-performance.js'

const inputPerformanceRoutes = Router()

/**
 * @swagger
 * /api-v1/performance:
 *   post:
 *     description: Create performance
 *     tags:
 *      - Performance
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
 *         description: performance
 */
inputPerformanceRoutes.post('/', addPerformance)

/**
 * @swagger
 * /api-v1/performance/delete/{id}:
 *   put:
 *     description: Delete performance
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Performance
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: performance
 */
inputPerformanceRoutes.put('/delete/:id', deletePerformance)

export default inputPerformanceRoutes
