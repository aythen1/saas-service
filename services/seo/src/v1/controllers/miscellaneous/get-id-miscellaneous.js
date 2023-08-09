import { Miscellaneou } from '../../database/conection/conectionDB.js'

export const getMiscellaneousByPk = async (req, res) => {
  const { id } = req.params

  try {
    const miscellaneou = await Miscellaneou.findByPk(id)
    if (!miscellaneou) {
      return res.status(404).send(`The miscellaneouId: ${id} doesn't exist`)
    }
    return res.status(200).send(miscellaneou)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
