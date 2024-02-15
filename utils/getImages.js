import fs from 'fs';
import path from 'path';

export function getImageNames() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (fs.existsSync(imagesDir)) {
    const imageFiles = fs.readdirSync(imagesDir);
    return imageFiles;
  }
  return [];
}
