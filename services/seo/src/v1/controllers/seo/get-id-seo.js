import { Headers, Seo } from '../../database/conection/conectionDB.js'

export const getSeoByPk = async (req, res) => {
  const { id } = req.params

  try {
    const seo = await Seo.findByPk(id, {
      include: {
        model: Headers,
        attributes: ['h1', 'h2', 'h3', 'h4']
      }
    })
    if (!seo) {
      return res.status(404).send(`The seoId: ${id} doesn't exist`)
    }
    return res.status(404).send(seo)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
