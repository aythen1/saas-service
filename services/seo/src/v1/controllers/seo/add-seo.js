import { Seo } from '../../database/conection/conectionDB.js'

export const addSeo = async (req, res) => {
  const { title } = req.body

  if (!title) {
    return res.status(404).send('title is missing')
  }

  try {
    const newSeo = await Seo.create(req.body)
    res.status(201).json(newSeo)
  } catch (error) {
    res.status(404).json(error)
  }
}
