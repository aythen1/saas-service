import { Router } from "express"
import { getAllCategory } from "../../controllers/category/get-all-category.js"
import { getCategoryByPk } from "../../controllers/category/get-id-category.js"


const outPutCategoryRouter = Router()

outPutCategoryRouter.get('/all', getAllCategory)
outPutCategoryRouter.get('/:id', getCategoryByPk)

export default outPutCategoryRouter