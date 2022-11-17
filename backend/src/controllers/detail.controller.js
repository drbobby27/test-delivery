import { DetailPurchase } from '../models/detail.model.js'

export const detail = async (req,res) => {
    try{
        const  detailPurchaseList = await DetailPurchase.findAll({ include: { all: true }})
        res.json( detailPurchaseList)
    }catch(err){
        console.log(err);
    }
   
}

export const detailById = async (req,res) => {
    const { id } = req.params
    try{
        const purchaseId = await DetailPurchase.findOne({
            where: {
              id,
            },
          });
          res.json(purchaseId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createDetail = async  (req,res) => {
    try {
        const { amount, subtotal } = req.body
        
        const createRegister = await DetailPurchase.create({
            amount, subtotal 
        })
        res.status(200).json({message: "Register was created succesfully", createRegister})
           
    } catch (error) {
        console.log(error);
    }
}

export const deleteDetail = async (req,res) => {
    const { id } = req.params
    try{
         await DetailPurchase.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editDetail = async (req,res) => {
    const { id } = req.params
    try {
        const { amount, subtotal } = req.body
    
        const editRegister = await DetailPurchase.findByPk(id)
        editRegister.amount = amount
        editRegister.subtotal = subtotal
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}