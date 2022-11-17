import { Router } from 'express'
import { 
    employeesById,
    employees,
    createEmployees,
    editEmployees,
    deleteEmployees
 } from '../controllers/employees.controller.js'

export const employeesRouter = Router()


employeesRouter.get('/api/v1/employees', employees)
employeesRouter.get('/api/v1/employees/:id', employeesById)
employeesRouter.post('/api/v1/employees', createEmployees)
employeesRouter.put('/api/v1/employees/:id', editEmployees)
employeesRouter.delete('/api/v1/employees/:id', deleteEmployees)