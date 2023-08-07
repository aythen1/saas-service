import { Order } from "../../database/connection/connectionDB.js"



export const addOrder = async (req, res, next) => {

    const { truckingNumber } = req.body

    if(!truckingNumber){
        res.status(404).json({message: 'truckingNumber is missing'})
    }else{
        try{
            const newOrder = await Order.create(req.body)
            return newOrder ? res.status(200).json({message: 'orden creada exitosaente', newOrder}) :
            res.status(404).json({mesage:'ha ocurrido un problema'})
        }catch(error){
            return res.status(404).send(error.message)
        }
    }
    


}