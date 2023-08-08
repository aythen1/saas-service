import { Review } from '../../database/connection/connectionDB.js'





export const createReview = async (req, res) => {
  const { message } = req.body
  
  if(!message) return res.status(404).json({message: 'debe proporcionar un mensaje de reseña'})

  try {
    const carga = await Review.create(req.body)
    res.json({ message: 'result', carga })
  } catch (err) {
    console.log(err)
  }
}