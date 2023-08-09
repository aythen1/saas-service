import { User } from '../../database/connection/connectionDB.js'

export const createUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(404).send('email or password are missing')
  }

  try {
    const newUser = await User.create({ email, password })

    res.status(201).json(newUser)
  } catch (error) {
    res.status(404).send(error.message)
  }
}
