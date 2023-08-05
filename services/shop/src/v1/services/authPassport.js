import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { loadedModels } from '../database/connection/connectionDB.js'
import { compare } from 'bcrypt'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  const user = loadedModels.UserModel.findOne({
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
    const findUser = await loadedModels.UserModel.findOne({
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

// Ruta de inicio de sesión
function login (req, res, next) {
  const userReq = req.body // {email:'',pass:''}
  passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/' }, (err, user, message) => {
    // console.log({messageError})
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ message })
    }
    req.login(user, (err) => {
      if (err) {
        return next(err)
      }
      res.json({ message: 'Inicio de sesión exitoso', user }) // user{id,emil,name,...etc}
    })
  })(req, res, next)
}

function isAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({ message: 'Acceso no autorizado' })
}

export {
  passport,
  isAuthenticated,
  login
}
