import { Router } from 'express'
import {
    getProducts,
    productById,
    createProduct,
    deleteProduct,
    editProduct
} from '../controllers/product.controller.js'

export const productRouter = Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', productById)
productRouter.post('/', createProduct)
productRouter.delete('/:id',  deleteProduct)
productRouter.put('/:id', editProduct )