import express from "express";
import cors from "cors";
import { nodemailer } from "./routers/nodemailer-routes.mjs";

export const PORT = process.env.PORT || 4000;
export const server = express();

server.use(cors());
server.use(express.json());

server.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline'"
  );
  next();
});

server.get("/", (req, res) => {res.send("Servidor backend online")});
server.use("/contact", nodemailer);
server.use('/cv', express.static('public/javierTrujilloCV.pdf'));
