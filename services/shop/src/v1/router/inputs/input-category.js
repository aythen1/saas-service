import { Router } from 'express'
import { addCategory } from '../../controllers/category/add-category.js'
import { deleteCategory } from '../../controllers/category/delete-category.js'

const inputCategoryRouter = Router()

inputCategoryRouter.post('/create', addCategory)
inputCategoryRouter.put('/:id', deleteCategory)

export default inputCategoryRouter
