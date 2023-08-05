import { Performance } from '../../database/conection/conectionDB.js'

export const getPerformanceByPk = async (req, res) => {
  const { id } = req.params

  try {
    const performance = await Performance.findByPk(id)
    if (!performance) {
      return res.status(404).send(`The performanceId: ${id} doesn't exist`)
    }
    return performance
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
