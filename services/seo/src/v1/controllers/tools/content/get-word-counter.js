export const getWordCounter = (req, res) => {
  try {
    const { content } = req.body

    const words = content.split(/\s+/).filter(word => word !== '')
    const letters = content.length

    return res.send({
      wordCount: words.length,
      letterCount: letters
    })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
