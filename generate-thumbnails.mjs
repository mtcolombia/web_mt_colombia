import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs/promises';

const execAsync = promisify(exec);

const videoDir = path.join(process.cwd(), 'public', 'videos');
const thumbnailDir = path.join(process.cwd(), 'public', 'images', 'video-thumbnails');

async function generateThumbnails() {
  try {
    // Asegurarse de que el directorio de miniaturas exista
    await fs.mkdir(thumbnailDir, { recursive: true });

    // Leer todos los archivos del directorio de videos
    const files = await fs.readdir(videoDir);
    const videoFiles = files.filter(file => /\.(mp4|mov|webm|ogv)$/i.test(file));

    if (videoFiles.length === 0) {
      console.log('No se encontraron videos en la carpeta public/videos.');
      return;
    }

    console.log(`Se encontraron ${videoFiles.length} videos. Generando miniaturas...`);

    // Procesar cada video en paralelo
    const promises = videoFiles.map(async (file) => {
      const videoPath = path.join(videoDir, file);
      const thumbnailName = `${path.parse(file).name}.jpg`;
      const thumbnailPath = path.join(thumbnailDir, thumbnailName);

      // Extraer el primer fotograma del video
      const command = `ffmpeg -i "${videoPath}" -ss 00:00:01.000 -vframes 1 -y "${thumbnailPath}"`;

      try {
        await execAsync(command);
        console.log(`Miniatura generada para ${file} -> ${thumbnailName}`);
      } catch (error) {
        console.error(`Error al generar la miniatura para ${file}:`, error);
      }
    });

    await Promise.all(promises);
    console.log('Proceso de generación de miniaturas completado.');

  } catch (error) {
    if (error.code === 'ENOENT') {
        console.error(`Error: El directorio de videos no existe en ${videoDir}`);
        console.error('Por favor, crea la carpeta "public/videos" y coloca tus videos allí.');
    } else {
        console.error('Ocurrió un error durante la generación de miniaturas:', error);
    }
  }
}

generateThumbnails();
