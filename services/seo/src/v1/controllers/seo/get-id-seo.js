import { Seo } from '../../database/conection/conectionDB.js'

export const getSeoByPk = async (req, res) => {
  const { id } = req.params

  try {
    const seo = await Seo.findByPk(id)
    if (!seo) {
      return res.status(404).send(`The seoId: ${id} doesn't exist`)
    }
    return seo
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
