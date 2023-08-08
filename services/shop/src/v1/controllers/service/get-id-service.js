import { Service, User } from "../../database/connection/connectionDB.js"




export const getServiceByIdUser = async (req, res) => {
    const { idUser } = req.params

    if(!idUser) return res.status(404).json({message:'debe proporcionar el id del usuario'})

    const consult = await Service.findAll({
      where: {
        UserId: idUser
      }
    })
    // console.log({ consult, idUser })
    res.json({
      message: 'Usuario econtrado',
      consult,
      idUser
    })
  }
