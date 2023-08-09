import { Router } from 'express'
import { addChat } from '../../controllers/Chat/add-Chat.js'
import { deleteChat } from '../../controllers/Chat/delete-Chat.js'

const inputChatRoute = Router()

inputChatRoute.post('/create', addChat)
inputChatRoute.put('/:id', deleteChat)

export default inputChatRoute
