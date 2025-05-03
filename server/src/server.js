import express from "express";
import cors from "cors";
import { nodemailer } from "./routers/nodemailer-routes.js";
import cvController from "./controllers/cvController.js";

export const PORT = process.env.PORT || 4000;
export const server = express();

server.use(cors());
server.use(express.json());

server.use("/contact", nodemailer);
server.get("/cv", (req, res) => cvController(req, res));

server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default server;
