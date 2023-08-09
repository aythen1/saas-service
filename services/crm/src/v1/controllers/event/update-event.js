import { Event } from '../../database/connection/connectionDB.js'

export const updateEvent = async (req, res, next) => {
  const { id } = req.params
  const { name, date } = req.body
  try {
    const event = await Event.findByPk(id)
    if (!event) return res.status(404).send(`The eventId: ${id} doesn't exist`)

    const eventUpdate = await event.update({ name, date }, { where: { id } })
    return res.status(200).json({ message: 'Event update', event: eventUpdate })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
