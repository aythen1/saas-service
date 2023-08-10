import { Service } from '../../database/connection/connectionDB.js'

export const getServiceByIdUser = async (req, res, next) => {
  const { idUser } = req.params

  if (!idUser) return res.status(404).json({ message: 'debe proporcionar el id del usuario' })

  try {
    const consult = await Service.findAll({
      where: {
        UserId: idUser
      }
    })
    // console.log({ consult, idUser })
    res.json({
      message: 'servicios econtrados',
      consult,
      idUser
    })
  } catch (error) {
    return next(error)
  }
}
