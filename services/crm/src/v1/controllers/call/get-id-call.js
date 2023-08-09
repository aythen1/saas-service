import { Call } from '../../database/connection/connectionDB.js'

export const getCallByPk = async (req, res, next) => {
  const { id } = req.params
  try {
    const call = await Call.findByPk(id)
    if (!call) {
      return res.status(404).send(`The callID: ${id} doesn't exist`)
    }
    return res.status(200).json(call)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
