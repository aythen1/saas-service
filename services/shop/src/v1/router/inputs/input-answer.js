import { Router } from 'express'
import { addAnswer } from '../../controllers/answer/add-answer.js'
import { deleteAnswer } from '../../controllers/answer/delete-answer.js'

const inputAnswerRoute = Router()

inputAnswerRoute.post('/create', addAnswer)
inputAnswerRoute.put('/:id', deleteAnswer)

export default inputAnswerRoute
