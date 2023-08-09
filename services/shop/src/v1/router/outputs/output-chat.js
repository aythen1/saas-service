import { Router } from 'express'
import { getAllChat } from '../../controllers/chat/get-all-chat.js'
import { getChatById } from '../../controllers/chat/get-id-chat.js'

const outPutChatRouter = Router()

outPutChatRouter.get('/all', getAllChat)
outPutChatRouter.get('/:id', getChatById)

export default outPutChatRouter
