import { Website } from '../../database/conection/conectionDB.js'

export const addWebsite = async (req, res) => {
  const {
    domain,
    privacy,
    password,
    notification,
    ips,
    url,
    bots,
    script
  } = req.body

  if (!domain) {
    return res.status(404).send('Domain is missing')
  }

  try {
    const newWebsite = await Website.create({
      domain,
      privacy,
      password,
      notification,
      ips,
      url,
      bots,
      script,
      createdByUser: true
    })
    res.status(201).json(newWebsite)
  } catch (error) {
    res.status(404).json(error)
  }
}
