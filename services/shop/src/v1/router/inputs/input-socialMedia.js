import { Router } from 'express'

import { addSocialMedia } from '../../controllers/socialMedia/add-socialMedia.js'
import { deleteSocialMedia } from '../../controllers/socialMedia/delete-socialMedia.js'

const inputSocialMedia = Router()

inputSocialMedia.post('/create', addSocialMedia)
inputSocialMedia.put('/:id', deleteSocialMedia)

export default inputSocialMedia
