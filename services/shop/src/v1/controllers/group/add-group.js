import { Group } from "../../database/connection/connectionDB.js"



export const addGroup = async (req, res, next) => {

    const { name } = req.body

    if(!name){
        res.status(404).json({message: 'name is missing'})
    }else{
        try{
            const newGroup = await Group.create(req.body)
            return newGroup ? res.status(200).json({message: 'grupo creado exitosaente', newGroup}) :
            res.status(404).json({mesage:'ha ocurrido un problema'})
        }catch(error){
            return res.status(404).send(error.message)
        }
    }
    


}