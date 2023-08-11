export const getHtmlMinifier = (req, res) => {
  const { html } = req.body
  // Eliminar espacios en blanco innecesarios
  html.replace(/\s+/g, ' ')

  // Eliminar espacios en blanco alrededor de caracteres especiales
  html.replace(/(<[^>]+>)\s*(<[^>]+>)/g, '$1$2')

  return res.send(html)
}
