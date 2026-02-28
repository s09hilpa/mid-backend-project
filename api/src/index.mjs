import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import rootRouter from "#routers";
import swaggerSetup from "#configs/swagger.js";
import middlewares from "#middlewares";

const app = express();

app.use(cors());
app.use(bodyParser.json());

for (const middleware of middlewares) {
  app.use(middleware);
}


app.use("/", rootRouter);

// must be last call before listen to ensure all endpoints was detected, regardless they are documented or not
swaggerSetup(app)

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.info(`${process.env.APP_NAME || "Backend-Mid-Specialism"} app started on port ${port }`);
});




