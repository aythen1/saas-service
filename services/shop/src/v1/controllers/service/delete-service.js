import { Service } from '../../database/connection/connectionDB.js'

export const deleteService = async (req, res) => {
  const { id } = req.params
  const service = await Service.findByPk(id)

  if (!service) {
    return res.status(404).send(`The serviceId: ${id} doesn't exist`)
  }

  try {
    await Service.update({ isDisable: true }, { where: { id } })
    return res.send(`The serviceId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}