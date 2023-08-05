import { Headers } from '../../database/conection/conectionDB'

export const deleteHeaders = async (req, res) => {
  const { id } = req.params
  const headers = await Headers.findByPk(id)

  if (!headers) {
    return res.status(404).send(`The headersId: ${id} doesn't exist`)
  }

  try {
    await Headers.update({ isDisable: true }, { where: id })
    return res.send(`The headersId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
