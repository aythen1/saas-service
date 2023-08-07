import { Shipping } from "../../database/connection/connectionDB.js"



export const addShipping = async (req, res, next) => {

    const { name } = req.body

    if(!name){
        res.status(404).json({message: 'name is missing'})
    }else{
        try{
            const newShipping = await Shipping.create(req.body)
            return newShipping ? res.status(200).json({message: 'orden creada exitosaente', newShipping}) :
            res.status(404).json({mesage:'ha ocurrido un problema'})
        }catch(error){
            return res.status(404).send(error.message)
        }
    }
    
}