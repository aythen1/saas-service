import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const swagger = Router()

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'Documentation CRM',
      description: 'API CRM routes use'
    }
  },
  basePath: '/',
  apis: [
    './src/v1/router/outputs/output-user.js',
    './src/v1/router/outputs/output-event.js',
    './src/v1/router/outputs/output-note.js',
    './src/v1/router/outputs/output-payment.js',
    './src/v1/router/outputs/output-call.js',
    './src/v1/router/inputs/input-user.js',
    './src/v1/router/inputs/input-event.js',
    './src/v1/router/inputs/input-note.js',
    './src/v1/router/inputs/input-payment.js',
    './src/v1/router/inputs/input-call.js'
  ]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

swagger.use('/', swaggerUi.serve)
swagger.get('/', swaggerUi.setup(swaggerDocs))

export default swagger
