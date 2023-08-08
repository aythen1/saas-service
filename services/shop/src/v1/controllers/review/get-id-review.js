import { Review } from '../../database/connection/connectionDB.js'

export const getReviewByPk = async (req, res, next) => {
  const { id } = req.params

  try {
    const review = await Review.findByPk(id)
    if (!review) {
      return res.status(404).send(`The eviewId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'review found', review })
  } catch (error) {
    return next(error)
  }
}
