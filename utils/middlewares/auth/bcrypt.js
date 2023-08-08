import bcrypt from 'bcrypt'

const userModel = (userModel) => {
  return userModel
}

const hashPassword = (pass) => {
  return bcrypt.hashSync(pass, 10, (err, hash) => {
    return err || hash
  })
}

const compare = (pass, passHash) => {
  // console.log(bcrypt.compareSync(pass,passHash))
  return bcrypt.compareSync(pass, passHash)
}

export { hashPassword, compare, userModel }
