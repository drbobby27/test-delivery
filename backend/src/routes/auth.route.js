import { Router } from 'express'
import { 
    login
 } from '../controllers/auth.controller.js'


export const router =Router();

router.post('/api/v1/auth/login',login)