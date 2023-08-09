import { Router } from 'express'
import { getAllBanner } from '../../controllers/banner/get-all-banner.js'
import { getBannerById } from '../../controllers/banner/get-id-banner.js'

const outPutBannerRouter = Router()

outPutBannerRouter.get('/all', getAllBanner)
outPutBannerRouter.get('/:id', getBannerById)

export default outPutBannerRouter
