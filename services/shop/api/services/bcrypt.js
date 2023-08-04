import bcrypt from 'bcrypt';


const hashPassword = (pass)  => {
    return bcrypt.hashSync(pass, 10, (err, hash) => {
      return err ?  err : hash
    })
}

const compare = () => {
    return null
}

export {hashPassword, compare}