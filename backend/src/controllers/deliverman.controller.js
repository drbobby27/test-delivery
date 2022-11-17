import  { DomicileC }  from '../models/domicile-company.model.js'
import  { Deliverman }  from '../models/deliverman.model.js' 

export const getDelivermans = async (req,res) => {
    try{
        const delivermanList = await Deliverman.findAll({include:[{model:DomicileC}]})
        res.json(delivermanList)
    }catch(err){
        console.log(err);
    }
   
}

export const delivermanById = async (req,res) => {
    const { id } = req.params
    try{
        const delivermanId = await Deliverman.findOne({
            where: {
              id,
            },
          });
          res.json(delivermanId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createDeliverman = async  (req,res) => {
    try {
        const { full_name, phone_number, company_id } = req.body
        if( !full_name || !phone_number ||  !company_id){
            return res.status(400).json({error: "Uno o más campos vacios"})
        }
        const createRegister = await Deliverman.create({
            full_name, phone_number, company_id
        })
        res.status(200).json({message: "Register was created succesfully", createRegister})
           
    } catch (error) {
        console.log(error)
    }
}

export const deleteDeliverman = async (req,res) => {
    const { id } = req.params
    try{
         await Deliverman.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editDeliverman = async (req,res) => {
    const { id } = req.params
    try {
        const {  full_name, phone_number, company_id  } = req.body
    
        const editRegister = await Deliverman.findByPk(id)
        editRegister.full_name = full_name
        editRegister.phone_number = phone_number
        editRegister.company_id = company_id 
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}