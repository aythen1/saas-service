import { Review } from '../../database/connection/connectionDB.js'

export const deleteReview = async (req, res, next) => {
  const { id } = req.params
  const review = await Review.findByPk(id)

  if (!review) {
    return res.status(404).send(`The reviewId: ${id} doesn't exist`)
  }

  try {
    await Review.update({ isDisable: true }, { where: { id } })
    return res.send(`The reviewId: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
