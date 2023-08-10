import { Performance } from '../../database/connection/connectionDB.js'

export const getPerformanceByPk = async (req, res) => {
  const { id } = req.params

  try {
    const performance = await Performance.findByPk(id)
    if (!performance) {
      return res.status(404).send(`The performanceId: ${id} doesn't exist`)
    }
    return res.status(200).send(performance)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
