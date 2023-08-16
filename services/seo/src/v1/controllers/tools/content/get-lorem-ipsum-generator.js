import { loremIpsum } from 'lorem-ipsum'

export const getLoremIpsumGenerator = (req, res) => {
  try {
    const { type, count } = req.query
    // type can be 'words', 'sentences' or 'paragraphs'
    const options = {
      count: Number(count),
      units: type
    }

    return res.send(loremIpsum(options))
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
