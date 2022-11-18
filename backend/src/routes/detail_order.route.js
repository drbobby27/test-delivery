import { Router } from 'express'
import {
    detail,
    detailById,
    createDetail,
    deleteDetail,
    editDetail
} from '../controllers/detail_order.controller.js'


export const detailPurchaseRouter = Router()

detailPurchaseRouter.get('/', detail)
detailPurchaseRouter.get('/:id', detailById)
detailPurchaseRouter.post('/', createDetail)
detailPurchaseRouter.delete('/:id', deleteDetail)
detailPurchaseRouter.put('/:id', editDetail)