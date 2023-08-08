import passport from 'passport'

export function login (req, res, next) {
  // const userReq = req.body  {email:'',pass:''}
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
