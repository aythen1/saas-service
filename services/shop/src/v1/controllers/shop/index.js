import { loadedModels } from '../../database/connection/connectionDB.js'
const { UserModel } = loadedModels

async function getShopByIdUser (req, res) {
  const { idUser } = req.params
  const consult = await loadedModels.ShopModel.findAll({
    where: {
      UserId: idUser
    }
  })
  // console.log({ consult, idUser })
  res.json({
    message: 'Usuario econtrado',
    consult,
    idUser
  })
}

async function createShop (req, res) {
  const data = req.body
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

  try {
    const carga = await loadedModels.ShopModel.create(data)
    res.json({ message: 'result', carga })
  } catch (err) {
    console.log(err)
  }
}

export {
  getShopByIdUser,
  createShop
}
