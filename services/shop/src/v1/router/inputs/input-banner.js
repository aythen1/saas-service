import { Router } from 'express'
import { addBanner } from '../../controllers/Banner/add-Banner.js'
import { deleteBanner } from '../../controllers/Banner/delete-Banner.js'

const inputBannerRoute = Router()

inputBannerRoute.post('/create', addBanner)
inputBannerRoute.put('/:id', deleteBanner)

export default inputBannerRoute
