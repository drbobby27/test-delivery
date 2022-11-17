import { Router } from 'express'
import {
    DetailPurchases,
    detailPurchaseById,
    createDetailPurchase,
    deleteDetailPurchase,
    editDetailPurchase
} from '../controllers/detail_purchase.controller.js'


export const detailPurchaseRouter = Router()

detailPurchaseRouter.get('/', DetailPurchases)
detailPurchaseRouter.get('/:id', detailPurchaseById)
detailPurchaseRouter.post('/', createDetailPurchase)
detailPurchaseRouter.delete('/:id', deleteDetailPurchase)
detailPurchaseRouter.put('/:id', editDetailPurchase)