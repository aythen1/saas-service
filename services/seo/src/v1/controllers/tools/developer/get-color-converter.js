import colorConvert from 'color-convert'

export const getColorConverter = (req, res) => {
  const { color, fromFormat, toFormat } = req.body

  const colorArray = colorConvert[fromFormat][toFormat](color)

  return res.status(colorArray)
}
