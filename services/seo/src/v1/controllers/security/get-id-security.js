import { Security } from '../../database/conection/conectionDB.js'

export const getSecurityByPk = async (req, res) => {
  const { id } = req.params

  try {
    const security = await Security.findByPk(id)
    if (!security) {
      return res.status(404).send(`The securityId: ${id} doesn't exist`)
    }
    return security
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
