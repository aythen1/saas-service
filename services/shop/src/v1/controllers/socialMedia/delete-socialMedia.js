import { SocialMedia } from '../../database/connection/connectionDB.js'

export const deleteSocialMedia = async (req, res) => {
  const { id } = req.params
  const social = await SocialMedia.findByPk(id)

  if (!social) {
    return res.status(404).send(`The socialID: ${id} doesn't exist`)
  }

  try {
    await SocialMedia.update({ isDisable: true }, { where: { id } })
    return res.send(`The socialID: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
