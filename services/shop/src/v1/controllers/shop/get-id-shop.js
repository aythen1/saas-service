import { Shop } from '../../database/connection/connectionDB.js'

export const getShopByIdUser = async (req, res, next) => {
  const { idUser } = req.params

  try {
    const consult = await Shop.findAll({
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
  } catch (error) {
    return next(error)
  }
}
