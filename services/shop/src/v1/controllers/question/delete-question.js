import { Question } from '../../database/connection/connectionDB.js'

export const deleteQuestion = async (req, res, next) => {
  const { id } = req.params
  const question = await Question.findByPk(id)

  if (!question) {
    return res.status(404).send(`The questionID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Question.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The questionID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
