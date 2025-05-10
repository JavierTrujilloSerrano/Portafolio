// server/controllers/cvController.mjs
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function downloadCV(req, res) {
  const filePath = path.join(__dirname, "../public", "cv.pdf");
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      return res.status(404).send("Archivo no encontrado");
    }
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="javierTrujilloCV.pdf"'
    );
    res.setHeader("Content-Type", "application/pdf");
    res.sendFile(filePath);
  });
}
