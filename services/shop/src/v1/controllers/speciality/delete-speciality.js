import { Speciality } from '../../database/connection/connectionDB.js'

export const deleteSpeciality = async (req, res) => {
  const { id } = req.params
  const speciality = await Speciality.findByPk(id)

  if (!speciality) {
    return res.status(404).send(`The specialityId: ${id} doesn't exist`)
  }

  try {
    await Speciality.update({ isDisable: true }, { where: { id } })
    return res.send(`The specialityId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}