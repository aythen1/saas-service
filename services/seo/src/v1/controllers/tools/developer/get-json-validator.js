export const getJsonValidator = (req, res) => {
  const { json } = req.query

  try {
    JSON.parse(json)
    return res.send({
      json,
      validate: true
    })
  } catch (error) {
    return res.send({
      json,
      validate: false
    })
  }
}
