import { Headers } from '../../database/conection/conectionDB.js'

export const addHeaders = async (req, res) => {
  try {
    const newHeaders = await Headers.create(req.body)
    res.status(201).json(newHeaders)
  } catch (error) {
    res.status(404).json(error)
  }
}
