import { Call } from '../../database/connection/connectionDB.js'

export const createCall = async (req, res) => {
  const { nameTransmitter, nameReceiver, duration, date, stars } = req.body
  if (!nameTransmitter || !nameReceiver || !duration || !date || !stars) {
    return res
      .status(404)
      .send(' nameTransmitter,nameReceiver or date are missing')
  }

  try {
    const newCall = await Call.create({
      nameTransmitter,
      nameReceiver,
      duration,
      date,
      stars
    })
    return res.status(201).json(newCall)
  } catch (error) {
    res.status(404).send(error.message)
  }
}
