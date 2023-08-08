import { Router } from "express"
import { createReview } from "../../controllers/review/add-review.js"
import { deleteReview } from "../../controllers/review/delete-review.js"


const inputReviewRouter = Router()

inputReviewRouter.post('/create', createReview)
inputReviewRouter.put('/delete', deleteReview)


export default inputReviewRouter