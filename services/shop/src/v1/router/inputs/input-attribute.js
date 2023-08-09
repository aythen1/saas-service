import { Router } from 'express'
import { addAttribute } from '../../controllers/Attribute/add-Attribute.js'
import { deleteAttribute } from '../../controllers/Attribute/delete-Attribute.js'

const inputAttributeRoute = Router()

inputAttributeRoute.post('/create', addAttribute)
inputAttributeRoute.put('/:id', deleteAttribute)

export default inputAttributeRoute
