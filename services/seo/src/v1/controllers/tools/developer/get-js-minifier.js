export const getJsMinifier = (req, res) => {
  const { code } = req.body
  // Eliminar comentarios de una sola línea
  code.replace(/\/\/.*/g, '')

  // Eliminar comentarios de múltiples líneas
  code.replace(/\/\*[\s\S]*?\*\//g, '')

  // Eliminar espacios en blanco y saltos de línea innecesarios
  code.replace(/\s+/g, ' ')

  return res.send(code)
}
