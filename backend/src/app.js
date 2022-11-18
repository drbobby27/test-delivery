import express from "express"
import morgan from "morgan"
import cors from 'cors'
import fileupload from 'express-fileupload'
import helmet from 'helmet'
import { delivermanRouter } from './routes/deliverman.route.js'
import { orderRouter } from './routes/order.route.js'
import { productRouter } from './routes/product.route.js'
import { employeesRouter } from './routes/employees.route.js'
import { positionsRouter } from './routes/positions.route.js'
import { router } from './routes/auth.route.js'
import { productCategoryRouter } from "./routes/product_category.route.js"
import { domicileCRouter } from "./routes/domicile-company.route.js"
import { detailPurchaseRouter } from "./routes/detail_order.route.js"
import { errorRouter } from "./routes/error404.route.js"

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(fileupload({useTempFiles: true}))
app.use('/api/v1/deliverman', delivermanRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/product-category', productCategoryRouter) 
app.use('/api/v1/detail', detailPurchaseRouter)
app.use('*', errorRouter)
app.use(employeesRouter)
app.use(positionsRouter)
app.use(router)
app.use(domicileCRouter)

export default app