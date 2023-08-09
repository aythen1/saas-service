import { Manufacturers } from '../../database/connection/connectionDB.js'

export const deleteManufacturers = async (req, res, next) => {
  const { id } = req.params
  const manufacturers = await Manufacturers.findByPk(id)

  if (!manufacturers) {
    return res.status(404).send(`The ManufacturersID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Manufacturers.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The manufacturersID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
