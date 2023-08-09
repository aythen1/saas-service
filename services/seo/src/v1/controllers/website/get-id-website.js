import {
  Website,
  Seo,
  Performance,
  Security,
  Miscellaneou
} from '../../database/conection/conectionDB.js'

export const getWebsiteByPk = async (req, res) => {
  const { id } = req.params

  try {
    const website = await Website.findByPk(id, {
      include: [Seo, Performance, Security, Miscellaneou]
    })
    if (!website) {
      return res.status(404).send(`The websiteId: ${id} doesn't exist`)
    }
    return res.status(200).send(website)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
