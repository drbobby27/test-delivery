import { Employees } from '../models/employees.model.js'
import { Positions } from '../models/positions.model.js'
import bcryptjs from 'bcrypt'


export const employees = async (req,res) => {
    try{
        const employeesList = await Employees.findAll({include:[{model:Positions}]})
        res.json(employeesList)
    }catch(err){
        console.log(err);
    }
   
}

export const employeesById = async (req,res) => {
    const { id } = req.params
    try{
        const employeesId = await Employees.findOne({
            where: {
              id,
            },
          });
          res.json(employeesId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createEmployees = async  (req,res) => {
    const salt = bcryptjs.genSaltSync();//uses the bcrypt npm package
    try{
        const { name,address,email,phoneNumber, password,role_id } = req.body
    if( !name || !address || !email || !phoneNumber || !password|| !role_id ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createEmployees = await Employees.create({
        name,address,email,phoneNumber,password: bcryptjs.hashSync( req.body.password.toString(), salt ),role_id
    })
    res.status(200).json({message: 'Employee was created succesfully', createEmployees})
    }catch(error){
        console.log(error)
    }
    
}

export const deleteEmployees = async (req,res) => {
    const { id } = req.params
    try{
         await Employees.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Employees with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editEmployees = async (req,res) => {
    const salt = bcryptjs.genSaltSync();
    const { id } = req.params
    try {
        const { name,address,email,phoneNumber,password,role_id } = req.body
    
        const editEmployees = await Employees.findByPk(id)
        editEmployees.name = name
        editEmployees.address = address
        editEmployees.email = email
        editEmployees.phoneNumber = phoneNumber
        editEmployees.password = bcryptjs.hashSync( password.toString(), salt )
        editEmployees.role_id = role_id
        await editEmployees.save()
        
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editEmployees})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}