import { Router } from 'express'
import register from '../../controllers/user/register.js'

const registerRouter = Router()

registerRouter.post('/register', register)

export default registerRouter
