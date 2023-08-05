import { Headers } from '../../database/conection/conectionDB.js'

export const getHeadersByPk = async (req, res) => {
  const { id } = req.params

  try {
    const headers = await Headers.findByPk(id)
    if (!headers) {
      return res.status(404).send(`The headersId: ${id} doesn't exist`)
    }
    return headers
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
