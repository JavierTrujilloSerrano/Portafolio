import express from "express";
import cors from "cors";
import { nodemailer } from "./routers/nodemailer-routes.js";
import downloadCV from "./controllers/cvController.js";

export const PORT = process.env.PORT || 4000;
export const server = express();

server.use(cors());
server.use(express.json());

server.use("/contact", nodemailer);
server.get("/cv", downloadCV);
