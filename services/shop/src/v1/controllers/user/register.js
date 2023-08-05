import { loadedModels } from '../../database/connection/connectionDB.js'
import { hashPassword } from '../../services/bcrypt.js'

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    if (!password || !email) return res.json({ status: 400, message: 'ingrese los campos obligatorios' })

    else if (email && password && !name) {
      const [user, isCreated] = await loadedModels.UserModel.findOrCreate({ where: { email }, defaults: { email, password: hashPassword(password) } })
      isCreated ? res.json({ status: 200, message: 'usuario registrado correctamente', user }) : res.json({ status: 404, message: 'esta cuenta ya existe' })
    } else {
      const [user, isCreated] = await loadedModels.UserModel.findOrCreate({ where: { email }, defaults: { name, email, password: hashPassword(password) } })
      isCreated ? res.json({ status: 200, message: 'usuario registrado correctamente', user }) : res.json({ status: 404, message: 'esta cuenta ya existe' })
    }
  } catch (err) {
    console.log({ message: 'ocurrio un error', err })
  }
}

export default register
