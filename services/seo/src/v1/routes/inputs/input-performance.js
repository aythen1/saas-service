import { Router } from 'express'
import { addPerformance } from '../../controllers/performance/add-performance'
import { deletePerformance } from '../../controllers/performance/delete-performance'

const inputPerformanceRoutes = Router()

inputPerformanceRoutes.post('/', addPerformance)

/**
 * @swagger
 * /api-v1/input/performance/delete/:id:
 *   put:
 *     description: Delete performance
 *     tags:
 *      - Performance
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: performance
 */
inputPerformanceRoutes.put('/delete/:id', deletePerformance)

export default inputPerformanceRoutes
