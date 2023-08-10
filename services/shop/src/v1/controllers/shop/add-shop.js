import { Shop } from '../../database/connection/connectionDB.js'

export const createShop = async (req, res, next) => {
  const { logo, name, UserId } = req.body
  /*
    {
        UserId: null,
        logo: null,
        coverImage: null,
        name: null,
        ubication: null,
        description: null,
        accountHolderName: null,
        accountHolderEmail: null,
        bankName: null,
        accountNumber: null,
        country: null,
        city: null,
        state: null,
        zip: null,
        streetAddress: null,
        location: null,
        contactNumber: null,
        website: null,
        schedule: null
    }
    */

  if (!logo && !name && !UserId) res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })

  try {
    const carga = await Shop.create(req.body)
    res.json({ message: 'result', carga })
  } catch (error) {
    return next(error)
  }
}
