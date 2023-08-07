import { Router } from 'express'
import { addAuthor } from '../../controllers/author/add-author.js'
import { deleteAuthor } from '../../controllers/author/delete-author.js'

const inputAuthorRoute = Router()

inputAuthorRoute.post('/create', addAuthor)
inputAuthorRoute.put('/:id', deleteAuthor)

export default inputAuthorRoute
