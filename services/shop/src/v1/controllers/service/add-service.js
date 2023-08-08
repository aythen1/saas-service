import { Service } from '../../database/connection/connectionDB.js'





export const createService = async (req, res) => {
  const { name } = req.body
  
  if(!name) return res.status(404).json({message: 'debe proporcionar un nombre de servicio'})

  try {
    const carga = await Service.create(req.body)
    res.json({ message: 'result', carga })
  } catch (err) {
    console.log(err)
  }
}