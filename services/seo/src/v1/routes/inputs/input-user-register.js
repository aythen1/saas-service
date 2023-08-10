import { Router } from 'express'
import register from '../../controllers/auth/auth-register.js'

const registerRouter = Router()

registerRouter.post('/register', register)

export default registerRouter
