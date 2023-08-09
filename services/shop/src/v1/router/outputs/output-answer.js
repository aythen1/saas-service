import { Router } from 'express'
import { getAllAnswer } from '../../controllers/answer/get-all-answer.js'
import { getAnswerById } from '../../controllers/answer/get-id-answer.js'

const outPutAnswerRouter = Router()

outPutAnswerRouter.get('/all', getAllAnswer)
outPutAnswerRouter.get('/:id', getAnswerById)

export default outPutAnswerRouter
