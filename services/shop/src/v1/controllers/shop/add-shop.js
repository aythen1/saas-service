import { User, Shop } from '../../database/connection/connectionDB.js'





export const createShop = async (req, res) => {
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
    const carga = await Shop.create(data)
    res.json({ message: 'result', carga })
  } catch (err) {
    console.log(err)
  }
}

