import { Router } from 'express'
import { 
    domicileCById,
    getDomicileC,
    createDomicileC,
    editDomicileC,
    deleteDomicileC
 } from '../controllers/domicile-company.controller.js'

export const domicileCRouter = Router()


domicileCRouter.get('/api/v1/delivery-company', getDomicileC)
domicileCRouter.get('/api/v1/delivery-company/:id', domicileCById)
domicileCRouter.post('/api/v1/delivery-company', createDomicileC)
domicileCRouter.put('/api/v1/delivery-company/:id', editDomicileC)
domicileCRouter.delete('/api/v1/delivery-company/:id', deleteDomicileC)