import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';


const users = [
    { id: 0, userName: 'user-0', password: 'pass-0', email: 'example01@gmail.com' },
    { id: 1, userName: 'user-1', password: 'pass-1', email: 'example02@gmail.com' },
    { id: 2, userName: 'user-2', password: 'pass-2', email: 'example03@gmail.com' }
]; //db fake

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find((user) => user.id === id); //simulation find in DB
    done(null, user);
});

//Local Strategy
passport.use(
    new LocalStrategy({
        usernameField: 'userName', // 'email'
        passwordField: 'password',
        passReqToCallback: true
    },(req, userName, password, done) => {
        const user = users.find((user) => user.userName === userName)
        if (!user) { 
            return done(null, false, 'Incorrect userName');
        }

        if (user.password !== password) {
            return done(null, false, 'Incorrect password' );
        }

        return done(null, user, 'Usuario ingresado con exito');
    })
);

// Ruta de inicio de sesión
function login(req, res, next) {
    const userReq = req.body //{email:'',pass:''}
    passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/' }, (err, user, message) => {
        // console.log({messageError})
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message});
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