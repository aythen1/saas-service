import { Speciality } from '../../database/connection/connectionDB.js'

export const getSpecialityByPk = async (req, res) => {
  const { id } = req.params

  try {
    const speciality = await Speciality.findByPk(id)
    if (!speciality) {
      return res.status(404).send(`The specialityId: ${id} doesn't exist`)
    }
    return res.status(200).json({message:'speciality found', speciality})
  } catch (error) {
    return res.status(404).send(error.message)
  }
}