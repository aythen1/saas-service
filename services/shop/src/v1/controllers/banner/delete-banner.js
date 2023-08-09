import { Banner } from '../../database/connection/connectionDB.js'

export const deleteBanner = async (req, res, next) => {
  const { id } = req.params
  const banner = await Banner.findByPk(id)

  if (!banner) {
    return res.status(404).send(`The bannerID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Banner.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The bannerID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
