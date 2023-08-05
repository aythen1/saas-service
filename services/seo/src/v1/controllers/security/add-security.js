import { Security } from '../../database/conection/conectionDB.js'

export const addSecurity = async (req, res) => {
  try {
    const newSecurity = await Security.create(req.body)
    res.status(201).json(newSecurity)
  } catch (error) {
    res.status(404).json(error)
  }
}
