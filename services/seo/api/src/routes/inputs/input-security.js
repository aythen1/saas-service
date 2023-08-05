import { Router } from "express";
import { addSecurity } from "../../controllers/security/add-security";
import { deleteSecurity } from "../../controllers/security/delete-security";

const inputSecurityRoutes = Router();

inputSecurityRoutes.post("/", addSecurity);

inputSecurityRoutes.put("/", deleteSecurity);

export default inputSecurityRoutes;
