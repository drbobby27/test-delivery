import { Positions} from '../models/positions.model.js'



export const positions = async (req,res) => {
    try{
        const positionsList = await Positions.findAll()
        res.json(positionsList)
    }catch(err){
        console.log(err);
    }
   
}

export const positionsById = async (req,res) => {
    const { id } = req.params
    try{
        const positionsId = await Positions.findOne({
            where: {
              id,
            },
          });
          res.json(positionsId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createPositions = async  (req,res) => {
    try{
        const { name } = req.body
    if( !name ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createPositions = await Positions.create({
        name
    })
    res.status(200).json({message: 'Positions was created succesfully', createPositions})
    }catch(error){
        console.log(error)
    }
    
}

export const deletePositions = async (req,res) => {
    const { id } = req.params
    try{
         await Positions.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Positions with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editPositions = async (req,res) => {
    const { id } = req.params
    try {
        const { name } = req.body
    
        const editPositions = await Positions.findByPk(id)
        editPositions.name = name
        await editPositions.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editPositions})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}