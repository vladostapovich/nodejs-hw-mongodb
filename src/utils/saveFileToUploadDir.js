import path from 'node:path';
import fs from 'node:fs/promises';
import { TEMPLATES_DIR, TEMP_UPLOAD_DIR } from '../contacts/index.js';
import { getEnvVar } from './getEnvVar.js';

export const saveFileToUploadDir = async (file) => {
  await fs.rename(
    path.join(TEMPLATES_DIR, file.filename),
    path.join(TEMP_UPLOAD_DIR, file.filename),
  );
  return `${getEnvVar('APP_DOMAIN')}/uploads/${file.filename}`;
};
