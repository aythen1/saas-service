import express from 'express'
import * as dotenv from 'dotenv'
import app from './src/v1/app.js'
import { db } from './src/v1/database/connection/connectionDB.js'

dotenv.config()

const { PORT } = process.env
const server = express()

server.use(app)

server.listen(PORT || 4008, () => {
  db.sync({ force: true }).then(() =>
    console.log(`Database Synchronized { force: true }. Server on port: ${PORT || 4008}`)
  )
})
