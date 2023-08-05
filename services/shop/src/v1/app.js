import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import fileDirName from './file-dir-name.js'
import path from 'path'

import index from './router/index.js'

const { __dirname, __filename } = fileDirName(import.meta)

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('The Secret of Aythen'))

// express-session
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'The Secret of Aythen',
  resave: true,
  saveUninitialized: true
}))

// passport
app.use(passport.initialize())
app.use(passport.session())

app.use(passport.authenticate('session'))

app.use('/', index) // http://localhost:3001/

app.get('/root', (req, res) => { // http://localhost:3001/root
  res.json({
    index: '/root'
  })
})
export default app
