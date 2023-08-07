import { Author } from '../../database/connection/connectionDB.js'

export const deleteAuthor = async (req, res) => {
  const { id } = req.params
  const author = await Author.findByPk(id)

  if (!author) {
    return res.status(404).send(`The AuthorID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Author.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The AuthorID: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
