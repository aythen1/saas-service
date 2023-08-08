import { Router } from 'express'
import { getPerformanceByPk } from '../../controllers/performance/get-id-performance.js'

const outputPerformanceRoutes = Router()

/**
 * @swagger
 * /api-v1/output/performance/{id}:
 *   get:
 *     description: Returns performance by id
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
outputPerformanceRoutes.get('/:id', getPerformanceByPk)

export default outputPerformanceRoutes
