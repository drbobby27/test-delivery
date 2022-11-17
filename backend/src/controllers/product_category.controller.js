import {ProductCategory} from '../models/product_category.model.js'


export const getCategories = async (req,res) => {
    try{
        const categoryList = await ProductCategory.findAll()
        res.json(categoryList)
    }catch(err){
        console.log(err);
    }
   
}

export const CategoryById = async (req,res) => {
    const { id } = req.params
    try{
        const productId = await ProductCategory.findOne({
            where: {
              id,
            },
          });
          res.json(productId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createCategory = async  (req,res) => {

    try {

    const { type } = req.body

   await ProductCategory.create({
        type
    })
    res.status(200).json({message: "Register was created succesfully.", createCategory})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteCategory = async (req,res) => {
    const { id } = req.params
    try{
         await ProductCategory.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed...`})
       }catch(err){
            console.error(err)
       }
}

export const editCategory = async (req,res) => {
    const { id } = req.params
    try {
        const { type } = req.body
    
        const editRegister = await ProductCategory.findByPk(id)
        editRegister.type = type
        
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}