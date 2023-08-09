import { Event } from '../../database/connection/connectionDB.js'

export const createEvent = async (req, res) => {
  const { name, date } = req.body
  if (!name || !date) return res.status(404).send('Name or date are missing')

  try {
    const newEvent = await Event.create({ name, date })
    return res.status(201).json(newEvent)
  } catch (error) {
    res.status(404).send(error.message)
  }
}
