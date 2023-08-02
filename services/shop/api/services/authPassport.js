import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';


const users = [
    { id: 0, username: 'user-0', password: 'pass-0', email: 'example01@gmail.com' },
    { id: 1, username: 'user-1', password: 'pass-1', email: 'example02@gmail.com' },
    { id: 2, username: 'user-2', password: 'pass-2', email: 'example03@gmail.com' }
]; //db fake

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find((user) => user.id === id); //simulation find in DB
    console.log('llega?')
    done(null, user);
});

//Local Strategy
passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },(req, email, password, done) => {
        const user = users.find((user) => user.email === email)
        if (!user) { // [] == null/false ; [{}] == true}
            console.log('llega?')
            return done(null, false, { msj: 'Incorrect email' });
        }

        if (user.password !== password) {
            console.log('llega?')
            return done(null, false, { msj: 'Incorrect password' });
        }

        return done(null, user);
    })
);

// Ruta de inicio de sesión
function login(req, res, next) {
    const userReq = req.body //{email:'',pass:''}
    console.log(userReq.email, 'accedo al email enviado?')
    passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/' }, (err, user) => {
        console.log(user, 'user en login')
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: 'email inválido' });
        }
        if (user.password !== userReq.password) {
            return res.status(401).json({ msj: 'Incorrect password' });
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            res.json({ message: 'Inicio de sesión exitoso', user: user }); //user{id,emil,name,...etc}
        });
    })(req, res, next);
}

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'Acceso no autorizado' });
}

export {
    passport,
    isAuthenticated,
    login
}