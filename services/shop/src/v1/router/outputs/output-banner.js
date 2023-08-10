import { Router } from 'express'
import { getAllBanner } from '../../controllers/banner/get-all-banner.js'
import { getBannerById } from '../../controllers/banner/get-id-banner.js'
import { getBannersByGroupId } from '../../controllers/banner/get-groupId-banner.js'

const outPutBannerRouter = Router()

outPutBannerRouter.get('/all', getAllBanner)
outPutBannerRouter.get('/:id', getBannerById)
outPutBannerRouter.get('/:groupId', getBannersByGroupId)

export default outPutBannerRouter
