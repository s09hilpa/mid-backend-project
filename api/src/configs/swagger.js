import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const specs = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Events API",
      version: "1.0.0",
    },
  },
  apis: ["src/**/*.js"],
});

export default function swaggerSetup(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
