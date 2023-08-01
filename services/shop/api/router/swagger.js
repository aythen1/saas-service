import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swagger = Router();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Documentation Shop",
      description: "API Shop routes use",
    },
  },
  basePath: "/",
  apis: ["./router/user.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

swagger.use("/docs", swaggerUi.serve);
swagger.get("/docs", swaggerUi.setup(swaggerDocs));

export default swagger;
