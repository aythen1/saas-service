import { Router } from "express";
import { getHeadersByPk } from "../../controllers/headers/get-id-header.js";

const outputHeadersRoutes = Router();

/**
 * @swagger
 * /api-v1/headers/{id}:
 *   get:
 *     description: Returns headers by id
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *     tags:
 *      - Headers
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: headers
 */
outputHeadersRoutes.get("/:id", getHeadersByPk);

export default outputHeadersRoutes;
