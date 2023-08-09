import { Router } from 'express'
import { getAllQuestion } from '../../controllers/question/get-all-question.js'
import { getQuestionById } from '../../controllers/question/get-id-question.js'

const outPutQuestionRouter = Router()

outPutQuestionRouter.get('/all', getAllQuestion)
outPutQuestionRouter.get('/:id', getQuestionById)

export default outPutQuestionRouter
