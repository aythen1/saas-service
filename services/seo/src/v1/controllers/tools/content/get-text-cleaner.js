export const getTextCleaner = (req, res) => {
  try {
    const { text, removeHtmlTags, removeDuplicateSpaces, removeDuplicateLineBreaks } = req.body
    let cleanedText = text

    // Limpiar etiquetas HTML
    if (removeHtmlTags === 'all') {
      cleanedText = cleanedText.replace(/<[^>]*>/g, '')
    }

    // Limpiar espacios duplicados
    if (removeDuplicateSpaces === 'duplicated') {
      cleanedText = cleanedText.replace(/\s+/g, ' ')
    } else if (removeDuplicateSpaces === 'all') {
      cleanedText = cleanedText.replace(/\s/g, '')
    }

    // Limpiar saltos de línea duplicados
    if (removeDuplicateLineBreaks === 'duplicated') {
      cleanedText = cleanedText.replace(/\n\s*\n/g, '\n')
    } else if (removeDuplicateLineBreaks === 'all') {
      cleanedText = cleanedText.replace(/\n/g, '')
    }

    return res.send(cleanedText)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
