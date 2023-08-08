


const passportAuthenticator = (UserModel, passport, LocalStrategy, bcrypt) => {

  
  const compare = (pass, passHash) => {
    // console.log(bcrypt.compareSync(pass,passHash))
    return bcrypt.compareSync(pass, passHash)
  }


  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  
  passport.deserializeUser((id, done) => {
    const user = UserModel.findOne({
      where: {
        id
      }
    })
  
    done(null, user)
  })
  
  // Local Strategy
  passport.use(
    new LocalStrategy({
      usernameField: 'email', // 'email'
      passwordField: 'password',
      passReqToCallback: true
    }, async (req, email, password, done) => {
      const findUser = await UserModel.findOne({
        where: {
          email
        }
      })
  
      if (!findUser) {
        return done(null, false, 'Incorrect email')
      }
  
      if (!await compare(password, findUser.password)) {
        return done(null, false, 'Incorrect password')
      }
  
      return done(null, findUser, 'Usuario ingresado con exito')
    })
  )
}


function isAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({ message: 'Acceso no autorizado' })
}

const hashPassword = (pass, bcrypt) => {
  return bcrypt.hashSync(pass, 10, (err, hash) => {
    return err || hash
  })
}

export {
  hashPassword,
  passportAuthenticator,
  isAuthenticated,
}
