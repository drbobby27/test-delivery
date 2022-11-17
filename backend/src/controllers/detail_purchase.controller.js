import { Detail } from '../models/detail.model.js'

export const DetailPurchases = async (req,res) => {
    try{
        const  detailPurchaseList = await Detail .findAll({ include: { all: true }})
        res.json( detailPurchaseList)
    }catch(err){
        console.log(err);
    }
   
}

export const detailPurchaseById = async (req,res) => {
    const { id } = req.params
    try{
        const purchaseId = await Detail.findOne({
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

export const createDetailPurchase = async  (req,res) => {
    try {
        const { purchase_id, product_id, amount, total } = req.body
        
        const createRegister = await Detail.create({
            purchase_id, product_id, amount, total
        })
        res.status(200).json({message: "Register was created succesfully", createRegister})
           
    } catch (error) {
        console.log(error);
    }
}

export const deleteDetailPurchase = async (req,res) => {
    const { id } = req.params
    try{
         await Detail.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editDetailPurchase = async (req,res) => {
    const { id } = req.params
    try {
        const { purchase_id, product_id, amount, total  } = req.body
    
        const editRegister = await Detail.findByPk(id)
        editRegister.purchase_id = purchase_id
        editRegister.product_id = product_id
        editRegister.amount = amount
        editRegister.total = total
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}