import https from 'https';
import fs from 'fs';
import app from './src/app.js';
import 'dotenv/config';
import connectDatabase from './src/config/db.js';

const PORT = process.env.PORT || 3000;

await connectDatabase();

if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, () => {
    console.log(`Server(production) running at http://localhost:${PORT}`);
  });
} else {
  const key = await fs.readFileSync('./src/certificate/localhost-key.pem');
  const cert = await fs.readFileSync('./src/certificate/localhost.pem');
  https.createServer({ key, cert }, app).listen(PORT, () => {
    console.log(`Server(development) running at https://localhost:${PORT}`);
  });
}
