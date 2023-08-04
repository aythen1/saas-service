import { Router } from "express";

const routerUser = Router();

/**
 * @swagger
 * /user:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 */

routerUser.get("/user", (req, res) => {
  res.send("/user");
});

export default routerUser;
