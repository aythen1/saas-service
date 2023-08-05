import { Router } from "express";
import { addHeaders } from "../../controllers/headers/add-header";
import { deleteHeaders } from "../../controllers/headers/delete-header";

const inputHeadersRoutes = Router();

inputHeadersRoutes.post("/", addHeaders);

inputHeadersRoutes.put("/:id", deleteHeaders);

export default inputHeadersRoutes;
