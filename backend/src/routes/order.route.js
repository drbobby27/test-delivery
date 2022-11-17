import { Router } from 'express'
import {
    getOrders,
    orderById,
    createOrder,
    deleteOrder,
    editOrder
} from '../controllers/order.controller.js'

export const orderRouter = Router()

orderRouter.get('/', getOrders)
orderRouter.get('/:id', orderById)
orderRouter.post('/', createOrder)
orderRouter.delete('/:id',  deleteOrder)
orderRouter.put('/:id', editOrder)