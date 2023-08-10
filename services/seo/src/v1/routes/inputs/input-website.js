import { Router } from 'express'
import { addWebsite } from '../../controllers/website/add-website'
import { updateWebsite } from '../../controllers/website/update-website'
import { deleteWebsite } from '../../controllers/website/delete-website'

const inputWebsiteRoutes = Router()

/**
 * @swagger
 * /api-v1/website:
 *   post:
 *     description: Create website
 *     tags:
 *      - Websites
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            domain:
 *              type: string
 *              description: Agregar dominio o subdominio
 *            privacy:
 *              type: string
 *              description: Puede ser privada, publica o con password
 *            password:
 *              type: string
 *              description: En caso de elegir password antes se coloca aqui
 *            notification:
 *              type: string
 *              description: Email para recibir informes periodicos
 *            ips:
 *              type: string
 *              description: Para excluir IPs
 *            url:
 *              type: string
 *              description: Para excluir parametro de consulta de URL
 *            bots:
 *              type: string
 *              description: Para excluir los bots comunes del seguimiento
 *            script:
 *              type: string
 *              description: Script que se incluye en el <head> o <body>
 *          required:
 *            - domain
 *     responses:
 *       201:
 *         description: website
 */
inputWebsiteRoutes.post('/', addWebsite)

/**
 * @swagger
 * /api-v1/website/{id}:
 *   put:
 *     description: Update website
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *      - in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            pages:
 *              type: string
 *            referrers:
 *              type: string
 *            countries:
 *              type: string
 *            browsers:
 *              type: string
 *            operatingSystems:
 *              type: string
 *            events:
 *              type: string
 *            visitors:
 *              type: string
 *            pageViews:
 *              type: string
 *     tags:
 *      - Websites
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: website
 */
inputWebsiteRoutes.put('/:id', updateWebsite)

/**
 * @swagger
 * /api-v1/website/delete/{id}:
 *   put:
 *     description: Delete website
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Websites
 *     produces:
 *      - application/json
 *     responses:
 *       201:
 *         description: website
 */
inputWebsiteRoutes.put('/delete/:id', deleteWebsite)

export default inputWebsiteRoutes
