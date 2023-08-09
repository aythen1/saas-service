import { Answer } from '../../database/connection/connectionDB.js'

export const deleteAnswer = async (req, res, next) => {
  const { id } = req.params
  const answer = await Answer.findByPk(id)

  if (!answer) {
    return res.status(404).send(`The answerID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Answer.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The answerID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
