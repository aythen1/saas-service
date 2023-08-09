import { Performance } from '../../database/conection/conectionDB.js'

export const deletePerformance = async (req, res) => {
  const { id } = req.params
  const performance = await Performance.findByPk(id)

  if (!performance) {
    return res.status(404).send(`The performanceId: ${id} doesn't exist`)
  }

  try {
    await Performance.update({ isDisable: true }, { where: id })
    return res.send(`The performanceId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
