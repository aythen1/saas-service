import bcrypt from 'bcrypt'
import { hashPassword } from '../../../../../../utils/middlewares/auth/authPassport.js'
import { User } from '../../database/connection/connectionDB.js'

// se debe utilizar el modelo User de cada servicio

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    if (!password || !email) return res.json({ status: 400, message: 'ingrese los campos obligatorios' })

    else if (email && password && !name) {
      const [user, isCreated] = await User.findOrCreate({ where: { email }, defaults: { email, password: hashPassword(password, bcrypt) } })
      isCreated ? res.json({ status: 200, message: 'usuario registrado correctamente', user }) : res.json({ status: 404, message: 'esta cuenta ya existe' })
    } else {
      const [user, isCreated] = await User.findOrCreate({ where: { email }, defaults: { name, email, password: hashPassword(password, bcrypt) } })
      isCreated ? res.json({ status: 200, message: 'usuario registrado correctamente', user }) : res.json({ status: 404, message: 'esta cuenta ya existe' })
    }
  } catch (error) {
    return next(error)
  }
}

export default register
