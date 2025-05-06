import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function downloadCV(req, res) {
  try {
    const filePath = path.join(__dirname, '../../public', 'cv.pdf');

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error("Error file not found:", err);
        return res.status(404).send("File not found");
      }

      if (!stats.isFile()) {
        console.log("File does not exist at specified path");
        return res.status(404).send("File not found");
      }

      console.log("File exists. Starting download...");

      res.setHeader("Content-Disposition", 'attachment; filename="cv.pdf"');
      res.setHeader("Content-Type", "application/pdf");

      res.sendFile(filePath);
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    return res.status(500).send("Error downloading file");
  }
}
