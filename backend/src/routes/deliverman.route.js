import { Router } from 'express'
import {
    getDelivermans,
    delivermanById,
    createDeliverman,
    deleteDeliverman,
    editDeliverman
} from '../controllers/deliverman.controller.js'

export const delivermanRouter = Router()

delivermanRouter.get('/',getDelivermans)
delivermanRouter.get('/:id',delivermanById)
delivermanRouter.post('/',createDeliverman)
delivermanRouter.delete('/:id',deleteDeliverman)
delivermanRouter.put('/:id',editDeliverman)