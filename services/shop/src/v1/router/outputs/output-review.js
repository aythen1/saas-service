import { Router } from 'express'
import { getReviewByPk } from '../../controllers/review/get-id-review.js'
import { findAllReviewByServiceId } from '../../controllers/review/get-serviceId-review.js'

const outPutReviewRouter = Router()

outPutReviewRouter.get('/:id', getReviewByPk)
outPutReviewRouter.get('/:serviceId', findAllReviewByServiceId)

export default outPutReviewRouter
