export const getWordCounter = (req, res) => {
  const { content } = req.body

  const words = content.split(/\s+/).filter(word => word !== '')
  const letters = content.replace(/\s/g, '').length

  return res.send({
    wordCount: words.length,
    letterCount: letters
  })
}
