import { Router } from 'express'
import { getSocialMediaById } from '../../controllers/socialMedia/get-id-socialMedia.js'

const outputSocialMedia = Router()

outputSocialMedia.get('/:id', getSocialMediaById)

export default outputSocialMedia
