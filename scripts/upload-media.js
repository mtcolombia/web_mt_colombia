const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

// Configuración de Cloudflare R2
const client = new S3Client({
  endpoint: 'https://c7d6261fc560e07bd581dab927c46458.r2.cloudflarestorage.com',
  credentials: {
    accessKeyId: '8d5295dfec0b18cc20da7953e2b6ba7f',
    secretAccessKey: 'dea0bb9045456207a6cd1808fa3cd1604428d7b817b12683a7f627c6477550a9',
  },
  region: 'auto',
});

const BUCKET_NAME = 'centro-mt-assets';
const VIDEOS_DIR = path.join(__dirname, '..', 'public', 'videos');

async function uploadFile(filePath) {
  const fileName = path.basename(filePath);
  const fileStream = fs.createReadStream(filePath);
  const fileSize = fs.statSync(filePath).size;
  const fileMB = (fileSize / (1024 * 1024)).toFixed(2);

  console.log(`[R2] Iniciando subida de: ${fileName} (${fileMB} MB)...`);

  // Detectar Content-Type
  let contentType = 'video/mp4';
  if (fileName.endsWith('.webm')) contentType = 'video/webm';

  try {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: `videos/${fileName}`,
      Body: fileStream,
      ContentType: contentType,
    });

    await client.send(command);
    console.log(`[R2] ✅ Subido con éxito: ${fileName}`);
  } catch (error) {
    console.error(`[R2] ❌ Error subiendo ${fileName}:`, error);
  }
}

async function main() {
  if (!fs.existsSync(VIDEOS_DIR)) {
    console.error(`La carpeta de videos no existe en: ${VIDEOS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(VIDEOS_DIR).filter(file => {
    return file.endsWith('.mp4') || file.endsWith('.webm');
  });

  console.log(`Encontrados ${files.length} videos para subir.`);

  for (const file of files) {
    const fullPath = path.join(VIDEOS_DIR, file);
    await uploadFile(fullPath);
  }

  console.log('\n[R2] Proceso de subida completado.');
}

main().catch(console.error);
