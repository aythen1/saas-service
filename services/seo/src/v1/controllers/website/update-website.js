import { Website } from '../../database/conection/conectionDB'

export const updateWebsite = async (req, res) => {
  const { id } = req.params
  const {
    privacy,
    password,
    notification,
    ips,
    url,
    bots,
    script,
    pages,
    referrers
  } = req.body
  try {
    const website = await Website.findByPk(id)
    if (!website) {
      return res.status(404).send(`The websiteId: ${id} doesn't exist`)
    }

    await website.update(
      {
        privacy,
        password,
        notification,
        ips,
        url,
        bots,
        script,
        pages,
        referrers
      },
      { where: id }
    )
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
