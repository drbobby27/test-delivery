import { Router } from 'express'
import {
    getPurchases,
    purchaseById,
    createPurchase,
    deletePurchase,
    editPurchase
} from '../controllers/purchase.controller.js'

export const purchaseRouter = Router()

purchaseRouter.get('/', getPurchases)
purchaseRouter.get('/:id', purchaseById)
purchaseRouter.post('/', createPurchase)
purchaseRouter.delete('/:id',  deletePurchase)
purchaseRouter.put('/:id', editPurchase)