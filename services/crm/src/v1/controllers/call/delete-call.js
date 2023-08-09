import { Call } from '../../database/connection/connectionDB.js'

export const deleteCall = async (req, res, next) => {
  const { id } = req.params
  const call = await Call.findByPk(id)

  if (!call) {
    return res.status(404).send(`The callId: ${id} doesn't exist`)
  }

  try {
    await Call.update({ isDisable: true }, { where: { id } })
    return res.send(`The callId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
