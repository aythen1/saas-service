import { Website } from '../../database/connection/connectionDB.js'

export const getAllWebsites = async (req, res) => {
  try {
    const websites = await Website.findAll()
    if (!websites.length) {
      return res.status(404).send('There is not websites in database')
    }
    return res.status(200).send(websites)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
