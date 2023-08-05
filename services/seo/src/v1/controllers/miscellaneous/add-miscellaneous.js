import { Miscellaneous } from '../../database/conection/conectionDB.js'

export const addMiscellaneous = async (req, res) => {
  try {
    const newMiscellaneous = await Miscellaneous.create(req.body)
    res.status(201).json(newMiscellaneous)
  } catch (error) {
    res.status(404).json(error)
  }
}
