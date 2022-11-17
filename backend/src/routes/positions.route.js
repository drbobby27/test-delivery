import { Router } from 'express'
import { 
    positionsById,
    positions,
    createPositions,
    editPositions,
    deletePositions
 } from '../controllers/positions.controller.js'

export const positionsRouter = Router()


positionsRouter.get('/api/v1/positions', positions)
positionsRouter.get('/api/v1/positions/:id', positionsById)
positionsRouter.post('/api/v1/positions', createPositions)
positionsRouter.put('/api/v1/positions/:id', editPositions)
positionsRouter.delete('/api/v1/positions/:id', deletePositions)