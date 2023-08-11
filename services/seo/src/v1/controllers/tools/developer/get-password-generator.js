export const getPasswordGenerator = (req, res) => {
  const { totalLength, options } = req.body

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const digitChars = '0123456789'
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?'

  let allChars = ''
  let password = ''

  if (options.lowercase) {
    allChars += lowercaseChars
  }
  if (options.uppercase) {
    allChars += uppercaseChars
  }
  if (options.digits) {
    allChars += digitChars
  }
  if (options.symbols) {
    allChars += symbolChars
  }

  if (allChars === '') {
    return res.status(404).send('One option must be selected.')
  }

  for (let i = 0; i < totalLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length)
    password += allChars[randomIndex]
  }

  return res.send(password)
}
