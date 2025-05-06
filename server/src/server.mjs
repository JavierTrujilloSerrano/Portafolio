import express from "express";
import cors from "cors";
import { nodemailer } from "./routers/nodemailer-routes.mjs";
import downloadCV from "./controllers/cvController.mjs";

export const PORT = process.env.PORT || 4000;
export const server = express();

server.use(cors());
server.use(express.json());

server.use("/contact", nodemailer);
server.get("/cv", downloadCV);
