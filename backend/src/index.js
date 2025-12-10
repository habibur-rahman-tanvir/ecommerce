import https from 'https';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import app from './app.js';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const key = await fs.readFileSync(join(__dirname, './certificate/localhost-key.pem'));
const cert = await fs.readFileSync(join(__dirname, './certificate/localhost.pem'));

if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, () => {
    console.log(`Server(production) running at PORT: ${PORT}`);
  });
} else {
  https.createServer({ key, cert }, app).listen(PORT, () => {
    console.log(`Server(development) running at https://localhost:${PORT}`);
  });
}
