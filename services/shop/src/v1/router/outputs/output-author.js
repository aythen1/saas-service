import { Router } from 'express'
import { getAuthorById } from '../../controllers/author/get-id-author.js'
const outputAuthorRoute = Router()

outputAuthorRoute.get('/:id', getAuthorById)

export default outputAuthorRoute
