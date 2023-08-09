import { Router } from 'express'
import { addQuestion } from '../../controllers/Question/add-Question.js'
import { deleteQuestion } from '../../controllers/Question/delete-Question.js'

const inputQuestionRoute = Router()

inputQuestionRoute.post('/create', addQuestion)
inputQuestionRoute.put('/:id', deleteQuestion)

export default inputQuestionRoute
