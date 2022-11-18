import  { Product } from '../models/product.model.js'
import { ProductCategory } from '../models/product_category.model.js'
import { cloudinary } from "../helpers/helper.js"

export const getProducts = async (req,res) => {
    try{
        const productList = await Product.findAll({include:[{model:ProductCategory}]})
        res.json(productList)
    }catch(err){
        console.log(err);
    }
}

export const productById = async (req,res) => {
    const { id } = req.params
    try{
        const productId = await Product.findOne({
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

export const createProduct = async  (req,res) => {

    try {
    const  {tempFilePath:fileStr}  = req.files.image_url
    const { product_name, price, long_desc, short_desc,  category_id } = req.body

    const uploadResponse = await cloudinary.uploader.upload( fileStr, { upload_preset: "pets_folder" })

    const createRegister = await Product.create({
        product_name, price, long_desc, short_desc, image_url: uploadResponse.secure_url, category_id 
    })
    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteProduct = async (req,res) => {
    const { id } = req.params
    try{
         await Product.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editProduct = async (req,res) => {
    const { id } = req.params
    try {
        const  {tempFilePath:fileStr}  = req.files.image_url

        const uploadResponse = await cloudinary.uploader.upload( fileStr, { upload_preset: "pets_folder" })

        const { product_name, price, long_desc, short_desc,  category_id } = req.body
    
        const editRegister = await Product.findByPk(id)
        editRegister.product_name = product_name
        editRegister.price = price
        editRegister.long_desc = long_desc
        editRegister.short_desc = short_desc
        editRegister.image_url = uploadResponse.secure_url
        editRegister.category_id = category_id
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}