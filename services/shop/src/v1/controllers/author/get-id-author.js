import { Author } from '../../database/connection/connectionDB.js'

export const getAuthorById = async (req, res, next) => {
  const { id } = req.params
  try {
    const author = await Author.findByPk(id)
    if (!author) {
      return res.status(404).send(`The authorId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'author found', author })
  } catch (error) {
    return next(error)
  }
}
