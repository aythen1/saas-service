import { Event } from '../../database/connection/connectionDB.js'

export const deleteEvent = async (req, res, next) => {
  const { id } = req.params
  const event = await Event.findByPk(id)

  if (!event) {
    return res.status(404).send(`The eventID: ${id} doesn't exist`)
  }

  try {
    await Event.update({ isDisable: true }, { where: { id } })
    return res.send(`The eventID: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
