import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import downloadCV from "./controllers/cvController.mjs";
import { nodemailer } from "./routers/nodemailer-routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PORT = process.env.PORT || 4000;
export const server = express();

server.use(cors());
server.use(express.json());

server.use(express.static(path.join(__dirname, "public")));

server.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline'"
  );
  next();
});
server.get("/", (req, res) => {res.send("Servidor backend online")});
server.use("/contact", nodemailer);
server.get("/cv", downloadCV);
