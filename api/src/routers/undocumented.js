import express from "express";

const unDocumentedDemo = express.Router();

unDocumentedDemo.get("/", (_req, res) => res.json({message: "Hello I'm undocumented endpoint!"}))

export default unDocumentedDemo;