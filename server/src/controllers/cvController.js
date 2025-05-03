import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function downloadCV(req, res) {
  const filePath = path.join(__dirname, '../../public/javierTrujilloCV.pdf');
  console.log('Ruta del archivo:', filePath); // Verifica la ruta del archivo

  if (!fs.existsSync(filePath)) {
    console.log('El archivo no existe en la ruta especificada.');
    return res.status(404).send('Archivo no encontrado');
  }

  console.log('El archivo existe. Iniciando descarga...');

  res.setHeader('Content-Disposition', 'attachment; filename="javierTrujilloCV.pdf"');
  res.setHeader('Content-Type', 'application/pdf');

  res.download(filePath, 'javierTrujilloCV.pdf', (err) => {
    if (err) {
      console.error('Error al descargar el archivo:', err);
      return res.status(500).send('Error al descargar el archivo');
    }
    console.log('Descarga completada con éxito.');
  });
};
