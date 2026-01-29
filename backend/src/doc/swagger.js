import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = fs.readFileSync(path.join(__dirname, './swagger.yaml'), 'utf-8');
const swaggerDoc = YAML.parse(file);

export { swaggerUi, swaggerDoc };
