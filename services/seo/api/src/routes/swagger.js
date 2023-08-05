import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swagger = Router();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Documentation SEO",
      description: "API SEO routes use",
    },
  },
  basePath: "/",
  apis: [
    "./src/routes/outputs/output-user.js",
    "./src/routes/outputs/output-website.js",
    "./src/routes/outputs/output-seo.js",
    "./src/routes/outputs/output-security.js",
    "./src/routes/outputs/output-performance.js",
    "./src/routes/outputs/output-miscellaneous.js",
    "./src/routes/outputs/output-headers.js",
    "./src/routes/inputs/input-user.js",
    "./src/routes/inputs/input-website.js",
    "./src/routes/inputs/input-seo.js",
    "./src/routes/inputs/input-security.js",
    "./src/routes/inputs/input-performance.js",
    "./src/routes/inputs/input-miscellaneous.js",
    "./src/routes/inputs/input-headers.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

swagger.use("/", swaggerUi.serve);
swagger.get("/", swaggerUi.setup(swaggerDocs));

export default swagger;
