import { Order } from '../models/order.model.js'
import { Detail } from '../models/detail_order.model.js'
import { v4 } from 'uuid'

export const getOrders = async (req,res) => {
    try{
        const orderList = await Order.findAll({ include: { all: true }})
        res.json(orderList)
    }catch(err){
        console.log(err);
    }
   
}

export const orderById = async (req,res) => {
    const { id } = req.params
    try{
        const orderId = await Order.findOne({
            where: {
              id,
            },
          });
          res.json(orderId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createOrder = async  (req,res) => {
    try {
        const {  products, client_name , phone_number, address, total  } = req.body
        const uuid = v4()
        
        const today = new Date()
    
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let dateNow = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() 
        let  date_order = `${dateNow} ${time}`

        
        const desc_product = arr => arr.map(({cantidad, id}) => {
        return `Compraste: ${cantidad}  id: ${id} por un total de:${total}`
        })
       
        const createOrder = await Order.create({
            id: uuid, date_order,  client_name , phone_number, address, total, description: desc_product(products) 
        })

        

        const createDetail = await products.map(({product_id, amount, total}) => {
            return  Detail.create({
                order_id: uuid, product_id, amount, total
         })
        }) 

        res.status(200).json({message: "Register was created succesfully", createOrder})
           
    } catch (error) {
        console.log(error)        
    }
}

export const deleteOrder = async (req,res) => {
    const { id } = req.params
    try{
         await Order.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editOrder= async (req,res) => {
    const { id } = req.params
    try {
        const {  date_order,  client_name, phone_number, status, address, total, description  } = req.body
    
        const editRegister = await Order.findByPk(id)
        editRegister.date_order = date_order
        editRegister.client_name = client_name
        editRegister.phone_number = phone_number
        editRegister.status = status
        editRegister.address = address
        editRegister.total = total
        editRegister.description = description 
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}