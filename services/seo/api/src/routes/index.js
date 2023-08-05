import { Router } from "express";
import swagger from "./swagger.js";
import outputUserRoutes from "./outputs/output-user.js";
import outputWebsiteRoutes from "./outputs/output-website.js";
import outputSeoRoutes from "./outputs/output-seo.js";
import outputSecurityRoutes from "./outputs/output-security.js";
import outputPerformanceRoutes from "./outputs/output-performance.js";
import outputMiscellaneousRoutes from "./outputs/output-miscellaneous.js";
import outputHeadersRoutes from "./outputs/output-headers.js";
import userInputRoutes from "./inputs/input-user.js";

const index = Router();

index.use("/docs", swagger);
index.use("/user", outputUserRoutes);
index.use("/user", userInputRoutes);
index.use("/website", outputWebsiteRoutes);
index.use("/seo", outputSeoRoutes);
index.use("/security", outputSecurityRoutes);
index.use("/performance", outputPerformanceRoutes);
index.use("/miscellaneous", outputMiscellaneousRoutes);
index.use("/headers", outputHeadersRoutes);

export default index;
