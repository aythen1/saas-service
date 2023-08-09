import { Tag } from '../../database/connection/connectionDB.js'

export const deleteTag = async (req, res, next) => {
  const { id } = req.params
  const tag = await Tag.findByPk(id)

  if (!tag) {
    return res.status(404).send(`The TagID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Tag.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The tagID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
