import { Call } from '../../database/connection/connectionDB.js'

export const updateCall = async (req, res, next) => {
  const { id } = req.params
  const { nameTransmitter, nameReceiver, duration, date, stars } = req.body
  try {
    const call = await Call.findByPk(id)
    if (!call) return res.status(404).send(`The callID: ${id} doesn't exist`)

    const callUpdate = await call.update(
      { nameTransmitter, nameReceiver, duration, date, stars },
      { where: { id } }
    )
    return res.status(200).json({ message: 'Call update', call: callUpdate })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
