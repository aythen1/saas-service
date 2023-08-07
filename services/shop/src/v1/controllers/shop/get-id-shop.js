import { User } from "../../database/connection/connectionDB.js"




export const getShopByIdUser = async (req, res) => {
    const { idUser } = req.params
    const consult = await User.findAll({
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

  