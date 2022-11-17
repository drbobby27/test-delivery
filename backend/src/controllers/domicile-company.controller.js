import { DomicileC } from '../models/domicile-company.model.js'

export const getDomicileC = async (req,res) => {
    try{
        const domicileCList = await DomicileC.findAll()
        res.json(domicileCList)
    }catch(err){
        console.log(err);
    }
   
}

export const domicileCById = async (req,res) => {
    const { id } = req.params
    try{
        
        const domicileCById= await  DomicileC.findOne({
            where: {
              id,
            },
          });
          res.json(domicileCById);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createDomicileC = async  (req,res) => {
    try {
        const { name,  address, } = req.body
        if( !name || !address ){
            return res.status(400).json({error: "Uno o más campos vacios"})
        }
        const createDomicileC = await DomicileC.create({
            name,  address
        })
        res.status(200).json({message: "Register was created succesfully", createDomicileC})
           
    } catch (error) {
        console.log(error)
    }
}

export const deleteDomicileC = async (req,res) => {
    const { id } = req.params
    try{
         await DomicileC.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editDomicileC = async (req,res) => {
    const { id } = req.params
    try {
        const {  name, address } = req.body
    
        const editDomicileC = await DomicileC.findByPk(id)
        editDomicileC.name = name
        editDomicileC.address = address
        await editDomicileC.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editDomicileC})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}