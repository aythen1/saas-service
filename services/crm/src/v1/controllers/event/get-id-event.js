import { Event } from '../../database/connection/connectionDB.js'

export const getEventByPk = async (req, res, next) => {
  const { id } = req.params
  try {
    const event = await Event.findByPk(id)
    if (!event) {
      return res.status(404).send(`The eventID: ${id} doesn't exist`)
    }
    return res.status(200).json(event)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
