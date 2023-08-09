import { Withdrawals } from '../../database/connection/connectionDB.js'

export const deleteWithdrawals = async (req, res, next) => {
  const { id } = req.params
  const withdrawals = await Withdrawals.findByPk(id)

  if (!withdrawals) {
    return res.status(404).send(`The withdrawalsID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Withdrawals.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The withdrawalsID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
