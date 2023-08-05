import { Website } from '../../database/conection/conectionDB.js'

export const addWebsite = async (req, res) => {
  const { domain } = req.body

  if (!domain) {
    return res.status(404).send('Domain is missing')
  }

  try {
    const newWebsite = await Website.create(req.body)
    res.status(201).json(newWebsite)
  } catch (error) {
    res.status(404).json(error)
  }
}
