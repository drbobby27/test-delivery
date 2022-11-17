import { Order } from '../models/order.model.js'

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
        const { client_name,  address, phone_number, state,employee_id, deliverman_id , purchase_id } = req.body
        
       
        const createRegister = await Order.create({
            client_name,  address, phone_number, state,employee_id, deliverman_id , purchase_id
        })
        res.status(200).json({message: "Register was created succesfully", createRegister})
           
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
        const { client_name,  address, phone_number, state,employee_id, deliverman_id , purchase_id} = req.body
    
        const editRegister = await Order.findByPk(id)
        editRegister.client_name = client_name
        editRegister.address = address
        editRegister.phone_number = phone_number
        editRegister.state = state
        editRegister.purchase_id = purchase_id
        editRegister.deliverman_id = deliverman_id
        editRegister.employee_id = employee_id
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}