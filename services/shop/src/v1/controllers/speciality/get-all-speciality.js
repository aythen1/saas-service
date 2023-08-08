import { Speciality } from '../../database/connection/connectionDB.js'

export const getAllSpeciality = async (req, res) => {
  

  try {
    const speciality = await Speciality.findAll()
    if (!speciality) {
      return res.status(404).send(`doesn't exists`)
    }
    return res.status(200).json({message:'specialities found', speciality})
  } catch (error) {
    return res.status(404).send(error.message)
  }
}