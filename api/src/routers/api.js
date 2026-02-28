import express from "express";
import eventsRouter from "#routers/events.js";
import unDocumentedDemo from "#routers/undocumented.js";

const apiRouter = express.Router();

apiRouter.use("/events", eventsRouter);
apiRouter.use("/undocumented", unDocumentedDemo);

export default apiRouter;