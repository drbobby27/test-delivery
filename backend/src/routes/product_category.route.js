import { Router } from 'express'
import {
    getCategories,
    CategoryById,
    createCategory,
    deleteCategory,
    editCategory
} from '../controllers/product_category.controller.js'

export const productCategoryRouter = Router()

productCategoryRouter.get('/', getCategories)
productCategoryRouter.get('/:id', CategoryById)
productCategoryRouter.post('/', createCategory)
productCategoryRouter.delete('/:id',  deleteCategory)
productCategoryRouter.put('/:id', editCategory )