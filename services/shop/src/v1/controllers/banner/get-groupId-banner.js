import { Banner } from '../../database/connection/connectionDB.js'

export const getBannersByGroupId = async (req, res, next) => {
  const { groupId } = req.params

  try {
    if (!groupId) {
      throw new Error('Debe ingresar un groupId')
    } else {
      const banners = await Banner.findAll({
        where: {
          GroupId: groupId
        }
      })
      return res
        .status(201)
        .json({ message: 'banners encontrados', banners })
    }
  } catch (error) {
    return next(error)
  }
}
