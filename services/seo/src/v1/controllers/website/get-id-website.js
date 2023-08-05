import { Website } from '../../database/conection/conectionDB.js'

export const getWebsiteByPk = async (req, res) => {
  const { id } = req.params

  try {
    const website = await Website.findByPk(id)
    if (!website) {
      return res.status(404).send(`The websiteId: ${id} doesn't exist`)
    }
    return website
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
