import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const swagger = Router()

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'Documentation SEO',
      description: 'API SEO routes use'
    }
  },
  basePath: '/',
  apis: [
    './src/v1/routes/outputs/output-user.js',
    './src/v1/routes/outputs/output-website.js',
    './src/v1/routes/outputs/output-seo.js',
    './src/v1/routes/outputs/output-security.js',
    './src/v1/routes/outputs/output-performance.js',
    './src/v1/routes/outputs/output-miscellaneous.js',
    './src/v1/routes/inputs/input-user.js',
    './src/v1/routes/inputs/input-website.js',
    './src/v1/routes/inputs/input-seo.js',
    './src/v1/routes/inputs/input-security.js',
    './src/v1/routes/inputs/input-performance.js',
    './src/v1/routes/inputs/input-miscellaneous.js'
  ]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

swagger.use('/', swaggerUi.serve)
swagger.get('/', swaggerUi.setup(swaggerDocs))

export default swagger
