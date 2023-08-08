import * as dotenv from 'dotenv'
import express from 'express'
import app from './src/v1/app.js'
import { db } from './src/v1/database/connection/connectionDB.js'
dotenv.config()

const { PORT } = process.env
const server = express()

server.use(app)

db.sync({ force: false })
  .then(() => {
    console.log('base de datos cargada correctamente')
    server.listen(PORT || 4009, () => {
      console.log(`Server on port: ${PORT || 4009}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
