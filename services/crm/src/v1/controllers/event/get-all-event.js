import { Event } from '../../database/connection/connectionDB.js'

export const getAllEvents = async (req, res, next) => {
  try {
    const allEvents = await Event.findAll()
    if (!allEvents.length) {
      return res
        .status(404)
        .json({ message: 'There are not events in database' })
    }
    return res.status(200).json(allEvents)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
