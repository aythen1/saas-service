import { Router } from 'express'
import { addPerformance } from '../../controllers/performance/add-performance'
import { deletePerformance } from '../../controllers/performance/delete-performance'

const inputPerformanceRoutes = Router()

inputPerformanceRoutes.post('/', addPerformance)

inputPerformanceRoutes.put('/:id', deletePerformance)

export default inputPerformanceRoutes
