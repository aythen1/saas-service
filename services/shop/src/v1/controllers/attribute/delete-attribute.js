import { Attribute } from '../../database/connection/connectionDB.js'

export const deleteAttribute = async (req, res, next) => {
  const { id } = req.params
  const attribute = await Attribute.findByPk(id)

  if (!attribute) {
    return res.status(404).send(`The attributeID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await attribute.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The attributeID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
