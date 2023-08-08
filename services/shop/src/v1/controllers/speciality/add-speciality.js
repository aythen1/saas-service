import { Speciality } from '../../database/connection/connectionDB.js'





export const createSpeciality = async (req, res) => {
  const { name } = req.body
  
  if(!name) return res.status(404).json({message: 'debe proporcionar un nombre de especialidad'})

  try {
    const carga = await Speciality.create(req.body)
    res.json({ message: 'result', carga })
  } catch (err) {
    console.log(err)
  }
}