import { Website } from '../../database/conection/conectionDB.js'

export const getAllWebsites = async (req, res) => {
  try {
    const websites = await Website.findAll()
    if (!websites.length) {
      return res.status(404).send('There is not websites in database')
    }
    return websites
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
