export const getCssMinifier = (req, res) => {
  const { code } = req.body
  // Eliminar comentarios
  code.replace(/\/\*[\s\S]*?\*\//g, '')

  // Eliminar espacios en blanco innecesarios
  code.replace(/\s+/g, ' ')

  // Eliminar espacios en blanco alrededor de caracteres especiales
  code.replace(/\s*([{}:;,])\s*/g, '$1')

  return res.send(code)
}
