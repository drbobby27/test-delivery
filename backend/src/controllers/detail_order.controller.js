import { Detail } from '../models/detail_order.model.js'

export const detail = async (req,res) => {
    try{
        const  detailPurchaseList = await Detail.findAll({ include: { all: true }})
        res.json( detailPurchaseList)
    }catch(err){
        console.log(err);
    }
   
}

export const detailById = async (req,res) => {
    const { id } = req.params
    try{
        const purchaseId = await Detail.findOne({
            where: {
              id,
            },
          });

          if (purchaseId) {
            res.status(200).json(purchaseId);
          } else {
            res.status(404).json({message:"Este ID no existe en 'detalle orden' "});
          }
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}


export const deleteDetail = async (req,res) => {
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

export const editDetail = async (req,res) => {
    const { id } = req.params
    try {
        const { order_id, product_id, amount, total  } = req.body
    
        const editRegister = await Detail.findByPk(id)
        editRegister.order_id = order_id
        editRegister.product_id = product_id
        editRegister.amount = amount
        editRegister.total = total
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}