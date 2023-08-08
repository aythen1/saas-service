import { Review, Service} from "../../database/connection/connectionDB.js"


export const findAllReviewByServiceId = async (req, res, next) => {
    const { serviceId } = req.params

  if(!serviceId) return res.status(404).json({message: 'debe proporcionar un id de servicio'})

    const allReviews = await Review.findAll({where:{ServiceId: serviceId},  include: Service })


    return allReviews
      ? res.status(200).json({ message: 'reseñas localizadas', allReviews })
      : res.status(200).json({ message: 'no hay reseñas asociadas a ese servicio' })
  }