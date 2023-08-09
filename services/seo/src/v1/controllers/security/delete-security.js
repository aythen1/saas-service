import { Security } from '../../database/conection/conectionDB.js'

export const deleteSecurity = async (req, res) => {
  const { id } = req.params
  const security = await Security.findByPk(id)

  if (!security) {
    return res.status(404).send(`The securityId: ${id} doesn't exist`)
  }

  try {
    await Security.update({ isDisable: true }, { where: id })
    return res.send(`The securityId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
